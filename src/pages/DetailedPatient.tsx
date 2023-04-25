import {
    AppLayout,
    Box,
    BreadcrumbGroup,
    Button,
    ButtonDropdown,
    ColumnLayout,
    Container,
    ContentLayout,
    Flashbar,
    FlashbarProps,
    Header,
    Pagination,
    Popover,
    ProgressBar,
    SideNavigation,
    SideNavigationProps,
    SpaceBetween,
    StatusIndicator,
    StatusIndicatorProps,
    Table,
    TableProps,
    Tabs,
    TextFilter,
} from '@cloudscape-design/components';
import { v4 as uuid4 } from 'uuid';
import { DataStore } from 'aws-amplify';
import * as React from 'react';
import Link, { LinkProps } from '@cloudscape-design/components/link';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../styles/styles.module.scss';
import { InsuranceCarrier, Patient } from '../models';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { TableEmptyState, TableNoMatchState } from './ElectronicPatientRecord';
import type { AmplifyUser } from '@aws-amplify/ui';
import { UserContext } from './App';
import { Divider } from '@aws-amplify/ui-react';
import MedicationsInfo from '../components/patient/MedicationsInfo';

interface InfoLinkProps {
    id?: string;
    ariaLabel?: string;
    onFollow: LinkProps['onFollow'];
}
const InfoLink = ({ id, onFollow, ariaLabel }: InfoLinkProps) => (
    <Link variant="info" id={id} onFollow={onFollow} ariaLabel={ariaLabel}>
        Info
    </Link>
);

export interface PatientDetailProps {}
const PageHeader = ({ buttons, patient }: any) => {
    return (
        <Header
            variant="h1"
            actions={
                <SpaceBetween direction="horizontal" size="xs">
                    {buttons.map((button: any, key: any) =>
                        !button.items ? (
                            <Button
                                href={button.href || ''}
                                disabled={button.disabled || false}
                                key={key}
                                onClick={button.onClick}
                            >
                                {button.text}
                            </Button>
                        ) : (
                            <ButtonDropdown items={button.items} key={key}>
                                {button.text}
                            </ButtonDropdown>
                        )
                    )}
                </SpaceBetween>
            }
        >
            {/* {patient.name} */}
        </Header>
    );
};

const DistSettings = ({ patient, loadHelpPanelContent, isInProgress }: any) => (
    <Container
        header={
            <Header
                variant="h2"
                info={
                    <InfoLink
                        onFollow={() => loadHelpPanelContent(0)}
                        ariaLabel={'Information about distribution settings.'}
                    />
                }
            >
                Distribution settings
            </Header>
        }
    >
        <SettingsDetails patient={patient} isInProgress={isInProgress} />
    </Container>
);

export const DEMO_DISTRIBUTION = {
    id: 'SLCCSMWOHOFUY0',
    domainName: 'abcdef01234567890.cloudfront.net',
    arn: 'arn:aws:cloudfront::abcdef01234567890.cloudfront.net/SLCCSMWOHOFUY0',
    priceClass: 'Use only US, Canada, Europe, and Asia',
    sslCertificate: 'Default CloudFront SSL certificate',
    logging: 'Off',
};
const SUCCESS_STATUS = 'success';
const ERROR_STATUS = 'error';

interface CopyTextProps {
    copyText: string;
    copyButtonLabel: string;
    successText: string;
    errorText: string;
}

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
        useState<StatusIndicatorProps.Type>(SUCCESS_STATUS);
    const [message, setMessage] = useState(successText);

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
    patient: Patient;
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

class DataProvider {
    async getData() {
        console.log(await DataStore.query(Patient));
        return [];
    }
}
export const ORIGINS_COLUMN_DEFINITIONS = [
    {
        id: 'name',
        header: 'Name and path',
        cell: (item: { name: any }) => item.name,
    },
    {
        id: 'id',
        header: 'Origin ID',
        cell: (item: any) => item.id,
    },
    {
        id: 'type',
        header: 'Origin type',
        cell: (item: any) => item.type,
    },
    {
        id: 'accessIdentity',
        header: 'Origin access ID',
        cell: (item: any) => item.accessIdentity,
    },
];

export const baseTableAriaLabels: TableProps.AriaLabels<unknown> = {
    allItemsSelectionLabel: () => 'select all',
};

const originsSelectionLabels = {
    ...baseTableAriaLabels,
    itemSelectionLabel: (data: any, row: { name: any }) => `select ${row.name}`,
    selectionGroupLabel: 'Origins selection',
};

const getHeaderCounterText = (
    items: ReadonlyArray<unknown>,
    selectedItems: ReadonlyArray<unknown> | undefined
) => {
    return selectedItems && selectedItems?.length > 0
        ? `(${selectedItems.length}/${items.length})`
        : `(${items.length})`;
};

function OriginsTable() {
    const [origins, originsLoading] = useAsyncData(() =>
        new DataProvider().getData()
    );
    const [selectedItems, setSelectedItems] = useState([]);
    const isOnlyOneSelected = selectedItems.length === 1;
    const atLeastOneSelected = selectedItems.length > 0;

    return (
        <Table
            className="origins-table"
            columnDefinitions={ORIGINS_COLUMN_DEFINITIONS}
            loading={originsLoading as any}
            loadingText="Loading origins"
            items={origins as any}
            ariaLabels={originsSelectionLabels}
            selectionType="single"
            selectedItems={selectedItems}
            onSelectionChange={(event) =>
                setSelectedItems(event.detail.selectedItems as any)
            }
            header={
                <Header
                    counter={getHeaderCounterText(
                        origins as any,
                        selectedItems
                    )}
                    actions={
                        <SpaceBetween direction="horizontal" size="xs">
                            <Button disabled={!isOnlyOneSelected}>Edit</Button>
                            <Button disabled={!atLeastOneSelected}>
                                Delete
                            </Button>
                            <Button>Create origin</Button>
                        </SpaceBetween>
                    }
                >
                    Origins
                </Header>
            }
        />
    );
}

export const BEHAVIORS_COLUMN_DEFINITIONS = [
    {
        id: 'precedence',
        header: 'Precedence',
        cell: (item: { precedence: any }) => item.precedence,
    },
    {
        id: 'pathPattern',
        header: 'Path pattern',
        cell: (item: { pathPattern: any }) => item.pathPattern,
    },
    {
        id: 'origin',
        header: 'Origin',
        cell: (item: { origin: any }) => item.origin,
    },
    {
        id: 'viewerProtocolPolicy',
        header: 'Viewer protocol policy',
        cell: (item: { viewerProtocolPolicy: any }) =>
            item.viewerProtocolPolicy,
    },
    {
        id: 'forwardedQueryStrings',
        header: 'Forwarded query strings',
        cell: (item: { forwardedQueryStrings: any }) =>
            item.forwardedQueryStrings,
    },
];

function BehaviorsTable() {
    const [behaviors, behaviorsLoading] = useAsyncData(() =>
        new DataProvider().getData()
    );
    const [selectedItems, setSelectedItems] = useState([]);
    const isOnlyOneSelected = selectedItems.length === 1;
    const atLeastOneSelected = selectedItems.length > 0;

    return (
        <Table
            className="cache-table"
            columnDefinitions={BEHAVIORS_COLUMN_DEFINITIONS as any}
            items={behaviors as any}
            loading={behaviorsLoading as boolean | undefined}
            loadingText="Loading behaviors"
            selectionType="single"
            selectedItems={selectedItems}
            onSelectionChange={(event) =>
                setSelectedItems(event.detail.selectedItems)
            }
            header={
                <Header
                    counter={getHeaderCounterText(
                        behaviors as any,
                        selectedItems
                    )}
                    actions={
                        <SpaceBetween direction="horizontal" size="xs">
                            <Button disabled={!isOnlyOneSelected}>Edit</Button>
                            <Button disabled={!atLeastOneSelected}>
                                Delete
                            </Button>
                            <Button>Create behavior</Button>
                        </SpaceBetween>
                    }
                >
                    Cache behavior settings
                </Header>
            }
        />
    );
}

const GeneralConfig = ({ patient }: { patient: Patient }) => {
    return (
        <Container header={<Header variant="h2">{patient.name}</Header>}>
            <ColumnLayout columns={4} variant="text-grid">
                <div>
                    <Box variant="awsui-key-label">Address</Box>
                    <div>{patient.address}</div>
                </div>
                <div>
                    <Box variant="awsui-key-label">Date Of Birth</Box>
                    <div>{patient.dateOfBirth}</div>
                </div>
                <div>
                    <Box variant="awsui-key-label">Gender</Box>
                    <div>{patient.gender}</div>
                </div>
                <div>
                    <Box variant="awsui-key-label">Payment Status</Box>
                    <StatusIndicator
                        type={
                            patient.paymentStatus === 'PAYS_ON_TIME'
                                ? 'success'
                                : patient.paymentStatus ===
                                  'DIFFICULT_TO_GET_PAYMENTS'
                                ? 'in-progress'
                                : 'error'
                        }
                    >
                        {patient.paymentStatus === 'PAYS_ON_TIME'
                            ? 'Pays on time'
                            : patient.paymentStatus ===
                              'DIFFICULT_TO_GET_PAYMENTS'
                            ? 'Difficult to get payment'
                            : 'Late on payment'}
                    </StatusIndicator>
                </div>
            </ColumnLayout>
        </Container>
    );
};

const resourcesBreadcrumbs = (name: string) => [
    {
        text: 'Electronic Patient Record',
        href: `/electronic-patient-record`,
    },
    {
        text: name,
        href: window.location.href,
    },
];

export const Breadcrumbs = ({ name }: { name: string }) => (
    <BreadcrumbGroup
        items={resourcesBreadcrumbs(name)}
        expandAriaLabel="Show path"
        ariaLabel="Breadcrumbs"
    />
);

const Details = ({ loadHelpPanelContent, patient }: any) => (
    <Container
        header={
            <Header
                variant="h2"
                info={
                    <InfoLink
                        onFollow={() => loadHelpPanelContent(1)}
                        ariaLabel={'Information about details.'}
                    />
                }
                actions={<Button>Edit</Button>}
            >
                Details
            </Header>
        }
    >
        <SettingsDetails patient={patient} isInProgress={true} />
    </Container>
);

const LOGS_COLUMN_DEFINITIONS = [
    {
        id: 'name',
        header: 'Name',
        cell: (item: {
            name:
                | string
                | number
                | boolean
                | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
        }) => <Link href="#">{item.name}</Link>,
    },
    {
        id: 'lastWritten',
        header: 'Last written',
        cell: (item: { lastWritten: any }) => item.lastWritten,
    },
    {
        id: 'size',
        header: 'Size',
        cell: (item: { size: any }) => item.size,
    },
];
const getTextFilterCounterText = (count: number) =>
    `${count} ${count === 1 ? 'match' : 'matches'}`;

function LogsTable() {
    const [logs, logsLoading] = useAsyncData(() =>
        new DataProvider().getData()
    );
    const [selectedItems, setSelectedItems] = useState([]);
    const isOnlyOneSelected = selectedItems.length === 1;
    const atLeastOneSelected = selectedItems.length > 0;
    const {
        items,
        actions,
        filteredItemsCount,
        collectionProps,
        filterProps,
        paginationProps,
    } = useCollection(logs as any, {
        filtering: {
            empty: <TableEmptyState resourceName="Log" />,
            noMatch: (
                <TableNoMatchState
                    onClearFilter={() => actions.setFiltering('')}
                />
            ),
        },
        pagination: { pageSize: 10 },
    });

    return (
        <Table
            className="logs-table"
            {...collectionProps}
            loading={logsLoading as boolean | undefined}
            loadingText="Loading logs"
            columnDefinitions={LOGS_COLUMN_DEFINITIONS}
            items={items}
            selectionType="multi"
            selectedItems={selectedItems}
            onSelectionChange={(evt) =>
                setSelectedItems(evt.detail.selectedItems as any)
            }
            header={
                <Header
                    counter={getHeaderCounterText(logs as any, selectedItems)}
                    actions={
                        <SpaceBetween direction="horizontal" size="xs">
                            <Button disabled={!isOnlyOneSelected}>View</Button>
                            <Button disabled={!atLeastOneSelected}>
                                Watch
                            </Button>
                            <Button disabled={!atLeastOneSelected}>
                                Download
                            </Button>
                        </SpaceBetween>
                    }
                >
                    Logs
                </Header>
            }
            filter={
                <TextFilter
                    {...filterProps}
                    filteringAriaLabel="Find logs"
                    filteringPlaceholder="Find logs"
                    filteringClearAriaLabel="Clear"
                    countText={getTextFilterCounterText(
                        filteredItemsCount as number
                    )}
                />
            }
            pagination={<Pagination {...paginationProps} />}
        />
    );
}

const navHeader = { text: 'Service', href: '#/' };
export const navItems: SideNavigationProps['items'] = [
    {
        type: 'section',
        text: 'Reports and analytics',
        items: [
            { type: 'link', text: 'Distributions', href: '#/distributions' },
            { type: 'link', text: 'Cache statistics', href: '#/cache' },
            {
                type: 'link',
                text: 'Monitoring and alarms',
                href: '#/monitoring',
            },
            { type: 'link', text: 'Popular objects', href: '#/popular' },
            { type: 'link', text: 'Top referrers', href: '#/referrers' },
            { type: 'link', text: 'Usage', href: '#/usage' },
            { type: 'link', text: 'Viewers', href: '#/viewers' },
        ],
    },
    {
        type: 'section',
        text: 'Private content',
        items: [
            { type: 'link', text: 'How-to guide', href: '#/howto' },
            { type: 'link', text: 'Origin access identity', href: '#/origin' },
        ],
    },
];

const defaultOnFollowHandler: SideNavigationProps['onFollow'] = (event) => {
    // keep the locked href for our demo pages
    event.preventDefault();
};

interface NavigationProps {
    activeHref?: string;
    header?: SideNavigationProps['header'];
    items?: SideNavigationProps['items'];
    onFollowHandler?: SideNavigationProps['onFollow'];
}

export function Navigation({
    activeHref,
    header = navHeader,
    items = navItems,
    onFollowHandler = defaultOnFollowHandler,
}: NavigationProps) {
    return (
        <SideNavigation
            items={items}
            header={header}
            activeHref={activeHref}
            onFollow={onFollowHandler}
        />
    );
}

const useId = () => useMemo(() => uuid4(), []);

function useDisclaimerFlashbarItem(
    onDismiss: (id: string) => void
): FlashbarProps.MessageDefinition | null {
    const id = useId();

    return {
        type: 'info',
        dismissible: true,
        dismissLabel: 'Dismiss message',
        onDismiss: () => onDismiss(id),
        statusIconAriaLabel: 'info',
        content: (
            <>
                This demo is an example of Cloudscape Design System patterns and
                components, and may not reflect the current patterns and
                components of AWS services.
            </>
        ),
        id,
    };
}

const TAGS_COLUMN_DEFINITIONS = [
    {
        id: 'key',
        header: 'Key',
        cell: (item: any) => item.key,
        width: 300,
    },
    {
        id: 'value',
        header: 'Value',
        cell: (item: any) => item.value || '-',
    },
];

const EmptyTable = (props: { title: string; columnDefinitions: any }) => {
    const resourceType = props.title || 'Tag';
    const colDefs = props.columnDefinitions || TAGS_COLUMN_DEFINITIONS;
    return (
        <Table
            empty={<TableEmptyState resourceName={resourceType} />}
            columnDefinitions={colDefs}
            items={[]}
            header={
                <Header
                    actions={
                        <SpaceBetween size="xs" direction="horizontal">
                            <Button disabled={true}>Edit</Button>
                            <Button disabled={true}>Delete</Button>
                            <Button>Create {resourceType.toLowerCase()}</Button>
                        </SpaceBetween>
                    }
                >{`${resourceType}s`}</Header>
            }
        />
    );
};

function useNotifications(showSuccessNotification = false) {
    const successId = useId();
    const [successDismissed, dismissSuccess] = useState(false);
    const [disclaimerDismissed, dismissDisclaimer] = useState(false);

    const disclaimerItem = useDisclaimerFlashbarItem(() =>
        dismissDisclaimer(true)
    );

    const notifications: Array<FlashbarProps.MessageDefinition> = [];

    if (disclaimerItem && !disclaimerDismissed) {
        notifications.push(disclaimerItem);
    }

    if (showSuccessNotification && !successDismissed) {
        notifications.push({
            type: 'success',
            content: 'Resource created successfully',
            statusIconAriaLabel: 'success',
            dismissLabel: 'Dismiss message',
            dismissible: true,
            onDismiss: () => dismissSuccess(true),
            id: successId,
        });
    }

    return notifications;
}

interface NotificationsProps {
    successNotification?: boolean;
}

function Notifications({ successNotification }: NotificationsProps) {
    const notifications = useNotifications(successNotification);
    return <Flashbar items={notifications} />;
}

const INVALIDATIONS_COLUMN_DEFINITIONS = [
    {
        id: 'id',
        header: 'Invalidation ID',
    },
    {
        id: 'status',
        header: 'Status',
    },
    {
        id: 'date',
        header: 'Date',
    },
];

function PatientDetail() {
    const [toolsIndex, setToolsIndex] = useState(0);
    const [toolsOpen, setToolsOpen] = useState(false);
    const appLayout = useRef(null);
    const user = useContext(UserContext);
    const [patient, setPatient] = useState<Patient>({} as Patient);
    const patientID = window.location.href.split('/');
    const [insuranceProvider, setInsuranceProvider] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let ID = patientID[patientID.length - 1];

    useEffect(() => {
        const GetPatient = async () => {
            const patient = await DataStore.query(Patient, ID);
            setPatient(patient as Patient);
            console.log(patient?.InsuranceCarrier);
            setIsLoaded(true);
        };

        const GetInsurance = async () => {
            const insurance = patient.InsuranceCarrier;
            // console.log(insurance)
        };

        GetPatient().then(() => GetInsurance());

        return () => {};
    }, []);

    function loadHelpPanelContent(index: React.SetStateAction<number>) {
        setToolsIndex(index);
        setToolsOpen(true);
        //   appLayout.current?.focusToolsClose();
    }

    const tabs = [
        {
            label: 'Medications',
            id: 'medications',
            content: (
                <MedicationsInfo
                    patient={patient}
                    loadHelpPanelContent={loadHelpPanelContent}
                />
            ),
        },
        {
            label: 'Details',
            id: 'details',
            content: <Details loadHelpPanelContent={loadHelpPanelContent} />,
        },
        {
            label: 'Logs',
            id: 'logs',
            content: <LogsTable />,
        },
        {
            label: 'Origins',
            id: 'origins',
            content: <OriginsTable />,
        },
        {
            label: 'Behaviors',
            id: 'behaviors',
            content: <BehaviorsTable />,
        },
        {
            label: 'Invalidations',
            id: 'invalidations',
            content: (
                <EmptyTable
                    title="Invalidation"
                    columnDefinitions={INVALIDATIONS_COLUMN_DEFINITIONS}
                />
            ),
        },
    ];

    const appLayoutAriaLabels = {
        header: 'Application header',
        main: 'Application content',
        navigation: 'Application navigation',
        tools: 'Application tools',
    };

    const INSTANCE_DROPDOWN_ITEMS = [
        { text: 'Refresh', onClick: () => alert('refresh') },
        { text: 'Advanced' },
        { text: 'Delete' },
    ];

    return (
        <>
            {/* <Button onClick={CreateInsurance}>Create Insurance</Button> */}
            {isLoaded && (
                <AppLayout
                    ref={appLayout}
                    content={
                        <ContentLayout
                            header={
                                <PageHeader
                                    buttons={[
                                        {
                                            text: 'Actions',
                                            items: INSTANCE_DROPDOWN_ITEMS,
                                        },
                                        { text: 'Edit' },
                                        { text: 'Delete' },
                                    ]}
                                    patient={patient}
                                />
                            }
                        >
                            <SpaceBetween size="l">
                                <GeneralConfig patient={patient} />
                                <Tabs
                                    tabs={tabs}
                                    ariaLabel="Resource details"
                                />
                            </SpaceBetween>
                        </ContentLayout>
                    }
                    headerSelector="#header"
                    breadcrumbs={<Breadcrumbs name={patient.name as string} />}
                    navigation={<Navigation activeHref="#/distributions" />}
                    tools={toolsIndex}
                    toolsOpen={toolsOpen}
                    onToolsChange={({ detail }) => setToolsOpen(detail.open)}
                    ariaLabels={appLayoutAriaLabels}
                    notifications={<Notifications />}
                />
            )}
        </>
    );
}

export default PatientDetail;
