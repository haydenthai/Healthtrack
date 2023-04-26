import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Practitioner {
  NURSE = "NURSE",
  DOCTOR = "DOCTOR",
  PHYSICIAN = "PHYSICIAN",
  PHYSICIAN_ASSISTANT = "PHYSICIAN_ASSISTANT",
  PEDIATRIST = "PEDIATRIST",
  ANESTHESIOLOGIST = "ANESTHESIOLOGIST",
  RADIOLOGIST = "RADIOLOGIST",
  PSYCHOLOGIST = "PSYCHOLOGIST",
  NEUROLOGIST = "NEUROLOGIST",
  PSYCHIATRIST = "PSYCHIATRIST"
}

export enum InsuranceCarrierStatus {
  PAYS_ON_TIME = "PAYS_ON_TIME",
  LATE_WITH_PAYMENTS = "LATE_WITH_PAYMENTS",
  DIFFICULT_TO_GET_PAYMENTS = "DIFFICULT_TO_GET_PAYMENTS"
}

type EagerDay = {
  readonly id: string;
  readonly isReserved: boolean;
  readonly periods: number;
  readonly number: number;
}

type LazyDay = {
  readonly id: string;
  readonly isReserved: boolean;
  readonly periods: number;
  readonly number: number;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day>) => Day)

type EagerWeek = {
  readonly weekDays?: (Day | null)[] | null;
}

type LazyWeek = {
  readonly weekDays?: (Day | null)[] | null;
}

export declare type Week = LazyLoading extends LazyLoadingDisabled ? EagerWeek : LazyWeek

export declare const Week: (new (init: ModelInit<Week>) => Week)

type EagerPayments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly dayIssued: string;
  readonly dayFulfilled?: string | null;
  readonly isPaid: boolean;
  readonly patients?: (PatientPayments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPayments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly dayIssued: string;
  readonly dayFulfilled?: string | null;
  readonly isPaid: boolean;
  readonly patients: AsyncCollection<PatientPayments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Payments = LazyLoading extends LazyLoadingDisabled ? EagerPayments : LazyPayments

export declare const Payments: (new (init: ModelInit<Payments>) => Payments) & {
  copyOf(source: Payments, mutator: (draft: MutableModel<Payments>) => MutableModel<Payments> | void): Payments;
}

type EagerVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly preferred?: boolean | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly preferred?: boolean | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vendor = LazyLoading extends LazyLoadingDisabled ? EagerVendor : LazyVendor

export declare const Vendor: (new (init: ModelInit<Vendor>) => Vendor) & {
  copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor>) => MutableModel<Vendor> | void): Vendor;
}

type EagerEquipmentMaintenance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentMaintenance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly status?: boolean | null;
  readonly resolution?: string | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipmentMaintenance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentMaintenance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly status?: boolean | null;
  readonly resolution?: string | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipmentMaintenance = LazyLoading extends LazyLoadingDisabled ? EagerEquipmentMaintenance : LazyEquipmentMaintenance

export declare const EquipmentMaintenance: (new (init: ModelInit<EquipmentMaintenance>) => EquipmentMaintenance) & {
  copyOf(source: EquipmentMaintenance, mutator: (draft: MutableModel<EquipmentMaintenance>) => MutableModel<EquipmentMaintenance> | void): EquipmentMaintenance;
}

type EagerEquipmentOwned = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentOwned, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datePurchased?: string | null;
  readonly warranty?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipmentOwned = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentOwned, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datePurchased?: string | null;
  readonly warranty?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipmentOwned = LazyLoading extends LazyLoadingDisabled ? EagerEquipmentOwned : LazyEquipmentOwned

export declare const EquipmentOwned: (new (init: ModelInit<EquipmentOwned>) => EquipmentOwned) & {
  copyOf(source: EquipmentOwned, mutator: (draft: MutableModel<EquipmentOwned>) => MutableModel<EquipmentOwned> | void): EquipmentOwned;
}

type EagerEquipmentLeased = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentLeased, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipmentLeased = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentLeased, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipmentLeased = LazyLoading extends LazyLoadingDisabled ? EagerEquipmentLeased : LazyEquipmentLeased

export declare const EquipmentLeased: (new (init: ModelInit<EquipmentLeased>) => EquipmentLeased) & {
  copyOf(source: EquipmentLeased, mutator: (draft: MutableModel<EquipmentLeased>) => MutableModel<EquipmentLeased> | void): EquipmentLeased;
}

type EagerEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly department?: string | null;
  readonly owned?: boolean | null;
  readonly leased?: boolean | null;
  readonly Vendors?: (Vendor | null)[] | null;
  readonly EquipmentMaintenances?: (EquipmentMaintenance | null)[] | null;
  readonly EquipmentOwned?: EquipmentOwned | null;
  readonly EquipmentLeased?: EquipmentLeased | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly equipmentEquipmentOwnedId?: string | null;
  readonly equipmentEquipmentLeasedId?: string | null;
}

type LazyEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly department?: string | null;
  readonly owned?: boolean | null;
  readonly leased?: boolean | null;
  readonly Vendors: AsyncCollection<Vendor>;
  readonly EquipmentMaintenances: AsyncCollection<EquipmentMaintenance>;
  readonly EquipmentOwned: AsyncItem<EquipmentOwned | undefined>;
  readonly EquipmentLeased: AsyncItem<EquipmentLeased | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly equipmentEquipmentOwnedId?: string | null;
  readonly equipmentEquipmentLeasedId?: string | null;
}

export declare type Equipment = LazyLoading extends LazyLoadingDisabled ? EagerEquipment : LazyEquipment

export declare const Equipment: (new (init: ModelInit<Equipment>) => Equipment) & {
  copyOf(source: Equipment, mutator: (draft: MutableModel<Equipment>) => MutableModel<Equipment> | void): Equipment;
}

type EagerLabTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testTypeName?: string | null;
  readonly normalRange?: string | null;
  readonly abnormalRange?: string | null;
  readonly description?: string | null;
  readonly laborderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLabTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testTypeName?: string | null;
  readonly normalRange?: string | null;
  readonly abnormalRange?: string | null;
  readonly description?: string | null;
  readonly laborderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LabTest = LazyLoading extends LazyLoadingDisabled ? EagerLabTest : LazyLabTest

export declare const LabTest: (new (init: ModelInit<LabTest>) => LabTest) & {
  copyOf(source: LabTest, mutator: (draft: MutableModel<LabTest>) => MutableModel<LabTest> | void): LabTest;
}

type EagerServiceProvidedByClinic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceProvidedByClinic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceProvidedByClinic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceProvidedByClinic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceProvidedByClinic = LazyLoading extends LazyLoadingDisabled ? EagerServiceProvidedByClinic : LazyServiceProvidedByClinic

export declare const ServiceProvidedByClinic: (new (init: ModelInit<ServiceProvidedByClinic>) => ServiceProvidedByClinic) & {
  copyOf(source: ServiceProvidedByClinic, mutator: (draft: MutableModel<ServiceProvidedByClinic>) => MutableModel<ServiceProvidedByClinic> | void): ServiceProvidedByClinic;
}

type EagerWorkSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly twoMonthCalendar?: (Week | null)[] | null;
  readonly physicianID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly twoMonthCalendar?: (Week | null)[] | null;
  readonly physicianID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkSchedule = LazyLoading extends LazyLoadingDisabled ? EagerWorkSchedule : LazyWorkSchedule

export declare const WorkSchedule: (new (init: ModelInit<WorkSchedule>) => WorkSchedule) & {
  copyOf(source: WorkSchedule, mutator: (draft: MutableModel<WorkSchedule>) => MutableModel<WorkSchedule> | void): WorkSchedule;
}

type EagerPhysician = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Physician, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly cellPhoneNumber?: string | null;
  readonly WorkSchedules?: (WorkSchedule | null)[] | null;
  readonly Appointments?: (Appointment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhysician = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Physician, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly cellPhoneNumber?: string | null;
  readonly WorkSchedules: AsyncCollection<WorkSchedule>;
  readonly Appointments: AsyncCollection<Appointment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Physician = LazyLoading extends LazyLoadingDisabled ? EagerPhysician : LazyPhysician

export declare const Physician: (new (init: ModelInit<Physician>) => Physician) & {
  copyOf(source: Physician, mutator: (draft: MutableModel<Physician>) => MutableModel<Physician> | void): Physician;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly type?: string | null;
  readonly patientID: string;
  readonly physicianID: string;
  readonly ServiceProvidedByClinic?: ServiceProvidedByClinic | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentServiceProvidedByClinicId?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly type?: string | null;
  readonly patientID: string;
  readonly physicianID: string;
  readonly ServiceProvidedByClinic: AsyncItem<ServiceProvidedByClinic | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentServiceProvidedByClinicId?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerLabOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName?: string | null;
  readonly testType?: string | null;
  readonly testDate?: string | null;
  readonly technician?: string | null;
  readonly testResult?: string | null;
  readonly medicalencounterID: string;
  readonly ServiceProvidedByClinic?: ServiceProvidedByClinic | null;
  readonly LabTests?: (LabTest | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly labOrderServiceProvidedByClinicId?: string | null;
}

type LazyLabOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName?: string | null;
  readonly testType?: string | null;
  readonly testDate?: string | null;
  readonly technician?: string | null;
  readonly testResult?: string | null;
  readonly medicalencounterID: string;
  readonly ServiceProvidedByClinic: AsyncItem<ServiceProvidedByClinic | undefined>;
  readonly LabTests: AsyncCollection<LabTest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly labOrderServiceProvidedByClinicId?: string | null;
}

export declare type LabOrder = LazyLoading extends LazyLoadingDisabled ? EagerLabOrder : LazyLabOrder

export declare const LabOrder: (new (init: ModelInit<LabOrder>) => LabOrder) & {
  copyOf(source: LabOrder, mutator: (draft: MutableModel<LabOrder>) => MutableModel<LabOrder> | void): LabOrder;
}

type EagerPrescription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prescription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName: string;
  readonly medication: string;
  readonly dosag: string;
  readonly frequency: string;
  readonly filledBy?: string | null;
  readonly dateFilled: string;
  readonly medicalencounterID: string;
  readonly ServiceProvidedByClinic?: ServiceProvidedByClinic | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly prescriptionServiceProvidedByClinicId?: string | null;
}

type LazyPrescription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prescription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName: string;
  readonly medication: string;
  readonly dosag: string;
  readonly frequency: string;
  readonly filledBy?: string | null;
  readonly dateFilled: string;
  readonly medicalencounterID: string;
  readonly ServiceProvidedByClinic: AsyncItem<ServiceProvidedByClinic | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly prescriptionServiceProvidedByClinicId?: string | null;
}

export declare type Prescription = LazyLoading extends LazyLoadingDisabled ? EagerPrescription : LazyPrescription

export declare const Prescription: (new (init: ModelInit<Prescription>) => Prescription) & {
  copyOf(source: Prescription, mutator: (draft: MutableModel<Prescription>) => MutableModel<Prescription> | void): Prescription;
}

type EagerVitalSign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VitalSign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pulse: number;
  readonly respirationRate: number;
  readonly bloodPressure: string;
  readonly temperature?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVitalSign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VitalSign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pulse: number;
  readonly respirationRate: number;
  readonly bloodPressure: string;
  readonly temperature?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VitalSign = LazyLoading extends LazyLoadingDisabled ? EagerVitalSign : LazyVitalSign

export declare const VitalSign: (new (init: ModelInit<VitalSign>) => VitalSign) & {
  copyOf(source: VitalSign, mutator: (draft: MutableModel<VitalSign>) => MutableModel<VitalSign> | void): VitalSign;
}

type EagerMedicalEncounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalEncounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly practitionerSeen: (Practitioner | null)[] | keyof typeof Practitioner;
  readonly complaints?: string | null;
  readonly diagnosis: string;
  readonly treatmentPlan?: string | null;
  readonly referralToSpecialists?: string | null;
  readonly patientID: string;
  readonly VitalSign?: VitalSign | null;
  readonly Prescriptions?: (Prescription | null)[] | null;
  readonly LabOrders?: (LabOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly medicalEncounterVitalSignId?: string | null;
}

type LazyMedicalEncounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalEncounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly practitionerSeen: (Practitioner | null)[] | keyof typeof Practitioner;
  readonly complaints?: string | null;
  readonly diagnosis: string;
  readonly treatmentPlan?: string | null;
  readonly referralToSpecialists?: string | null;
  readonly patientID: string;
  readonly VitalSign: AsyncItem<VitalSign | undefined>;
  readonly Prescriptions: AsyncCollection<Prescription>;
  readonly LabOrders: AsyncCollection<LabOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly medicalEncounterVitalSignId?: string | null;
}

export declare type MedicalEncounter = LazyLoading extends LazyLoadingDisabled ? EagerMedicalEncounter : LazyMedicalEncounter

export declare const MedicalEncounter: (new (init: ModelInit<MedicalEncounter>) => MedicalEncounter) & {
  copyOf(source: MedicalEncounter, mutator: (draft: MutableModel<MedicalEncounter>) => MutableModel<MedicalEncounter> | void): MedicalEncounter;
}

type EagerMedication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly usage?: string | null;
  readonly dosage?: string | null;
  readonly frequency?: string | null;
  readonly sideEffects?: string | null;
  readonly interactions?: string | null;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly usage?: string | null;
  readonly dosage?: string | null;
  readonly frequency?: string | null;
  readonly sideEffects?: string | null;
  readonly interactions?: string | null;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Medication = LazyLoading extends LazyLoadingDisabled ? EagerMedication : LazyMedication

export declare const Medication: (new (init: ModelInit<Medication>) => Medication) & {
  copyOf(source: Medication, mutator: (draft: MutableModel<Medication>) => MutableModel<Medication> | void): Medication;
}

type EagerInsuranceCarrier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InsuranceCarrier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInsuranceCarrier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InsuranceCarrier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InsuranceCarrier = LazyLoading extends LazyLoadingDisabled ? EagerInsuranceCarrier : LazyInsuranceCarrier

export declare const InsuranceCarrier: (new (init: ModelInit<InsuranceCarrier>) => InsuranceCarrier) & {
  copyOf(source: InsuranceCarrier, mutator: (draft: MutableModel<InsuranceCarrier>) => MutableModel<InsuranceCarrier> | void): InsuranceCarrier;
}

type EagerPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly InsuranceCarrier?: InsuranceCarrier | null;
  readonly Medications?: (Medication | null)[] | null;
  readonly MedicalEncounters?: (MedicalEncounter | null)[] | null;
  readonly Appointments?: (Appointment | null)[] | null;
  readonly Physician?: Physician | null;
  readonly cell?: string | null;
  readonly Payments?: (PatientPayments | null)[] | null;
  readonly paymentStatus?: InsuranceCarrierStatus | keyof typeof InsuranceCarrierStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patientInsuranceCarrierId?: string | null;
  readonly patientPhysicianId?: string | null;
}

type LazyPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly InsuranceCarrier: AsyncItem<InsuranceCarrier | undefined>;
  readonly Medications: AsyncCollection<Medication>;
  readonly MedicalEncounters: AsyncCollection<MedicalEncounter>;
  readonly Appointments: AsyncCollection<Appointment>;
  readonly Physician: AsyncItem<Physician | undefined>;
  readonly cell?: string | null;
  readonly Payments: AsyncCollection<PatientPayments>;
  readonly paymentStatus?: InsuranceCarrierStatus | keyof typeof InsuranceCarrierStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patientInsuranceCarrierId?: string | null;
  readonly patientPhysicianId?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

type EagerPatientPayments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientPayments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly paymentsId?: string | null;
  readonly patientId?: string | null;
  readonly payments: Payments;
  readonly patient: Patient;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPatientPayments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientPayments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly paymentsId?: string | null;
  readonly patientId?: string | null;
  readonly payments: AsyncItem<Payments>;
  readonly patient: AsyncItem<Patient>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PatientPayments = LazyLoading extends LazyLoadingDisabled ? EagerPatientPayments : LazyPatientPayments

export declare const PatientPayments: (new (init: ModelInit<PatientPayments>) => PatientPayments) & {
  copyOf(source: PatientPayments, mutator: (draft: MutableModel<PatientPayments>) => MutableModel<PatientPayments> | void): PatientPayments;
}