import {
    Container,
    Header,
    Button,
    Box,
    ColumnLayout,
    SpaceBetween,
    Popover,
    StatusIndicator,
    StatusIndicatorProps,
    Table,
    Modal,
} from '@cloudscape-design/components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetMedicationQuery } from '../../API';
import { LazyMedication, LazyPatient, Patient } from '../../models';
import { InfoLink } from '../../pages/ElectronicPatientRecord';
import styles from '../../styles/styles.module.scss';
import { DataStore } from '@aws-amplify/datastore';
import { Medication } from '../../models';
import { MedicationForm } from '../../ui-components';

interface IMedicationsInfoProps {
    loadHelpPanelContent: (index: React.SetStateAction<number>) => void;
    patient: LazyPatient;
}

interface CopyTextProps {
    copyText: string;
    copyButtonLabel: string;
    successText: string;
    errorText: string;
}
const SUCCESS_STATUS = 'success';
const ERROR_STATUS = 'error';

// Force function to return a promise even if it throws synchronously
// eslint-disable-next-line require-await
export async function copyToClipboard(text: string) {
    return navigator.clipboard.writeText(text);
}

function CopyText({
    copyText,
    copyButtonLabel,
    successText,
    errorText,
}: CopyTextProps) {
    const [status, setStatus] =
        React.useState<StatusIndicatorProps.Type>(SUCCESS_STATUS);
    const [message, setMessage] = React.useState(successText);

    return (
        <div className={styles['custom-wrapping']}>
            <Box margin={{ right: 'xxs' }} display="inline-block">
                <Popover
                    size="small"
                    position="top"
                    dismissButton={false}
                    triggerType="custom"
                    content={
                        <StatusIndicator type={status}>
                            {message}
                        </StatusIndicator>
                    }
                >
                    <Button
                        variant="inline-icon"
                        iconName="copy"
                        ariaLabel={copyButtonLabel}
                        onClick={() => {
                            copyToClipboard(copyText).then(
                                () => {
                                    setStatus(SUCCESS_STATUS);
                                    setMessage(successText);
                                },
                                () => {
                                    setStatus(ERROR_STATUS);
                                    setMessage(errorText);
                                }
                            );
                        }}
                    />
                </Popover>
            </Box>
            {copyText}
        </div>
    );
}

const SettingsDetails = ({
    patient,
    isInProgress,
}: {
    patient: LazyPatient;
    isInProgress: any;
}) => (
    <ColumnLayout columns={4} variant="text-grid">
        <SpaceBetween size="l">
            <div>
                <Box variant="awsui-key-label">Patient Name</Box>
                {/* <div>{patient.name}</div> */}
            </div>
            <div>
                <Box variant="awsui-key-label">Domain name</Box>
                {/* <div>{patient.address}</div> */}
            </div>
            <div>
                <Box variant="awsui-key-label">ARN</Box>
                <CopyText
                    copyText={`arn:aws:cloudfront::${``}/${``}`}
                    copyButtonLabel="Copy ARN"
                    successText="ARN copied"
                    errorText="ARN failed to copy"
                />
            </div>
        </SpaceBetween>

        <SpaceBetween size="l">
            <div>
                <Box variant="awsui-key-label">SSL certificate</Box>
                {/* <div>{patient.insurance}</div> */}
            </div>
            <div>
                <Box variant="awsui-key-label">Custom SSL client support</Box>
                <div>-</div>
            </div>
            <div>
                <Box variant="awsui-key-label">Logging</Box>
                {/* <div>{patient.logging}</div> */}
            </div>
        </SpaceBetween>
        <SpaceBetween size="l">
            <div>
                <Box variant="awsui-key-label">IPv6</Box>
                <div>Off</div>
            </div>
            <div>
                <Box variant="awsui-key-label">Default root object</Box>
                <div>-</div>
            </div>
            <div>
                <Box variant="awsui-key-label">Comment</Box>
                <div>To verify</div>
            </div>
        </SpaceBetween>
    </ColumnLayout>
);
// Based on the definition below create the additional entries in the array
// type Medication @model @auth(rules: [{allow: public},
//   id: ID!
//   name: String
//   usage: String
//   dosage: String
//   frequency: String
//   sideEffects: String
//   interactions: String
//   patientID: ID! @index(name: "byPatient")
// }
const MEDICATION_COLUMN_DEFINITION = [
    {
        id: 'name',
        header: 'Name',
        cell: (item: { name?: string }) => item.name,
    },
    {
        id: 'usage',
        header: 'Usage',
        cell: (item: { usage?: any }) => item.usage,
    },
    {
        id: 'dosage',
        header: 'Dosage',
        cell: (item: { dosage: string }) => item.dosage,
    },
    {
        id: 'frequency',
        header: 'Frequency',
        cell: (item: { frequency: string }) => item.frequency,
    },
    {
        id: 'sideEffects',
        header: 'Side Effects',
        cell: (item: { sideEffects: string }) => item.sideEffects,
    },
    {
        id: 'interactions',
        header: 'Interactions',
        cell: (item: { interactions: string }) => item.interactions,
    },
    {
        id: 'createdAt',
        header: 'Created At',
        cell: (itme: { createdAt: string }) => itme.createdAt,
    },
    {
        id: 'lastChangedAt',
        header: 'Last Updated',
        cell: (itme: { _lastChangedAt: string }) => itme._lastChangedAt,
    },
];

function useAsyncData(loadCallback: any) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let rendered = true;
        loadCallback().then((items: React.SetStateAction<never[]>) => {
            if (rendered) {
                setItems(items);
                setLoading(false);
            }
        });
        return () => {
            rendered = false;
        };
    }, []);

    return [items, loading];
}
async function getMedications(patient: Patient) {
    return (await DataStore.query(Medication)).filter(
        (medication) => medication.patientID === patient.id
    );
}

class DataProvider {
    async getData(patient: LazyPatient) {
        return (await DataStore.query(Medication)).filter(
            (medication) => medication.patientID === patient.id
        );
    }
}

const getHeaderCounterText = (
    items: ReadonlyArray<unknown>,
    selectedItems: ReadonlyArray<unknown> | undefined
) => {
    return selectedItems && selectedItems?.length > 0
        ? `(${selectedItems.length}/${items.length})`
        : `(${items.length})`;
};

const MedicationsInfo: React.FunctionComponent<IMedicationsInfoProps> = (
    props
) => {
    const [medications, medicationsLoading] = useAsyncData(() =>
        new DataProvider().getData(props.patient)
    );
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [isUpdateModelOpen, setIsUpdateModalOpen] = useState<boolean>(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const isOnlyOneSelected = selectedItems.length === 1;
    const atLeastOneSelected = selectedItems.length > 0;

    const handleCreate = () => {};

    return (
        <>
            {isCreateModalOpen && <Modal visible={isCreateModalOpen}
                onDismiss={()=>setIsCreateModalOpen(false)}
                >

                <MedicationForm/>
                </Modal>}
            {isUpdateModelOpen && <Modal visible={isUpdateModelOpen}>
                    <MedicationUpdateForm/>
                </Modal>}
            <Table
                columnDefinitions={MEDICATION_COLUMN_DEFINITION as any}
                items={medications as any}
                loading={medicationsLoading as boolean}
                header={
                    <Header
                        counter={getHeaderCounterText(
                            medications as any,
                            selectedItems
                        )}
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button disabled={!isOnlyOneSelected}>
                                    Edit
                                </Button>
                                <Button disabled={!atLeastOneSelected}>
                                    Delete
                                </Button>
                                <Button onClick={handleCreate}>
                                    Create Medication
                                </Button>
                            </SpaceBetween>
                        }
                    />
                }
            />
        </>
    );
};

export default MedicationsInfo;
