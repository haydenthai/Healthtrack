import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import styles from '../styles/styles.module.scss';
import '../styles/base.scss';
import {
    AppLayout,
    Box,
    BreadcrumbGroup,
    Button,
    Cards,
    CollectionPreferences,
    Container,
    Flashbar,
    FlashbarProps,
    Header,
    HeaderProps,
    HelpPanel,
    Icon,
    Link,
    LinkProps,
    Modal,
    Pagination,
    PaginationProps,
    SideNavigation,
    SideNavigationProps,
    SpaceBetween,
    StatusIndicator,
    TableProps,
    TextFilter,
} from '@cloudscape-design/components';
import {
    CancelableEventHandler,
    ClickDetail,
} from '@cloudscape-design/components/internal/events';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { DataStore } from '@aws-amplify/datastore';
import { Patient, Physician } from '../models';
import { PatientCreateForm } from '../ui-components';
import { PatientCreateFormInputValues } from 'src/ui-components/PatientCreateForm';
import { API, Hub } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListPatientsQuery } from '../API';
import { NavLink } from 'react-router-dom';
import type { AmplifyUser } from '@aws-amplify/ui';
import { UserContext } from './App';


const getTextFilterCounterText = (count: number) =>
    `${count} ${count === 1 ? 'match' : 'matches'}`;

export const paginationAriaLabels: PaginationProps.Labels = {
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    pageLabel: (pageNumber) => `Page ${pageNumber} of all pages`,
};

export const baseTableAriaLabels: TableProps.AriaLabels<unknown> = {
    allItemsSelectionLabel: () => 'select all',
};

export const distributionTableAriaLabels: TableProps.AriaLabels<{
    id: string;
}> = {
    ...baseTableAriaLabels,
    itemSelectionLabel: (data, row) => `select ${row.id}`,
    selectionGroupLabel: 'Patient selection',
};
export const getHeaderCounterText = (
    items: ReadonlyArray<unknown>,
    selectedItems: ReadonlyArray<unknown> | undefined
) => {
    return selectedItems && selectedItems?.length > 0
        ? `(${selectedItems.length}/${items.length})`
        : `(${items.length})`;
};

class DataProvider {
    async getData() {
        const models = await DataStore.query(Patient);
        console.log(models);

        // const allPatients = await API.graphql<GraphQLQuery<ListPatientsQuery>>(
        //     { query: queries.listPatients }
        //   );
        //   console.log(allPatients)
        // console.log(await DataStore.query(Physician));
        // console.log(await DataStore.query(Patient));
        let data = await DataStore.query(Patient);
        return data;
    }
}

interface NavigationProps {
    activeHref?: string;
    header?: SideNavigationProps['header'];
    items?: SideNavigationProps['items'];
    onFollowHandler?: SideNavigationProps['onFollow'];
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

export const CARD_DEFINITIONS = {
    header: (user: any) => (
        <div>
            <Link fontSize="heading-m" >
                {/* edit this navlink to detailed curated patient view */}
                <NavLink to={`/electronic-patient-record/${user.id}`}>
                    {user.name}

                </NavLink>
                {/* {console.log('user:', user)} */}
            </Link>
        </div>
    ),
    sections: [
        {
            id: 'cell',
            header: 'Cellular Number',
            content: (user: { cell: string }) => user.cell,
        },
        {
            id: 'insuranceCarrierID',
            header: 'Insurance Carrier ID',
            content: (user: { insuranceCarrierID: any }) =>
                user.insuranceCarrierID,
        },
        {
            id: 'dateOfBirth',
            header: 'Date of Birth',
            content: (user: { dateOfBirth: any }) => user.dateOfBirth,
        },
        {
            id: 'gender',
            header: 'Gender',
            content: (user: { gender: string }) => user.gender,
        },
        // {
        //     id: 'primaryCarePhysician',
        //     header: 'Primary Care Physician',
        //     content: (user: { primaryCarePhysician: any }) =>
        //         user.primaryCarePhysician,
        // },
        {
            id: 'listCurrentMedications',
            header: 'List Current Medications',
            content: (user: { listCurrentMedications: any }) =>
                user.listCurrentMedications,
        },
        {
            id: 'state',
            header: 'State',
            content: (user: {
                state:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | null
                    | undefined;
            }) => (
                <StatusIndicator
                    type={user.state === 'Deactivated' ? 'error' : 'success'}
                >
                    {user.state}
                </StatusIndicator>
            ),
        },
        {
            id: 'telephonephoneNumber',
            header: 'Phone Number',
            content: (user: { telephoneNumber: string }) => user.telephoneNumber,
        },
    ],
};

export const VISIBLE_CONTENT_OPTIONS = [
    {
        label: 'Main Patient Properties',
        options: [
            { id: 'name', label: 'Patient Name' },
            { id: 'cell', label: 'Cellular Number' },
            { id: 'primaryCarePhysician', label: 'Primary Care Physician' },
            { id: 'dateOfBirth', label: 'Date of Birth' },
            { id: 'insuranceCarrierID', label: 'Insurance Carrier ID' },
            { id: 'listCurrentMedications', label: 'List Current Medications' },
            {
                id: 'listScheduledAppointments',
                label: 'List Scheduled Appointments',
            },
        ],
    },
];

export const PAGE_SIZE_OPTIONS = [
    { value: 10, label: '10 Patients' },
    { value: 30, label: '30 Patients' },
    { value: 50, label: '50 Patients' },
];

export const DEFAULT_PREFERENCES = {
    pageSize: 30,
    visibleContent: [
        'name',
        'cell',
        'dateOfBirth',
        'gender',
        'primaryCarePhysician',
        'listCurrentMedications',
        'listScheduledAppointments',
        'createdAt',
        'updatedAt',
        '_version',
        '_lastChangedAt',
        '_deleted',
    ],
};
export interface PatientProps {}

export const save = (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value));

export const load = (key: string) => {
    const value = localStorage.getItem(key);
    try {
        return value && JSON.parse(value);
    } catch (e) {
        console.warn(
            `⚠️ The ${key} value that is stored in localStorage is incorrect. Try to remove the value ${key} from localStorage and reload the page`
        );
        return undefined;
    }
};

export function useLocalStorage<T>(key: string, defaultValue?: T) {
    const [value, setValue] = useState(() => load(key) ?? defaultValue);

    function handleValueChange(newValue: T) {
        setValue(newValue);
        save(key, newValue);
    }

    return [value, handleValueChange];
}

export const useId = () => useMemo(() => uuid4(), []);

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
        content: <>This is a demo Flashbar item</>,
        id,
    };
}

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
            content: 'Patient created successfully',
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

export function Notifications({ successNotification }: NotificationsProps) {
    const notifications = useNotifications(successNotification);
    return <Flashbar items={notifications} />;
}

export const TableNoMatchState = (props: {
    onClearFilter: CancelableEventHandler<ClickDetail> | undefined;
}) => (
    <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
        <SpaceBetween size="xxs">
            <div>
                <b>No matches</b>
                <Box variant="p" color="inherit">
                    We can't find a match.
                </Box>
            </div>
            <Button onClick={props.onClearFilter}>Clear filter</Button>
        </SpaceBetween>
    </Box>
);

export const TableEmptyState = ({ resourceName }: any) => (
    <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
        <SpaceBetween size="xxs">
            <div>
                <b>No {resourceName.toLowerCase()}s</b>
                <Box variant="p" color="inherit">
                    No {resourceName.toLowerCase()}s associated with this
                    resource.
                </Box>
            </div>
            <Button>Create {resourceName.toLowerCase()}</Button>
        </SpaceBetween>
    </Box>
);

interface InfoLinkProps {
    id?: string;
    ariaLabel?: string;
    onFollow: LinkProps['onFollow'];
}
export const InfoLink = ({ id, onFollow, ariaLabel }: InfoLinkProps) => (
    <Link variant="info" id={id} onFollow={onFollow} ariaLabel={ariaLabel}>
        Info
    </Link>
);

interface FullPageHeaderProps extends HeaderProps {
    title?: string;
    createButtonText?: string;
    extraActions?: React.ReactNode;
    selectedItemsCount: number;
    onInfoLinkClick?: () => void;
    onCreatePatientClick?: () => void;
}

export function FullPageHeader({
    title = 'Patients',
    createButtonText = 'Create patient',
    extraActions = null,
    selectedItemsCount,
    onCreatePatientClick,
    onInfoLinkClick,
    ...props
}: FullPageHeaderProps) {
    const isOnlyOneSelected = selectedItemsCount === 1;

    return (
        <Header
            variant="awsui-h1-sticky"
            info={
                onInfoLinkClick && (
                    <InfoLink
                        onFollow={onInfoLinkClick}
                        ariaLabel={`Information about ${title}.`}
                    />
                )
            }
            actions={
                <SpaceBetween size="xs" direction="horizontal">
                    {extraActions}
                    <Button
                        data-testid="header-btn-view-details"
                        disabled={!isOnlyOneSelected}
                    >
                        View details
                    </Button>
                    <Button
                        data-testid="header-btn-edit"
                        disabled={!isOnlyOneSelected}
                    >
                        Edit
                    </Button>
                    <Button
                        data-testid="header-btn-delete"
                        disabled={selectedItemsCount === 0}
                    >
                        Delete
                    </Button>
                    <Button
                        data-testid="header-btn-create"
                        variant="primary"
                        onClick={onCreatePatientClick}
                    >
                        {createButtonText}
                    </Button>
                </SpaceBetween>
            }
            {...props}
        >
            {title}
        </Header>
    );
}

function DetailsCards({
    loadHelpPanelContent,
    onCreatePatientClick,
}: {
    loadHelpPanelContent: () => void;
    onCreatePatientClick: () => void;
}) {
    const [loading, setLoading] = useState(true);
    const [patients, setPatients] = useState([]);
    const [preferences, setPreferences] = useLocalStorage(
        'React-Cards-Preferences',
        DEFAULT_PREFERENCES
    );
    const {
        items,
        actions,
        filteredItemsCount,
        collectionProps,
        filterProps,
        paginationProps,
    } = useCollection(patients, {
        filtering: {
            empty: <TableEmptyState resourceName="Distribution" />,
            noMatch: (
                <TableNoMatchState
                    onClearFilter={() => actions.setFiltering('')}
                />
            ),
        },
        pagination: { pageSize: preferences.pageSize },
        selection: {},
    });

    useEffect(() => {
        const removeListener = Hub.listen('datastore', async (capsule) => {
            const {
                payload: { event, data },
            } = capsule;

            if (event === 'ready') {
                new DataProvider().getData().then((patients: any) => {
                    setPatients(patients);
                    setLoading(false);
                });
                console.log(patients)
            }
        });
        DataStore.start();
        return () => {
            removeListener();
        };

    }, []);

    return (
        <Cards
            {...collectionProps}
            stickyHeader={true}
            cardDefinition={CARD_DEFINITIONS}
            visibleSections={preferences.visibleContent}
            loading={loading}
            loadingText="Loading patients..."
            items={items}
            selectionType="single"
            variant="full-page"
            ariaLabels={distributionTableAriaLabels as any}
            header={
                <FullPageHeader
                    selectedItemsCount={
                        collectionProps?.selectedItems?.length as number
                    }
                    counter={getHeaderCounterText(
                        patients,
                        collectionProps.selectedItems
                    )}
                    onInfoLinkClick={loadHelpPanelContent}
                    onCreatePatientClick={onCreatePatientClick}
                />
            }
            filter={
                <TextFilter
                    {...filterProps}
                    filteringAriaLabel="Filter patients"
                    filteringPlaceholder="Find patients"
                    filteringClearAriaLabel="Clear"
                    countText={getTextFilterCounterText(
                        filteredItemsCount as number
                    )}
                    disabled={loading}
                />
            }
            pagination={
                <Pagination
                    {...paginationProps}
                    ariaLabels={paginationAriaLabels}
                    disabled={loading}
                />
            }
            preferences={
                <CollectionPreferences
                    title="Preferences"
                    confirmLabel="Confirm"
                    cancelLabel="Cancel"
                    disabled={loading}
                    preferences={preferences}
                    onConfirm={({ detail }) => setPreferences(detail)}
                    pageSizePreference={{
                        title: 'Page size',
                        options: PAGE_SIZE_OPTIONS,
                    }}
                    visibleContentPreference={{
                        title: 'Select visible columns',
                        options: VISIBLE_CONTENT_OPTIONS,
                    }}
                />
            }
        />
    );
}

const CustomAppLayout = forwardRef<any, any>((props, ref) => {
    return (
        <AppLayout
            ref={ref}
            {...props}
            headerSelector="#header"
            ariaLabels={props.appLayoutAriaLabels}
        />
    );
});

const resourcesBreadcrumbs = (user:AmplifyUser) => [
    {
        text: 'Electronic Patient Record',
        href: '/electronic-patient-record',
    },
];

export const Breadcrumbs = (user:any) => (
    <BreadcrumbGroup
        items={resourcesBreadcrumbs(user)}
        expandAriaLabel="Show path"
        ariaLabel="Breadcrumbs"
    />
);

interface ExternalLinkItemProps {
    href: string;
    text: string;
}

interface ExternalLinkGroupProps {
    variant?: 'default' | 'container';
    header?: string;
    groupAriaLabel?: string;
    items: Array<ExternalLinkItemProps>;
}

const labelSuffix = 'Opens in a new tab';

function ExternalLinkItem({ href, text }: ExternalLinkItemProps) {
    return (
        <Link href={href} ariaLabel={`${text} ${labelSuffix}`} target="_blank">
            {text}
        </Link>
    );
}
interface SeparatedListProps {
    ariaLabel?: string;
    items: Array<React.ReactNode>;
}

export function SeparatedList({ ariaLabel, items }: SeparatedListProps) {
    return (
        <ul aria-label={ariaLabel} className={styles.root}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export function ExternalLinkGroup({
    header = 'Learn more',
    groupAriaLabel,
    items,
    variant = 'default',
}: ExternalLinkGroupProps) {
    const externalIcon = (
        <span role="img" aria-label="Icon external Link">
            <Icon name="external" size="inherit" />
        </span>
    );

    if (variant === 'container') {
        return (
            <Container
                header={
                    <Header>
                        {header} {externalIcon}
                    </Header>
                }
            >
                <SeparatedList
                    ariaLabel={groupAriaLabel}
                    items={items.map((item, index) => (
                        <ExternalLinkItem
                            key={index}
                            href={item.href}
                            text={item.text}
                        />
                    ))}
                />
            </Container>
        );
    }

    return (
        <>
            <h3>
                {header} {externalIcon}
            </h3>
            <ul aria-label={groupAriaLabel}>
                {items.map((item, index) => (
                    <li key={index}>
                        <ExternalLinkItem href={item.href} text={item.text} />
                    </li>
                ))}
            </ul>
        </>
    );
}

const toolsFooter = (
    <ExternalLinkGroup
        items={[
            {
                text: 'Working with distributions',
                href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html',
            },
            {
                text: 'Values that CloudFront displays on the console',
                href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-returned.html',
            },
        ]}
    />
);
export const ToolsContent = () => (
    <HelpPanel footer={toolsFooter} header={<h2>Patients</h2>}>
        <p>
            View your current distributions and related information such as the
            associated domain names, delivery methods, SSL certificates, and
            more. To drill down even further into the details, choose the name
            of an individual distribution.
        </p>
    </HelpPanel>
);

type handleCreatePatientSubmitType = (
    fields: PatientCreateFormInputValues
) => Promise<PatientCreateFormInputValues>;

export function ElectronicPatientRecord(props: PatientProps) {

    const [toolsOpen, setToolsOpen] = useState(false);
    const [successNotification, setSuccessNotification] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const appLayout = useRef<any>();
    const user = useContext(UserContext);

    const handleCreatePatient = () => {
        setIsModalOpen(true);
    };

    const handleCreatePatientSubmit = (
        fields: PatientCreateFormInputValues
    ): PatientCreateFormInputValues => {
        setIsModalOpen(false);
        setSuccessNotification(true);
        return fields;
    };

    return (
        <CustomAppLayout
            ref={appLayout}
            navigation={<Navigation activeHref={window.location.href} />}
            notifications={
                <Notifications successNotification={successNotification} />
            }
            breadcrumbs={<Breadcrumbs user={user}/>}
            content={
                <>
                    <Modal
                        visible={isModalOpen}
                        onDismiss={() => setIsModalOpen(false)}
                    >
                        <PatientCreateForm
                            onSubmit={handleCreatePatientSubmit}
                        />
                    </Modal>
                    <DetailsCards
                        loadHelpPanelContent={() => {
                            setToolsOpen(true);
                            appLayout?.current?.focusToolsClose();
                        }}
                        onCreatePatientClick={handleCreatePatient}
                    />
                </>
            }
            contentType="cards"
            tools={<ToolsContent />}
            toolsOpen={toolsOpen}
            onToolsChange={({ detail }: any) => setToolsOpen(detail.open)}
            stickyNotifications={true}
        />
    );
}

export default ElectronicPatientRecord;
