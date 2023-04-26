/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePaymentsInput = {
  id?: string | null,
  amount: number,
  dayIssued: string,
  dayFulfilled?: string | null,
  isPaid: boolean,
  _version?: number | null,
};

export type ModelPaymentsConditionInput = {
  amount?: ModelFloatInput | null,
  dayIssued?: ModelStringInput | null,
  dayFulfilled?: ModelStringInput | null,
  isPaid?: ModelBooleanInput | null,
  and?: Array< ModelPaymentsConditionInput | null > | null,
  or?: Array< ModelPaymentsConditionInput | null > | null,
  not?: ModelPaymentsConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Payments = {
  __typename: "Payments",
  id: string,
  amount: number,
  dayIssued: string,
  dayFulfilled?: string | null,
  isPaid: boolean,
  patients?: ModelPatientPaymentsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelPatientPaymentsConnection = {
  __typename: "ModelPatientPaymentsConnection",
  items:  Array<PatientPayments | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PatientPayments = {
  __typename: "PatientPayments",
  id: string,
  paymentsId: string,
  patientId: string,
  payments: Payments,
  patient: Patient,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  name?: string | null,
  address?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  InsuranceCarrier?: InsuranceCarrier | null,
  Medications?: ModelMedicationConnection | null,
  MedicalEncounters?: ModelMedicalEncounterConnection | null,
  Appointments?: ModelAppointmentConnection | null,
  Physician?: Physician | null,
  cell?: string | null,
  Payments?: ModelPatientPaymentsConnection | null,
  paymentStatus?: InsuranceCarrierStatus | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  patientInsuranceCarrierId?: string | null,
  patientPhysicianId?: string | null,
  owner?: string | null,
};

export type InsuranceCarrier = {
  __typename: "InsuranceCarrier",
  id: string,
  name: string,
  address?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelMedicationConnection = {
  __typename: "ModelMedicationConnection",
  items:  Array<Medication | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Medication = {
  __typename: "Medication",
  id: string,
  name?: string | null,
  usage?: string | null,
  dosage?: string | null,
  frequency?: string | null,
  sideEffects?: string | null,
  interactions?: string | null,
  patientID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMedicalEncounterConnection = {
  __typename: "ModelMedicalEncounterConnection",
  items:  Array<MedicalEncounter | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type MedicalEncounter = {
  __typename: "MedicalEncounter",
  id: string,
  date: string,
  practitionerSeen: Array< Practitioner | null >,
  complaints?: string | null,
  diagnosis: string,
  treatmentPlan?: string | null,
  referralToSpecialists?: string | null,
  patientID: string,
  VitalSign?: VitalSign | null,
  Prescriptions?: ModelPrescriptionConnection | null,
  LabOrders?: ModelLabOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  medicalEncounterVitalSignId?: string | null,
  owner?: string | null,
};

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
  PSYCHIATRIST = "PSYCHIATRIST",
}


export type VitalSign = {
  __typename: "VitalSign",
  id: string,
  pulse: number,
  respirationRate: number,
  bloodPressure: string,
  temperature?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelPrescriptionConnection = {
  __typename: "ModelPrescriptionConnection",
  items:  Array<Prescription | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Prescription = {
  __typename: "Prescription",
  id: string,
  physicianName: string,
  medication: string,
  dosag: string,
  frequency: string,
  filledBy?: string | null,
  dateFilled: string,
  medicalencounterID: string,
  ServiceProvidedByClinic?: ServiceProvidedByClinic | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  prescriptionServiceProvidedByClinicId?: string | null,
  owner?: string | null,
};

export type ServiceProvidedByClinic = {
  __typename: "ServiceProvidedByClinic",
  id: string,
  type?: string | null,
  description?: string | null,
  cost?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelLabOrderConnection = {
  __typename: "ModelLabOrderConnection",
  items:  Array<LabOrder | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LabOrder = {
  __typename: "LabOrder",
  id: string,
  physicianName?: string | null,
  testType?: string | null,
  testDate?: string | null,
  technician?: string | null,
  testResult?: string | null,
  medicalencounterID: string,
  ServiceProvidedByClinic?: ServiceProvidedByClinic | null,
  LabTests?: ModelLabTestConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  labOrderServiceProvidedByClinicId?: string | null,
  owner?: string | null,
};

export type ModelLabTestConnection = {
  __typename: "ModelLabTestConnection",
  items:  Array<LabTest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LabTest = {
  __typename: "LabTest",
  id: string,
  testTypeName?: string | null,
  normalRange?: string | null,
  abnormalRange?: string | null,
  description?: string | null,
  laborderID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items:  Array<Appointment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  time?: string | null,
  type?: string | null,
  patientID: string,
  physicianID: string,
  ServiceProvidedByClinic?: ServiceProvidedByClinic | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  appointmentServiceProvidedByClinicId?: string | null,
  owner?: string | null,
};

export type Physician = {
  __typename: "Physician",
  id: string,
  name?: string | null,
  cellPhoneNumber?: string | null,
  WorkSchedules?: ModelWorkScheduleConnection | null,
  Appointments?: ModelAppointmentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelWorkScheduleConnection = {
  __typename: "ModelWorkScheduleConnection",
  items:  Array<WorkSchedule | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type WorkSchedule = {
  __typename: "WorkSchedule",
  id: string,
  twoMonthCalendar?:  Array<Week | null > | null,
  physicianID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type Week = {
  __typename: "Week",
  weekDays?:  Array<Day | null > | null,
};

export type Day = {
  __typename: "Day",
  id: string,
  isReserved: boolean,
  periods: number,
  number: number,
};

export enum InsuranceCarrierStatus {
  PAYS_ON_TIME = "PAYS_ON_TIME",
  LATE_WITH_PAYMENTS = "LATE_WITH_PAYMENTS",
  DIFFICULT_TO_GET_PAYMENTS = "DIFFICULT_TO_GET_PAYMENTS",
}


export type UpdatePaymentsInput = {
  id: string,
  amount?: number | null,
  dayIssued?: string | null,
  dayFulfilled?: string | null,
  isPaid?: boolean | null,
  _version?: number | null,
};

export type DeletePaymentsInput = {
  id: string,
  _version?: number | null,
};

export type CreateVendorInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  preferred?: boolean | null,
  equipmentID: string,
  _version?: number | null,
};

export type ModelVendorConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  preferred?: ModelBooleanInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Vendor = {
  __typename: "Vendor",
  id: string,
  name?: string | null,
  address?: string | null,
  preferred?: boolean | null,
  equipmentID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateVendorInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  preferred?: boolean | null,
  equipmentID?: string | null,
  _version?: number | null,
};

export type DeleteVendorInput = {
  id: string,
  _version?: number | null,
};

export type CreateEquipmentMaintenanceInput = {
  id?: string | null,
  type?: string | null,
  description?: string | null,
  status?: boolean | null,
  resolution?: string | null,
  equipmentID: string,
  _version?: number | null,
};

export type ModelEquipmentMaintenanceConditionInput = {
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  resolution?: ModelStringInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelEquipmentMaintenanceConditionInput | null > | null,
  or?: Array< ModelEquipmentMaintenanceConditionInput | null > | null,
  not?: ModelEquipmentMaintenanceConditionInput | null,
};

export type EquipmentMaintenance = {
  __typename: "EquipmentMaintenance",
  id: string,
  type?: string | null,
  description?: string | null,
  status?: boolean | null,
  resolution?: string | null,
  equipmentID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateEquipmentMaintenanceInput = {
  id: string,
  type?: string | null,
  description?: string | null,
  status?: boolean | null,
  resolution?: string | null,
  equipmentID?: string | null,
  _version?: number | null,
};

export type DeleteEquipmentMaintenanceInput = {
  id: string,
  _version?: number | null,
};

export type CreateEquipmentOwnedInput = {
  id?: string | null,
  datePurchased?: string | null,
  warranty?: string | null,
  _version?: number | null,
};

export type ModelEquipmentOwnedConditionInput = {
  datePurchased?: ModelStringInput | null,
  warranty?: ModelStringInput | null,
  and?: Array< ModelEquipmentOwnedConditionInput | null > | null,
  or?: Array< ModelEquipmentOwnedConditionInput | null > | null,
  not?: ModelEquipmentOwnedConditionInput | null,
};

export type EquipmentOwned = {
  __typename: "EquipmentOwned",
  id: string,
  datePurchased?: string | null,
  warranty?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateEquipmentOwnedInput = {
  id: string,
  datePurchased?: string | null,
  warranty?: string | null,
  _version?: number | null,
};

export type DeleteEquipmentOwnedInput = {
  id: string,
  _version?: number | null,
};

export type CreateEquipmentLeasedInput = {
  id?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  _version?: number | null,
};

export type ModelEquipmentLeasedConditionInput = {
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelEquipmentLeasedConditionInput | null > | null,
  or?: Array< ModelEquipmentLeasedConditionInput | null > | null,
  not?: ModelEquipmentLeasedConditionInput | null,
};

export type EquipmentLeased = {
  __typename: "EquipmentLeased",
  id: string,
  startDate?: string | null,
  endDate?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateEquipmentLeasedInput = {
  id: string,
  startDate?: string | null,
  endDate?: string | null,
  _version?: number | null,
};

export type DeleteEquipmentLeasedInput = {
  id: string,
  _version?: number | null,
};

export type CreateEquipmentInput = {
  id?: string | null,
  type?: string | null,
  description?: string | null,
  department?: string | null,
  owned?: boolean | null,
  leased?: boolean | null,
  _version?: number | null,
  equipmentEquipmentOwnedId?: string | null,
  equipmentEquipmentLeasedId?: string | null,
};

export type ModelEquipmentConditionInput = {
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  department?: ModelStringInput | null,
  owned?: ModelBooleanInput | null,
  leased?: ModelBooleanInput | null,
  and?: Array< ModelEquipmentConditionInput | null > | null,
  or?: Array< ModelEquipmentConditionInput | null > | null,
  not?: ModelEquipmentConditionInput | null,
  equipmentEquipmentOwnedId?: ModelIDInput | null,
  equipmentEquipmentLeasedId?: ModelIDInput | null,
};

export type Equipment = {
  __typename: "Equipment",
  id: string,
  type?: string | null,
  description?: string | null,
  department?: string | null,
  owned?: boolean | null,
  leased?: boolean | null,
  Vendors?: ModelVendorConnection | null,
  EquipmentMaintenances?: ModelEquipmentMaintenanceConnection | null,
  EquipmentOwned?: EquipmentOwned | null,
  EquipmentLeased?: EquipmentLeased | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  equipmentEquipmentOwnedId?: string | null,
  equipmentEquipmentLeasedId?: string | null,
  owner?: string | null,
};

export type ModelVendorConnection = {
  __typename: "ModelVendorConnection",
  items:  Array<Vendor | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEquipmentMaintenanceConnection = {
  __typename: "ModelEquipmentMaintenanceConnection",
  items:  Array<EquipmentMaintenance | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateEquipmentInput = {
  id: string,
  type?: string | null,
  description?: string | null,
  department?: string | null,
  owned?: boolean | null,
  leased?: boolean | null,
  _version?: number | null,
  equipmentEquipmentOwnedId?: string | null,
  equipmentEquipmentLeasedId?: string | null,
};

export type DeleteEquipmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateLabTestInput = {
  id?: string | null,
  testTypeName?: string | null,
  normalRange?: string | null,
  abnormalRange?: string | null,
  description?: string | null,
  laborderID: string,
  _version?: number | null,
};

export type ModelLabTestConditionInput = {
  testTypeName?: ModelStringInput | null,
  normalRange?: ModelStringInput | null,
  abnormalRange?: ModelStringInput | null,
  description?: ModelStringInput | null,
  laborderID?: ModelIDInput | null,
  and?: Array< ModelLabTestConditionInput | null > | null,
  or?: Array< ModelLabTestConditionInput | null > | null,
  not?: ModelLabTestConditionInput | null,
};

export type UpdateLabTestInput = {
  id: string,
  testTypeName?: string | null,
  normalRange?: string | null,
  abnormalRange?: string | null,
  description?: string | null,
  laborderID?: string | null,
  _version?: number | null,
};

export type DeleteLabTestInput = {
  id: string,
  _version?: number | null,
};

export type CreateServiceProvidedByClinicInput = {
  id?: string | null,
  type?: string | null,
  description?: string | null,
  cost?: number | null,
  _version?: number | null,
};

export type ModelServiceProvidedByClinicConditionInput = {
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cost?: ModelFloatInput | null,
  and?: Array< ModelServiceProvidedByClinicConditionInput | null > | null,
  or?: Array< ModelServiceProvidedByClinicConditionInput | null > | null,
  not?: ModelServiceProvidedByClinicConditionInput | null,
};

export type UpdateServiceProvidedByClinicInput = {
  id: string,
  type?: string | null,
  description?: string | null,
  cost?: number | null,
  _version?: number | null,
};

export type DeleteServiceProvidedByClinicInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkScheduleInput = {
  id?: string | null,
  twoMonthCalendar?: Array< WeekInput | null > | null,
  physicianID: string,
  _version?: number | null,
};

export type WeekInput = {
  weekDays?: Array< DayInput | null > | null,
};

export type DayInput = {
  id?: string | null,
  isReserved: boolean,
  periods: number,
  number: number,
};

export type ModelWorkScheduleConditionInput = {
  physicianID?: ModelIDInput | null,
  and?: Array< ModelWorkScheduleConditionInput | null > | null,
  or?: Array< ModelWorkScheduleConditionInput | null > | null,
  not?: ModelWorkScheduleConditionInput | null,
};

export type UpdateWorkScheduleInput = {
  id: string,
  twoMonthCalendar?: Array< WeekInput | null > | null,
  physicianID?: string | null,
  _version?: number | null,
};

export type DeleteWorkScheduleInput = {
  id: string,
  _version?: number | null,
};

export type CreatePhysicianInput = {
  id?: string | null,
  name?: string | null,
  cellPhoneNumber?: string | null,
  _version?: number | null,
};

export type ModelPhysicianConditionInput = {
  name?: ModelStringInput | null,
  cellPhoneNumber?: ModelStringInput | null,
  and?: Array< ModelPhysicianConditionInput | null > | null,
  or?: Array< ModelPhysicianConditionInput | null > | null,
  not?: ModelPhysicianConditionInput | null,
};

export type UpdatePhysicianInput = {
  id: string,
  name?: string | null,
  cellPhoneNumber?: string | null,
  _version?: number | null,
};

export type DeletePhysicianInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppointmentInput = {
  id?: string | null,
  time?: string | null,
  type?: string | null,
  patientID: string,
  physicianID: string,
  _version?: number | null,
  appointmentServiceProvidedByClinicId?: string | null,
};

export type ModelAppointmentConditionInput = {
  time?: ModelStringInput | null,
  type?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  physicianID?: ModelIDInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
  appointmentServiceProvidedByClinicId?: ModelIDInput | null,
};

export type UpdateAppointmentInput = {
  id: string,
  time?: string | null,
  type?: string | null,
  patientID?: string | null,
  physicianID?: string | null,
  _version?: number | null,
  appointmentServiceProvidedByClinicId?: string | null,
};

export type DeleteAppointmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateLabOrderInput = {
  id?: string | null,
  physicianName?: string | null,
  testType?: string | null,
  testDate?: string | null,
  technician?: string | null,
  testResult?: string | null,
  medicalencounterID: string,
  _version?: number | null,
  labOrderServiceProvidedByClinicId?: string | null,
};

export type ModelLabOrderConditionInput = {
  physicianName?: ModelStringInput | null,
  testType?: ModelStringInput | null,
  testDate?: ModelStringInput | null,
  technician?: ModelStringInput | null,
  testResult?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelLabOrderConditionInput | null > | null,
  or?: Array< ModelLabOrderConditionInput | null > | null,
  not?: ModelLabOrderConditionInput | null,
  labOrderServiceProvidedByClinicId?: ModelIDInput | null,
};

export type UpdateLabOrderInput = {
  id: string,
  physicianName?: string | null,
  testType?: string | null,
  testDate?: string | null,
  technician?: string | null,
  testResult?: string | null,
  medicalencounterID?: string | null,
  _version?: number | null,
  labOrderServiceProvidedByClinicId?: string | null,
};

export type DeleteLabOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreatePrescriptionInput = {
  id?: string | null,
  physicianName: string,
  medication: string,
  dosag: string,
  frequency: string,
  filledBy?: string | null,
  dateFilled: string,
  medicalencounterID: string,
  _version?: number | null,
  prescriptionServiceProvidedByClinicId?: string | null,
};

export type ModelPrescriptionConditionInput = {
  physicianName?: ModelStringInput | null,
  medication?: ModelStringInput | null,
  dosag?: ModelStringInput | null,
  frequency?: ModelStringInput | null,
  filledBy?: ModelStringInput | null,
  dateFilled?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelPrescriptionConditionInput | null > | null,
  or?: Array< ModelPrescriptionConditionInput | null > | null,
  not?: ModelPrescriptionConditionInput | null,
  prescriptionServiceProvidedByClinicId?: ModelIDInput | null,
};

export type UpdatePrescriptionInput = {
  id: string,
  physicianName?: string | null,
  medication?: string | null,
  dosag?: string | null,
  frequency?: string | null,
  filledBy?: string | null,
  dateFilled?: string | null,
  medicalencounterID?: string | null,
  _version?: number | null,
  prescriptionServiceProvidedByClinicId?: string | null,
};

export type DeletePrescriptionInput = {
  id: string,
  _version?: number | null,
};

export type CreateVitalSignInput = {
  id?: string | null,
  pulse: number,
  respirationRate: number,
  bloodPressure: string,
  temperature?: string | null,
  _version?: number | null,
};

export type ModelVitalSignConditionInput = {
  pulse?: ModelIntInput | null,
  respirationRate?: ModelIntInput | null,
  bloodPressure?: ModelStringInput | null,
  temperature?: ModelStringInput | null,
  and?: Array< ModelVitalSignConditionInput | null > | null,
  or?: Array< ModelVitalSignConditionInput | null > | null,
  not?: ModelVitalSignConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVitalSignInput = {
  id: string,
  pulse?: number | null,
  respirationRate?: number | null,
  bloodPressure?: string | null,
  temperature?: string | null,
  _version?: number | null,
};

export type DeleteVitalSignInput = {
  id: string,
  _version?: number | null,
};

export type CreateMedicalEncounterInput = {
  id?: string | null,
  date: string,
  practitionerSeen: Array< Practitioner | null >,
  complaints?: string | null,
  diagnosis: string,
  treatmentPlan?: string | null,
  referralToSpecialists?: string | null,
  patientID: string,
  _version?: number | null,
  medicalEncounterVitalSignId?: string | null,
};

export type ModelMedicalEncounterConditionInput = {
  date?: ModelStringInput | null,
  practitionerSeen?: ModelPractitionerInput | null,
  complaints?: ModelStringInput | null,
  diagnosis?: ModelStringInput | null,
  treatmentPlan?: ModelStringInput | null,
  referralToSpecialists?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicalEncounterConditionInput | null > | null,
  or?: Array< ModelMedicalEncounterConditionInput | null > | null,
  not?: ModelMedicalEncounterConditionInput | null,
  medicalEncounterVitalSignId?: ModelIDInput | null,
};

export type ModelPractitionerInput = {
  eq?: Practitioner | null,
  ne?: Practitioner | null,
};

export type UpdateMedicalEncounterInput = {
  id: string,
  date?: string | null,
  practitionerSeen?: Array< Practitioner | null > | null,
  complaints?: string | null,
  diagnosis?: string | null,
  treatmentPlan?: string | null,
  referralToSpecialists?: string | null,
  patientID?: string | null,
  _version?: number | null,
  medicalEncounterVitalSignId?: string | null,
};

export type DeleteMedicalEncounterInput = {
  id: string,
  _version?: number | null,
};

export type CreateMedicationInput = {
  id?: string | null,
  name?: string | null,
  usage?: string | null,
  dosage?: string | null,
  frequency?: string | null,
  sideEffects?: string | null,
  interactions?: string | null,
  patientID: string,
  _version?: number | null,
};

export type ModelMedicationConditionInput = {
  name?: ModelStringInput | null,
  usage?: ModelStringInput | null,
  dosage?: ModelStringInput | null,
  frequency?: ModelStringInput | null,
  sideEffects?: ModelStringInput | null,
  interactions?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicationConditionInput | null > | null,
  or?: Array< ModelMedicationConditionInput | null > | null,
  not?: ModelMedicationConditionInput | null,
};

export type UpdateMedicationInput = {
  id: string,
  name?: string | null,
  usage?: string | null,
  dosage?: string | null,
  frequency?: string | null,
  sideEffects?: string | null,
  interactions?: string | null,
  patientID?: string | null,
  _version?: number | null,
};

export type DeleteMedicationInput = {
  id: string,
  _version?: number | null,
};

export type CreateInsuranceCarrierInput = {
  id?: string | null,
  name: string,
  address?: string | null,
  _version?: number | null,
};

export type ModelInsuranceCarrierConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelInsuranceCarrierConditionInput | null > | null,
  or?: Array< ModelInsuranceCarrierConditionInput | null > | null,
  not?: ModelInsuranceCarrierConditionInput | null,
};

export type UpdateInsuranceCarrierInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  _version?: number | null,
};

export type DeleteInsuranceCarrierInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  cell?: string | null,
  paymentStatus?: InsuranceCarrierStatus | null,
  _version?: number | null,
  patientInsuranceCarrierId?: string | null,
  patientPhysicianId?: string | null,
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  cell?: ModelStringInput | null,
  paymentStatus?: ModelInsuranceCarrierStatusInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
  patientInsuranceCarrierId?: ModelIDInput | null,
  patientPhysicianId?: ModelIDInput | null,
};

export type ModelInsuranceCarrierStatusInput = {
  eq?: InsuranceCarrierStatus | null,
  ne?: InsuranceCarrierStatus | null,
};

export type UpdatePatientInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  cell?: string | null,
  paymentStatus?: InsuranceCarrierStatus | null,
  _version?: number | null,
  patientInsuranceCarrierId?: string | null,
  patientPhysicianId?: string | null,
};

export type DeletePatientInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientPaymentsInput = {
  id?: string | null,
  paymentsId: string,
  patientId: string,
  _version?: number | null,
};

export type ModelPatientPaymentsConditionInput = {
  paymentsId?: ModelIDInput | null,
  patientId?: ModelIDInput | null,
  and?: Array< ModelPatientPaymentsConditionInput | null > | null,
  or?: Array< ModelPatientPaymentsConditionInput | null > | null,
  not?: ModelPatientPaymentsConditionInput | null,
};

export type UpdatePatientPaymentsInput = {
  id: string,
  paymentsId?: string | null,
  patientId?: string | null,
  _version?: number | null,
};

export type DeletePatientPaymentsInput = {
  id: string,
  _version?: number | null,
};

export type ModelPaymentsFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  dayIssued?: ModelStringInput | null,
  dayFulfilled?: ModelStringInput | null,
  isPaid?: ModelBooleanInput | null,
  and?: Array< ModelPaymentsFilterInput | null > | null,
  or?: Array< ModelPaymentsFilterInput | null > | null,
  not?: ModelPaymentsFilterInput | null,
};

export type ModelPaymentsConnection = {
  __typename: "ModelPaymentsConnection",
  items:  Array<Payments | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  preferred?: ModelBooleanInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEquipmentMaintenanceFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  resolution?: ModelStringInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelEquipmentMaintenanceFilterInput | null > | null,
  or?: Array< ModelEquipmentMaintenanceFilterInput | null > | null,
  not?: ModelEquipmentMaintenanceFilterInput | null,
};

export type ModelEquipmentOwnedFilterInput = {
  id?: ModelIDInput | null,
  datePurchased?: ModelStringInput | null,
  warranty?: ModelStringInput | null,
  and?: Array< ModelEquipmentOwnedFilterInput | null > | null,
  or?: Array< ModelEquipmentOwnedFilterInput | null > | null,
  not?: ModelEquipmentOwnedFilterInput | null,
};

export type ModelEquipmentOwnedConnection = {
  __typename: "ModelEquipmentOwnedConnection",
  items:  Array<EquipmentOwned | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEquipmentLeasedFilterInput = {
  id?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelEquipmentLeasedFilterInput | null > | null,
  or?: Array< ModelEquipmentLeasedFilterInput | null > | null,
  not?: ModelEquipmentLeasedFilterInput | null,
};

export type ModelEquipmentLeasedConnection = {
  __typename: "ModelEquipmentLeasedConnection",
  items:  Array<EquipmentLeased | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEquipmentFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  department?: ModelStringInput | null,
  owned?: ModelBooleanInput | null,
  leased?: ModelBooleanInput | null,
  and?: Array< ModelEquipmentFilterInput | null > | null,
  or?: Array< ModelEquipmentFilterInput | null > | null,
  not?: ModelEquipmentFilterInput | null,
  equipmentEquipmentOwnedId?: ModelIDInput | null,
  equipmentEquipmentLeasedId?: ModelIDInput | null,
};

export type ModelEquipmentConnection = {
  __typename: "ModelEquipmentConnection",
  items:  Array<Equipment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLabTestFilterInput = {
  id?: ModelIDInput | null,
  testTypeName?: ModelStringInput | null,
  normalRange?: ModelStringInput | null,
  abnormalRange?: ModelStringInput | null,
  description?: ModelStringInput | null,
  laborderID?: ModelIDInput | null,
  and?: Array< ModelLabTestFilterInput | null > | null,
  or?: Array< ModelLabTestFilterInput | null > | null,
  not?: ModelLabTestFilterInput | null,
};

export type ModelServiceProvidedByClinicFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cost?: ModelFloatInput | null,
  and?: Array< ModelServiceProvidedByClinicFilterInput | null > | null,
  or?: Array< ModelServiceProvidedByClinicFilterInput | null > | null,
  not?: ModelServiceProvidedByClinicFilterInput | null,
};

export type ModelServiceProvidedByClinicConnection = {
  __typename: "ModelServiceProvidedByClinicConnection",
  items:  Array<ServiceProvidedByClinic | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkScheduleFilterInput = {
  id?: ModelIDInput | null,
  physicianID?: ModelIDInput | null,
  and?: Array< ModelWorkScheduleFilterInput | null > | null,
  or?: Array< ModelWorkScheduleFilterInput | null > | null,
  not?: ModelWorkScheduleFilterInput | null,
};

export type ModelPhysicianFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  cellPhoneNumber?: ModelStringInput | null,
  and?: Array< ModelPhysicianFilterInput | null > | null,
  or?: Array< ModelPhysicianFilterInput | null > | null,
  not?: ModelPhysicianFilterInput | null,
};

export type ModelPhysicianConnection = {
  __typename: "ModelPhysicianConnection",
  items:  Array<Physician | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  time?: ModelStringInput | null,
  type?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  physicianID?: ModelIDInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
  appointmentServiceProvidedByClinicId?: ModelIDInput | null,
};

export type ModelLabOrderFilterInput = {
  id?: ModelIDInput | null,
  physicianName?: ModelStringInput | null,
  testType?: ModelStringInput | null,
  testDate?: ModelStringInput | null,
  technician?: ModelStringInput | null,
  testResult?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelLabOrderFilterInput | null > | null,
  or?: Array< ModelLabOrderFilterInput | null > | null,
  not?: ModelLabOrderFilterInput | null,
  labOrderServiceProvidedByClinicId?: ModelIDInput | null,
};

export type ModelPrescriptionFilterInput = {
  id?: ModelIDInput | null,
  physicianName?: ModelStringInput | null,
  medication?: ModelStringInput | null,
  dosag?: ModelStringInput | null,
  frequency?: ModelStringInput | null,
  filledBy?: ModelStringInput | null,
  dateFilled?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelPrescriptionFilterInput | null > | null,
  or?: Array< ModelPrescriptionFilterInput | null > | null,
  not?: ModelPrescriptionFilterInput | null,
  prescriptionServiceProvidedByClinicId?: ModelIDInput | null,
};

export type ModelVitalSignFilterInput = {
  id?: ModelIDInput | null,
  pulse?: ModelIntInput | null,
  respirationRate?: ModelIntInput | null,
  bloodPressure?: ModelStringInput | null,
  temperature?: ModelStringInput | null,
  and?: Array< ModelVitalSignFilterInput | null > | null,
  or?: Array< ModelVitalSignFilterInput | null > | null,
  not?: ModelVitalSignFilterInput | null,
};

export type ModelVitalSignConnection = {
  __typename: "ModelVitalSignConnection",
  items:  Array<VitalSign | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMedicalEncounterFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  practitionerSeen?: ModelPractitionerInput | null,
  complaints?: ModelStringInput | null,
  diagnosis?: ModelStringInput | null,
  treatmentPlan?: ModelStringInput | null,
  referralToSpecialists?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicalEncounterFilterInput | null > | null,
  or?: Array< ModelMedicalEncounterFilterInput | null > | null,
  not?: ModelMedicalEncounterFilterInput | null,
  medicalEncounterVitalSignId?: ModelIDInput | null,
};

export type ModelMedicationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  usage?: ModelStringInput | null,
  dosage?: ModelStringInput | null,
  frequency?: ModelStringInput | null,
  sideEffects?: ModelStringInput | null,
  interactions?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicationFilterInput | null > | null,
  or?: Array< ModelMedicationFilterInput | null > | null,
  not?: ModelMedicationFilterInput | null,
};

export type ModelInsuranceCarrierFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelInsuranceCarrierFilterInput | null > | null,
  or?: Array< ModelInsuranceCarrierFilterInput | null > | null,
  not?: ModelInsuranceCarrierFilterInput | null,
};

export type ModelInsuranceCarrierConnection = {
  __typename: "ModelInsuranceCarrierConnection",
  items:  Array<InsuranceCarrier | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  cell?: ModelStringInput | null,
  paymentStatus?: ModelInsuranceCarrierStatusInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
  patientInsuranceCarrierId?: ModelIDInput | null,
  patientPhysicianId?: ModelIDInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPatientPaymentsFilterInput = {
  id?: ModelIDInput | null,
  paymentsId?: ModelIDInput | null,
  patientId?: ModelIDInput | null,
  and?: Array< ModelPatientPaymentsFilterInput | null > | null,
  or?: Array< ModelPatientPaymentsFilterInput | null > | null,
  not?: ModelPatientPaymentsFilterInput | null,
};

export type ModelSubscriptionPaymentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  dayIssued?: ModelSubscriptionStringInput | null,
  dayFulfilled?: ModelSubscriptionStringInput | null,
  isPaid?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionPaymentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionVendorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  preferred?: ModelSubscriptionBooleanInput | null,
  equipmentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionVendorFilterInput | null > | null,
  or?: Array< ModelSubscriptionVendorFilterInput | null > | null,
};

export type ModelSubscriptionEquipmentMaintenanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  resolution?: ModelSubscriptionStringInput | null,
  equipmentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEquipmentMaintenanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentMaintenanceFilterInput | null > | null,
};

export type ModelSubscriptionEquipmentOwnedFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  datePurchased?: ModelSubscriptionStringInput | null,
  warranty?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEquipmentOwnedFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentOwnedFilterInput | null > | null,
};

export type ModelSubscriptionEquipmentLeasedFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEquipmentLeasedFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentLeasedFilterInput | null > | null,
};

export type ModelSubscriptionEquipmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  owned?: ModelSubscriptionBooleanInput | null,
  leased?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionEquipmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentFilterInput | null > | null,
};

export type ModelSubscriptionLabTestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  testTypeName?: ModelSubscriptionStringInput | null,
  normalRange?: ModelSubscriptionStringInput | null,
  abnormalRange?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  laborderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLabTestFilterInput | null > | null,
  or?: Array< ModelSubscriptionLabTestFilterInput | null > | null,
};

export type ModelSubscriptionServiceProvidedByClinicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionServiceProvidedByClinicFilterInput | null > | null,
  or?: Array< ModelSubscriptionServiceProvidedByClinicFilterInput | null > | null,
};

export type ModelSubscriptionWorkScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  physicianID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionWorkScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkScheduleFilterInput | null > | null,
};

export type ModelSubscriptionPhysicianFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  cellPhoneNumber?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPhysicianFilterInput | null > | null,
  or?: Array< ModelSubscriptionPhysicianFilterInput | null > | null,
};

export type ModelSubscriptionAppointmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  time?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  physicianID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
};

export type ModelSubscriptionLabOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  physicianName?: ModelSubscriptionStringInput | null,
  testType?: ModelSubscriptionStringInput | null,
  testDate?: ModelSubscriptionStringInput | null,
  technician?: ModelSubscriptionStringInput | null,
  testResult?: ModelSubscriptionStringInput | null,
  medicalencounterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLabOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionLabOrderFilterInput | null > | null,
};

export type ModelSubscriptionPrescriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  physicianName?: ModelSubscriptionStringInput | null,
  medication?: ModelSubscriptionStringInput | null,
  dosag?: ModelSubscriptionStringInput | null,
  frequency?: ModelSubscriptionStringInput | null,
  filledBy?: ModelSubscriptionStringInput | null,
  dateFilled?: ModelSubscriptionStringInput | null,
  medicalencounterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPrescriptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionPrescriptionFilterInput | null > | null,
};

export type ModelSubscriptionVitalSignFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pulse?: ModelSubscriptionIntInput | null,
  respirationRate?: ModelSubscriptionIntInput | null,
  bloodPressure?: ModelSubscriptionStringInput | null,
  temperature?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVitalSignFilterInput | null > | null,
  or?: Array< ModelSubscriptionVitalSignFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMedicalEncounterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  practitionerSeen?: ModelSubscriptionStringInput | null,
  complaints?: ModelSubscriptionStringInput | null,
  diagnosis?: ModelSubscriptionStringInput | null,
  treatmentPlan?: ModelSubscriptionStringInput | null,
  referralToSpecialists?: ModelSubscriptionStringInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicalEncounterFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalEncounterFilterInput | null > | null,
};

export type ModelSubscriptionMedicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  usage?: ModelSubscriptionStringInput | null,
  dosage?: ModelSubscriptionStringInput | null,
  frequency?: ModelSubscriptionStringInput | null,
  sideEffects?: ModelSubscriptionStringInput | null,
  interactions?: ModelSubscriptionStringInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicationFilterInput | null > | null,
};

export type ModelSubscriptionInsuranceCarrierFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInsuranceCarrierFilterInput | null > | null,
  or?: Array< ModelSubscriptionInsuranceCarrierFilterInput | null > | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  cell?: ModelSubscriptionStringInput | null,
  paymentStatus?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
};

export type ModelSubscriptionPatientPaymentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  paymentsId?: ModelSubscriptionIDInput | null,
  patientId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPatientPaymentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientPaymentsFilterInput | null > | null,
};

export type CreatePaymentsMutationVariables = {
  input: CreatePaymentsInput,
  condition?: ModelPaymentsConditionInput | null,
};

export type CreatePaymentsMutation = {
  createPayments?:  {
    __typename: "Payments",
    id: string,
    amount: number,
    dayIssued: string,
    dayFulfilled?: string | null,
    isPaid: boolean,
    patients?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdatePaymentsMutationVariables = {
  input: UpdatePaymentsInput,
  condition?: ModelPaymentsConditionInput | null,
};

export type UpdatePaymentsMutation = {
  updatePayments?:  {
    __typename: "Payments",
    id: string,
    amount: number,
    dayIssued: string,
    dayFulfilled?: string | null,
    isPaid: boolean,
    patients?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeletePaymentsMutationVariables = {
  input: DeletePaymentsInput,
  condition?: ModelPaymentsConditionInput | null,
};

export type DeletePaymentsMutation = {
  deletePayments?:  {
    __typename: "Payments",
    id: string,
    amount: number,
    dayIssued: string,
    dayFulfilled?: string | null,
    isPaid: boolean,
    patients?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateVendorMutationVariables = {
  input: CreateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type CreateVendorMutation = {
  createVendor?:  {
    __typename: "Vendor",
    id: string,
    name?: string | null,
    address?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateVendorMutationVariables = {
  input: UpdateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type UpdateVendorMutation = {
  updateVendor?:  {
    __typename: "Vendor",
    id: string,
    name?: string | null,
    address?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteVendorMutationVariables = {
  input: DeleteVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type DeleteVendorMutation = {
  deleteVendor?:  {
    __typename: "Vendor",
    id: string,
    name?: string | null,
    address?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateEquipmentMaintenanceMutationVariables = {
  input: CreateEquipmentMaintenanceInput,
  condition?: ModelEquipmentMaintenanceConditionInput | null,
};

export type CreateEquipmentMaintenanceMutation = {
  createEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    description?: string | null,
    status?: boolean | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateEquipmentMaintenanceMutationVariables = {
  input: UpdateEquipmentMaintenanceInput,
  condition?: ModelEquipmentMaintenanceConditionInput | null,
};

export type UpdateEquipmentMaintenanceMutation = {
  updateEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    description?: string | null,
    status?: boolean | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteEquipmentMaintenanceMutationVariables = {
  input: DeleteEquipmentMaintenanceInput,
  condition?: ModelEquipmentMaintenanceConditionInput | null,
};

export type DeleteEquipmentMaintenanceMutation = {
  deleteEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    description?: string | null,
    status?: boolean | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateEquipmentOwnedMutationVariables = {
  input: CreateEquipmentOwnedInput,
  condition?: ModelEquipmentOwnedConditionInput | null,
};

export type CreateEquipmentOwnedMutation = {
  createEquipmentOwned?:  {
    __typename: "EquipmentOwned",
    id: string,
    datePurchased?: string | null,
    warranty?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateEquipmentOwnedMutationVariables = {
  input: UpdateEquipmentOwnedInput,
  condition?: ModelEquipmentOwnedConditionInput | null,
};

export type UpdateEquipmentOwnedMutation = {
  updateEquipmentOwned?:  {
    __typename: "EquipmentOwned",
    id: string,
    datePurchased?: string | null,
    warranty?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteEquipmentOwnedMutationVariables = {
  input: DeleteEquipmentOwnedInput,
  condition?: ModelEquipmentOwnedConditionInput | null,
};

export type DeleteEquipmentOwnedMutation = {
  deleteEquipmentOwned?:  {
    __typename: "EquipmentOwned",
    id: string,
    datePurchased?: string | null,
    warranty?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateEquipmentLeasedMutationVariables = {
  input: CreateEquipmentLeasedInput,
  condition?: ModelEquipmentLeasedConditionInput | null,
};

export type CreateEquipmentLeasedMutation = {
  createEquipmentLeased?:  {
    __typename: "EquipmentLeased",
    id: string,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateEquipmentLeasedMutationVariables = {
  input: UpdateEquipmentLeasedInput,
  condition?: ModelEquipmentLeasedConditionInput | null,
};

export type UpdateEquipmentLeasedMutation = {
  updateEquipmentLeased?:  {
    __typename: "EquipmentLeased",
    id: string,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteEquipmentLeasedMutationVariables = {
  input: DeleteEquipmentLeasedInput,
  condition?: ModelEquipmentLeasedConditionInput | null,
};

export type DeleteEquipmentLeasedMutation = {
  deleteEquipmentLeased?:  {
    __typename: "EquipmentLeased",
    id: string,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateEquipmentMutationVariables = {
  input: CreateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type CreateEquipmentMutation = {
  createEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    leased?: boolean | null,
    Vendors?:  {
      __typename: "ModelVendorConnection",
      items:  Array< {
        __typename: "Vendor",
        id: string,
        name?: string | null,
        address?: string | null,
        preferred?: boolean | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentMaintenances?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      items:  Array< {
        __typename: "EquipmentMaintenance",
        id: string,
        type?: string | null,
        description?: string | null,
        status?: boolean | null,
        resolution?: string | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentOwned?:  {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    EquipmentLeased?:  {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    equipmentEquipmentOwnedId?: string | null,
    equipmentEquipmentLeasedId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateEquipmentMutationVariables = {
  input: UpdateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type UpdateEquipmentMutation = {
  updateEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    leased?: boolean | null,
    Vendors?:  {
      __typename: "ModelVendorConnection",
      items:  Array< {
        __typename: "Vendor",
        id: string,
        name?: string | null,
        address?: string | null,
        preferred?: boolean | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentMaintenances?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      items:  Array< {
        __typename: "EquipmentMaintenance",
        id: string,
        type?: string | null,
        description?: string | null,
        status?: boolean | null,
        resolution?: string | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentOwned?:  {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    EquipmentLeased?:  {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    equipmentEquipmentOwnedId?: string | null,
    equipmentEquipmentLeasedId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEquipmentMutationVariables = {
  input: DeleteEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type DeleteEquipmentMutation = {
  deleteEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    leased?: boolean | null,
    Vendors?:  {
      __typename: "ModelVendorConnection",
      items:  Array< {
        __typename: "Vendor",
        id: string,
        name?: string | null,
        address?: string | null,
        preferred?: boolean | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentMaintenances?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      items:  Array< {
        __typename: "EquipmentMaintenance",
        id: string,
        type?: string | null,
        description?: string | null,
        status?: boolean | null,
        resolution?: string | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentOwned?:  {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    EquipmentLeased?:  {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    equipmentEquipmentOwnedId?: string | null,
    equipmentEquipmentLeasedId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateLabTestMutationVariables = {
  input: CreateLabTestInput,
  condition?: ModelLabTestConditionInput | null,
};

export type CreateLabTestMutation = {
  createLabTest?:  {
    __typename: "LabTest",
    id: string,
    testTypeName?: string | null,
    normalRange?: string | null,
    abnormalRange?: string | null,
    description?: string | null,
    laborderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateLabTestMutationVariables = {
  input: UpdateLabTestInput,
  condition?: ModelLabTestConditionInput | null,
};

export type UpdateLabTestMutation = {
  updateLabTest?:  {
    __typename: "LabTest",
    id: string,
    testTypeName?: string | null,
    normalRange?: string | null,
    abnormalRange?: string | null,
    description?: string | null,
    laborderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteLabTestMutationVariables = {
  input: DeleteLabTestInput,
  condition?: ModelLabTestConditionInput | null,
};

export type DeleteLabTestMutation = {
  deleteLabTest?:  {
    __typename: "LabTest",
    id: string,
    testTypeName?: string | null,
    normalRange?: string | null,
    abnormalRange?: string | null,
    description?: string | null,
    laborderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateServiceProvidedByClinicMutationVariables = {
  input: CreateServiceProvidedByClinicInput,
  condition?: ModelServiceProvidedByClinicConditionInput | null,
};

export type CreateServiceProvidedByClinicMutation = {
  createServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    cost?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateServiceProvidedByClinicMutationVariables = {
  input: UpdateServiceProvidedByClinicInput,
  condition?: ModelServiceProvidedByClinicConditionInput | null,
};

export type UpdateServiceProvidedByClinicMutation = {
  updateServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    cost?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteServiceProvidedByClinicMutationVariables = {
  input: DeleteServiceProvidedByClinicInput,
  condition?: ModelServiceProvidedByClinicConditionInput | null,
};

export type DeleteServiceProvidedByClinicMutation = {
  deleteServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    cost?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateWorkScheduleMutationVariables = {
  input: CreateWorkScheduleInput,
  condition?: ModelWorkScheduleConditionInput | null,
};

export type CreateWorkScheduleMutation = {
  createWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    twoMonthCalendar?:  Array< {
      __typename: "Week",
      weekDays?:  Array< {
        __typename: "Day",
        id: string,
        isReserved: boolean,
        periods: number,
        number: number,
      } | null > | null,
    } | null > | null,
    physicianID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateWorkScheduleMutationVariables = {
  input: UpdateWorkScheduleInput,
  condition?: ModelWorkScheduleConditionInput | null,
};

export type UpdateWorkScheduleMutation = {
  updateWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    twoMonthCalendar?:  Array< {
      __typename: "Week",
      weekDays?:  Array< {
        __typename: "Day",
        id: string,
        isReserved: boolean,
        periods: number,
        number: number,
      } | null > | null,
    } | null > | null,
    physicianID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteWorkScheduleMutationVariables = {
  input: DeleteWorkScheduleInput,
  condition?: ModelWorkScheduleConditionInput | null,
};

export type DeleteWorkScheduleMutation = {
  deleteWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    twoMonthCalendar?:  Array< {
      __typename: "Week",
      weekDays?:  Array< {
        __typename: "Day",
        id: string,
        isReserved: boolean,
        periods: number,
        number: number,
      } | null > | null,
    } | null > | null,
    physicianID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreatePhysicianMutationVariables = {
  input: CreatePhysicianInput,
  condition?: ModelPhysicianConditionInput | null,
};

export type CreatePhysicianMutation = {
  createPhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    WorkSchedules?:  {
      __typename: "ModelWorkScheduleConnection",
      items:  Array< {
        __typename: "WorkSchedule",
        id: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdatePhysicianMutationVariables = {
  input: UpdatePhysicianInput,
  condition?: ModelPhysicianConditionInput | null,
};

export type UpdatePhysicianMutation = {
  updatePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    WorkSchedules?:  {
      __typename: "ModelWorkScheduleConnection",
      items:  Array< {
        __typename: "WorkSchedule",
        id: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeletePhysicianMutationVariables = {
  input: DeletePhysicianInput,
  condition?: ModelPhysicianConditionInput | null,
};

export type DeletePhysicianMutation = {
  deletePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    WorkSchedules?:  {
      __typename: "ModelWorkScheduleConnection",
      items:  Array< {
        __typename: "WorkSchedule",
        id: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    time?: string | null,
    type?: string | null,
    patientID: string,
    physicianID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    time?: string | null,
    type?: string | null,
    patientID: string,
    physicianID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    time?: string | null,
    type?: string | null,
    patientID: string,
    physicianID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateLabOrderMutationVariables = {
  input: CreateLabOrderInput,
  condition?: ModelLabOrderConditionInput | null,
};

export type CreateLabOrderMutation = {
  createLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    testType?: string | null,
    testDate?: string | null,
    technician?: string | null,
    testResult?: string | null,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    LabTests?:  {
      __typename: "ModelLabTestConnection",
      items:  Array< {
        __typename: "LabTest",
        id: string,
        testTypeName?: string | null,
        normalRange?: string | null,
        abnormalRange?: string | null,
        description?: string | null,
        laborderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateLabOrderMutationVariables = {
  input: UpdateLabOrderInput,
  condition?: ModelLabOrderConditionInput | null,
};

export type UpdateLabOrderMutation = {
  updateLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    testType?: string | null,
    testDate?: string | null,
    technician?: string | null,
    testResult?: string | null,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    LabTests?:  {
      __typename: "ModelLabTestConnection",
      items:  Array< {
        __typename: "LabTest",
        id: string,
        testTypeName?: string | null,
        normalRange?: string | null,
        abnormalRange?: string | null,
        description?: string | null,
        laborderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteLabOrderMutationVariables = {
  input: DeleteLabOrderInput,
  condition?: ModelLabOrderConditionInput | null,
};

export type DeleteLabOrderMutation = {
  deleteLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    testType?: string | null,
    testDate?: string | null,
    technician?: string | null,
    testResult?: string | null,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    LabTests?:  {
      __typename: "ModelLabTestConnection",
      items:  Array< {
        __typename: "LabTest",
        id: string,
        testTypeName?: string | null,
        normalRange?: string | null,
        abnormalRange?: string | null,
        description?: string | null,
        laborderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePrescriptionMutationVariables = {
  input: CreatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type CreatePrescriptionMutation = {
  createPrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName: string,
    medication: string,
    dosag: string,
    frequency: string,
    filledBy?: string | null,
    dateFilled: string,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePrescriptionMutationVariables = {
  input: UpdatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type UpdatePrescriptionMutation = {
  updatePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName: string,
    medication: string,
    dosag: string,
    frequency: string,
    filledBy?: string | null,
    dateFilled: string,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePrescriptionMutationVariables = {
  input: DeletePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type DeletePrescriptionMutation = {
  deletePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName: string,
    medication: string,
    dosag: string,
    frequency: string,
    filledBy?: string | null,
    dateFilled: string,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateVitalSignMutationVariables = {
  input: CreateVitalSignInput,
  condition?: ModelVitalSignConditionInput | null,
};

export type CreateVitalSignMutation = {
  createVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    pulse: number,
    respirationRate: number,
    bloodPressure: string,
    temperature?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateVitalSignMutationVariables = {
  input: UpdateVitalSignInput,
  condition?: ModelVitalSignConditionInput | null,
};

export type UpdateVitalSignMutation = {
  updateVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    pulse: number,
    respirationRate: number,
    bloodPressure: string,
    temperature?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteVitalSignMutationVariables = {
  input: DeleteVitalSignInput,
  condition?: ModelVitalSignConditionInput | null,
};

export type DeleteVitalSignMutation = {
  deleteVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    pulse: number,
    respirationRate: number,
    bloodPressure: string,
    temperature?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateMedicalEncounterMutationVariables = {
  input: CreateMedicalEncounterInput,
  condition?: ModelMedicalEncounterConditionInput | null,
};

export type CreateMedicalEncounterMutation = {
  createMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    date: string,
    practitionerSeen: Array< Practitioner | null >,
    complaints?: string | null,
    diagnosis: string,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    patientID: string,
    VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Prescriptions?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        physicianName: string,
        medication: string,
        dosag: string,
        frequency: string,
        filledBy?: string | null,
        dateFilled: string,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        prescriptionServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LabOrders?:  {
      __typename: "ModelLabOrderConnection",
      items:  Array< {
        __typename: "LabOrder",
        id: string,
        physicianName?: string | null,
        testType?: string | null,
        testDate?: string | null,
        technician?: string | null,
        testResult?: string | null,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        labOrderServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterVitalSignId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateMedicalEncounterMutationVariables = {
  input: UpdateMedicalEncounterInput,
  condition?: ModelMedicalEncounterConditionInput | null,
};

export type UpdateMedicalEncounterMutation = {
  updateMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    date: string,
    practitionerSeen: Array< Practitioner | null >,
    complaints?: string | null,
    diagnosis: string,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    patientID: string,
    VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Prescriptions?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        physicianName: string,
        medication: string,
        dosag: string,
        frequency: string,
        filledBy?: string | null,
        dateFilled: string,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        prescriptionServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LabOrders?:  {
      __typename: "ModelLabOrderConnection",
      items:  Array< {
        __typename: "LabOrder",
        id: string,
        physicianName?: string | null,
        testType?: string | null,
        testDate?: string | null,
        technician?: string | null,
        testResult?: string | null,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        labOrderServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterVitalSignId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteMedicalEncounterMutationVariables = {
  input: DeleteMedicalEncounterInput,
  condition?: ModelMedicalEncounterConditionInput | null,
};

export type DeleteMedicalEncounterMutation = {
  deleteMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    date: string,
    practitionerSeen: Array< Practitioner | null >,
    complaints?: string | null,
    diagnosis: string,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    patientID: string,
    VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Prescriptions?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        physicianName: string,
        medication: string,
        dosag: string,
        frequency: string,
        filledBy?: string | null,
        dateFilled: string,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        prescriptionServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LabOrders?:  {
      __typename: "ModelLabOrderConnection",
      items:  Array< {
        __typename: "LabOrder",
        id: string,
        physicianName?: string | null,
        testType?: string | null,
        testDate?: string | null,
        technician?: string | null,
        testResult?: string | null,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        labOrderServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterVitalSignId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateMedicationMutationVariables = {
  input: CreateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type CreateMedicationMutation = {
  createMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    usage?: string | null,
    dosage?: string | null,
    frequency?: string | null,
    sideEffects?: string | null,
    interactions?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMedicationMutationVariables = {
  input: UpdateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type UpdateMedicationMutation = {
  updateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    usage?: string | null,
    dosage?: string | null,
    frequency?: string | null,
    sideEffects?: string | null,
    interactions?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMedicationMutationVariables = {
  input: DeleteMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type DeleteMedicationMutation = {
  deleteMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    usage?: string | null,
    dosage?: string | null,
    frequency?: string | null,
    sideEffects?: string | null,
    interactions?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateInsuranceCarrierMutationVariables = {
  input: CreateInsuranceCarrierInput,
  condition?: ModelInsuranceCarrierConditionInput | null,
};

export type CreateInsuranceCarrierMutation = {
  createInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name: string,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateInsuranceCarrierMutationVariables = {
  input: UpdateInsuranceCarrierInput,
  condition?: ModelInsuranceCarrierConditionInput | null,
};

export type UpdateInsuranceCarrierMutation = {
  updateInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name: string,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteInsuranceCarrierMutationVariables = {
  input: DeleteInsuranceCarrierInput,
  condition?: ModelInsuranceCarrierConditionInput | null,
};

export type DeleteInsuranceCarrierMutation = {
  deleteInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name: string,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreatePatientMutationVariables = {
  input: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    address?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Medications?:  {
      __typename: "ModelMedicationConnection",
      items:  Array< {
        __typename: "Medication",
        id: string,
        name?: string | null,
        usage?: string | null,
        dosage?: string | null,
        frequency?: string | null,
        sideEffects?: string | null,
        interactions?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      items:  Array< {
        __typename: "MedicalEncounter",
        id: string,
        date: string,
        practitionerSeen: Array< Practitioner | null >,
        complaints?: string | null,
        diagnosis: string,
        treatmentPlan?: string | null,
        referralToSpecialists?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        medicalEncounterVitalSignId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    cell?: string | null,
    Payments?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    paymentStatus?: InsuranceCarrierStatus | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientInsuranceCarrierId?: string | null,
    patientPhysicianId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    address?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Medications?:  {
      __typename: "ModelMedicationConnection",
      items:  Array< {
        __typename: "Medication",
        id: string,
        name?: string | null,
        usage?: string | null,
        dosage?: string | null,
        frequency?: string | null,
        sideEffects?: string | null,
        interactions?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      items:  Array< {
        __typename: "MedicalEncounter",
        id: string,
        date: string,
        practitionerSeen: Array< Practitioner | null >,
        complaints?: string | null,
        diagnosis: string,
        treatmentPlan?: string | null,
        referralToSpecialists?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        medicalEncounterVitalSignId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    cell?: string | null,
    Payments?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    paymentStatus?: InsuranceCarrierStatus | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientInsuranceCarrierId?: string | null,
    patientPhysicianId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePatientMutationVariables = {
  input: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    address?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Medications?:  {
      __typename: "ModelMedicationConnection",
      items:  Array< {
        __typename: "Medication",
        id: string,
        name?: string | null,
        usage?: string | null,
        dosage?: string | null,
        frequency?: string | null,
        sideEffects?: string | null,
        interactions?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      items:  Array< {
        __typename: "MedicalEncounter",
        id: string,
        date: string,
        practitionerSeen: Array< Practitioner | null >,
        complaints?: string | null,
        diagnosis: string,
        treatmentPlan?: string | null,
        referralToSpecialists?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        medicalEncounterVitalSignId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    cell?: string | null,
    Payments?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    paymentStatus?: InsuranceCarrierStatus | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientInsuranceCarrierId?: string | null,
    patientPhysicianId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePatientPaymentsMutationVariables = {
  input: CreatePatientPaymentsInput,
  condition?: ModelPatientPaymentsConditionInput | null,
};

export type CreatePatientPaymentsMutation = {
  createPatientPayments?:  {
    __typename: "PatientPayments",
    id: string,
    paymentsId: string,
    patientId: string,
    payments:  {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    patient:  {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdatePatientPaymentsMutationVariables = {
  input: UpdatePatientPaymentsInput,
  condition?: ModelPatientPaymentsConditionInput | null,
};

export type UpdatePatientPaymentsMutation = {
  updatePatientPayments?:  {
    __typename: "PatientPayments",
    id: string,
    paymentsId: string,
    patientId: string,
    payments:  {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    patient:  {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeletePatientPaymentsMutationVariables = {
  input: DeletePatientPaymentsInput,
  condition?: ModelPatientPaymentsConditionInput | null,
};

export type DeletePatientPaymentsMutation = {
  deletePatientPayments?:  {
    __typename: "PatientPayments",
    id: string,
    paymentsId: string,
    patientId: string,
    payments:  {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    patient:  {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetPaymentsQueryVariables = {
  id: string,
};

export type GetPaymentsQuery = {
  getPayments?:  {
    __typename: "Payments",
    id: string,
    amount: number,
    dayIssued: string,
    dayFulfilled?: string | null,
    isPaid: boolean,
    patients?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentsConnection",
    items:  Array< {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPaymentsQueryVariables = {
  filter?: ModelPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPaymentsQuery = {
  syncPayments?:  {
    __typename: "ModelPaymentsConnection",
    items:  Array< {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVendorQueryVariables = {
  id: string,
};

export type GetVendorQuery = {
  getVendor?:  {
    __typename: "Vendor",
    id: string,
    name?: string | null,
    address?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorsQuery = {
  listVendors?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      name?: string | null,
      address?: string | null,
      preferred?: boolean | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVendorsQuery = {
  syncVendors?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      name?: string | null,
      address?: string | null,
      preferred?: boolean | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type VendorsByEquipmentIDQueryVariables = {
  equipmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VendorsByEquipmentIDQuery = {
  vendorsByEquipmentID?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      name?: string | null,
      address?: string | null,
      preferred?: boolean | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentMaintenanceQueryVariables = {
  id: string,
};

export type GetEquipmentMaintenanceQuery = {
  getEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    description?: string | null,
    status?: boolean | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListEquipmentMaintenancesQueryVariables = {
  filter?: ModelEquipmentMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentMaintenancesQuery = {
  listEquipmentMaintenances?:  {
    __typename: "ModelEquipmentMaintenanceConnection",
    items:  Array< {
      __typename: "EquipmentMaintenance",
      id: string,
      type?: string | null,
      description?: string | null,
      status?: boolean | null,
      resolution?: string | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEquipmentMaintenancesQueryVariables = {
  filter?: ModelEquipmentMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentMaintenancesQuery = {
  syncEquipmentMaintenances?:  {
    __typename: "ModelEquipmentMaintenanceConnection",
    items:  Array< {
      __typename: "EquipmentMaintenance",
      id: string,
      type?: string | null,
      description?: string | null,
      status?: boolean | null,
      resolution?: string | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type EquipmentMaintenancesByEquipmentIDQueryVariables = {
  equipmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEquipmentMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EquipmentMaintenancesByEquipmentIDQuery = {
  equipmentMaintenancesByEquipmentID?:  {
    __typename: "ModelEquipmentMaintenanceConnection",
    items:  Array< {
      __typename: "EquipmentMaintenance",
      id: string,
      type?: string | null,
      description?: string | null,
      status?: boolean | null,
      resolution?: string | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentOwnedQueryVariables = {
  id: string,
};

export type GetEquipmentOwnedQuery = {
  getEquipmentOwned?:  {
    __typename: "EquipmentOwned",
    id: string,
    datePurchased?: string | null,
    warranty?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListEquipmentOwnedsQueryVariables = {
  filter?: ModelEquipmentOwnedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentOwnedsQuery = {
  listEquipmentOwneds?:  {
    __typename: "ModelEquipmentOwnedConnection",
    items:  Array< {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEquipmentOwnedsQueryVariables = {
  filter?: ModelEquipmentOwnedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentOwnedsQuery = {
  syncEquipmentOwneds?:  {
    __typename: "ModelEquipmentOwnedConnection",
    items:  Array< {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentLeasedQueryVariables = {
  id: string,
};

export type GetEquipmentLeasedQuery = {
  getEquipmentLeased?:  {
    __typename: "EquipmentLeased",
    id: string,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListEquipmentLeasedsQueryVariables = {
  filter?: ModelEquipmentLeasedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentLeasedsQuery = {
  listEquipmentLeaseds?:  {
    __typename: "ModelEquipmentLeasedConnection",
    items:  Array< {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEquipmentLeasedsQueryVariables = {
  filter?: ModelEquipmentLeasedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentLeasedsQuery = {
  syncEquipmentLeaseds?:  {
    __typename: "ModelEquipmentLeasedConnection",
    items:  Array< {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentQueryVariables = {
  id: string,
};

export type GetEquipmentQuery = {
  getEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    leased?: boolean | null,
    Vendors?:  {
      __typename: "ModelVendorConnection",
      items:  Array< {
        __typename: "Vendor",
        id: string,
        name?: string | null,
        address?: string | null,
        preferred?: boolean | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentMaintenances?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      items:  Array< {
        __typename: "EquipmentMaintenance",
        id: string,
        type?: string | null,
        description?: string | null,
        status?: boolean | null,
        resolution?: string | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentOwned?:  {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    EquipmentLeased?:  {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    equipmentEquipmentOwnedId?: string | null,
    equipmentEquipmentLeasedId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEquipmentQueryVariables = {
  filter?: ModelEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentQuery = {
  listEquipment?:  {
    __typename: "ModelEquipmentConnection",
    items:  Array< {
      __typename: "Equipment",
      id: string,
      type?: string | null,
      description?: string | null,
      department?: string | null,
      owned?: boolean | null,
      leased?: boolean | null,
      Vendors?:  {
        __typename: "ModelVendorConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      EquipmentMaintenances?:  {
        __typename: "ModelEquipmentMaintenanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      EquipmentOwned?:  {
        __typename: "EquipmentOwned",
        id: string,
        datePurchased?: string | null,
        warranty?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      EquipmentLeased?:  {
        __typename: "EquipmentLeased",
        id: string,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      equipmentEquipmentOwnedId?: string | null,
      equipmentEquipmentLeasedId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEquipmentQueryVariables = {
  filter?: ModelEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentQuery = {
  syncEquipment?:  {
    __typename: "ModelEquipmentConnection",
    items:  Array< {
      __typename: "Equipment",
      id: string,
      type?: string | null,
      description?: string | null,
      department?: string | null,
      owned?: boolean | null,
      leased?: boolean | null,
      Vendors?:  {
        __typename: "ModelVendorConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      EquipmentMaintenances?:  {
        __typename: "ModelEquipmentMaintenanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      EquipmentOwned?:  {
        __typename: "EquipmentOwned",
        id: string,
        datePurchased?: string | null,
        warranty?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      EquipmentLeased?:  {
        __typename: "EquipmentLeased",
        id: string,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      equipmentEquipmentOwnedId?: string | null,
      equipmentEquipmentLeasedId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLabTestQueryVariables = {
  id: string,
};

export type GetLabTestQuery = {
  getLabTest?:  {
    __typename: "LabTest",
    id: string,
    testTypeName?: string | null,
    normalRange?: string | null,
    abnormalRange?: string | null,
    description?: string | null,
    laborderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListLabTestsQueryVariables = {
  filter?: ModelLabTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLabTestsQuery = {
  listLabTests?:  {
    __typename: "ModelLabTestConnection",
    items:  Array< {
      __typename: "LabTest",
      id: string,
      testTypeName?: string | null,
      normalRange?: string | null,
      abnormalRange?: string | null,
      description?: string | null,
      laborderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLabTestsQueryVariables = {
  filter?: ModelLabTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLabTestsQuery = {
  syncLabTests?:  {
    __typename: "ModelLabTestConnection",
    items:  Array< {
      __typename: "LabTest",
      id: string,
      testTypeName?: string | null,
      normalRange?: string | null,
      abnormalRange?: string | null,
      description?: string | null,
      laborderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type LabTestsByLaborderIDQueryVariables = {
  laborderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLabTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LabTestsByLaborderIDQuery = {
  labTestsByLaborderID?:  {
    __typename: "ModelLabTestConnection",
    items:  Array< {
      __typename: "LabTest",
      id: string,
      testTypeName?: string | null,
      normalRange?: string | null,
      abnormalRange?: string | null,
      description?: string | null,
      laborderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetServiceProvidedByClinicQueryVariables = {
  id: string,
};

export type GetServiceProvidedByClinicQuery = {
  getServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    cost?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListServiceProvidedByClinicsQueryVariables = {
  filter?: ModelServiceProvidedByClinicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServiceProvidedByClinicsQuery = {
  listServiceProvidedByClinics?:  {
    __typename: "ModelServiceProvidedByClinicConnection",
    items:  Array< {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncServiceProvidedByClinicsQueryVariables = {
  filter?: ModelServiceProvidedByClinicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncServiceProvidedByClinicsQuery = {
  syncServiceProvidedByClinics?:  {
    __typename: "ModelServiceProvidedByClinicConnection",
    items:  Array< {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkScheduleQueryVariables = {
  id: string,
};

export type GetWorkScheduleQuery = {
  getWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    twoMonthCalendar?:  Array< {
      __typename: "Week",
      weekDays?:  Array< {
        __typename: "Day",
        id: string,
        isReserved: boolean,
        periods: number,
        number: number,
      } | null > | null,
    } | null > | null,
    physicianID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListWorkSchedulesQueryVariables = {
  filter?: ModelWorkScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkSchedulesQuery = {
  listWorkSchedules?:  {
    __typename: "ModelWorkScheduleConnection",
    items:  Array< {
      __typename: "WorkSchedule",
      id: string,
      physicianID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkSchedulesQueryVariables = {
  filter?: ModelWorkScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkSchedulesQuery = {
  syncWorkSchedules?:  {
    __typename: "ModelWorkScheduleConnection",
    items:  Array< {
      __typename: "WorkSchedule",
      id: string,
      physicianID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type WorkSchedulesByPhysicianIDQueryVariables = {
  physicianID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWorkScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WorkSchedulesByPhysicianIDQuery = {
  workSchedulesByPhysicianID?:  {
    __typename: "ModelWorkScheduleConnection",
    items:  Array< {
      __typename: "WorkSchedule",
      id: string,
      physicianID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPhysicianQueryVariables = {
  id: string,
};

export type GetPhysicianQuery = {
  getPhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    WorkSchedules?:  {
      __typename: "ModelWorkScheduleConnection",
      items:  Array< {
        __typename: "WorkSchedule",
        id: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListPhysiciansQueryVariables = {
  filter?: ModelPhysicianFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhysiciansQuery = {
  listPhysicians?:  {
    __typename: "ModelPhysicianConnection",
    items:  Array< {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPhysiciansQueryVariables = {
  filter?: ModelPhysicianFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPhysiciansQuery = {
  syncPhysicians?:  {
    __typename: "ModelPhysicianConnection",
    items:  Array< {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    time?: string | null,
    type?: string | null,
    patientID: string,
    physicianID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      time?: string | null,
      type?: string | null,
      patientID: string,
      physicianID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppointmentsQuery = {
  syncAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      time?: string | null,
      type?: string | null,
      patientID: string,
      physicianID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppointmentsByPatientIDQueryVariables = {
  patientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByPatientIDQuery = {
  appointmentsByPatientID?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      time?: string | null,
      type?: string | null,
      patientID: string,
      physicianID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppointmentsByPhysicianIDQueryVariables = {
  physicianID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByPhysicianIDQuery = {
  appointmentsByPhysicianID?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      time?: string | null,
      type?: string | null,
      patientID: string,
      physicianID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLabOrderQueryVariables = {
  id: string,
};

export type GetLabOrderQuery = {
  getLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    testType?: string | null,
    testDate?: string | null,
    technician?: string | null,
    testResult?: string | null,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    LabTests?:  {
      __typename: "ModelLabTestConnection",
      items:  Array< {
        __typename: "LabTest",
        id: string,
        testTypeName?: string | null,
        normalRange?: string | null,
        abnormalRange?: string | null,
        description?: string | null,
        laborderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListLabOrdersQueryVariables = {
  filter?: ModelLabOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLabOrdersQuery = {
  listLabOrders?:  {
    __typename: "ModelLabOrderConnection",
    items:  Array< {
      __typename: "LabOrder",
      id: string,
      physicianName?: string | null,
      testType?: string | null,
      testDate?: string | null,
      technician?: string | null,
      testResult?: string | null,
      medicalencounterID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      LabTests?:  {
        __typename: "ModelLabTestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      labOrderServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLabOrdersQueryVariables = {
  filter?: ModelLabOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLabOrdersQuery = {
  syncLabOrders?:  {
    __typename: "ModelLabOrderConnection",
    items:  Array< {
      __typename: "LabOrder",
      id: string,
      physicianName?: string | null,
      testType?: string | null,
      testDate?: string | null,
      technician?: string | null,
      testResult?: string | null,
      medicalencounterID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      LabTests?:  {
        __typename: "ModelLabTestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      labOrderServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type LabOrdersByMedicalencounterIDQueryVariables = {
  medicalencounterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLabOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LabOrdersByMedicalencounterIDQuery = {
  labOrdersByMedicalencounterID?:  {
    __typename: "ModelLabOrderConnection",
    items:  Array< {
      __typename: "LabOrder",
      id: string,
      physicianName?: string | null,
      testType?: string | null,
      testDate?: string | null,
      technician?: string | null,
      testResult?: string | null,
      medicalencounterID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      LabTests?:  {
        __typename: "ModelLabTestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      labOrderServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPrescriptionQueryVariables = {
  id: string,
};

export type GetPrescriptionQuery = {
  getPrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName: string,
    medication: string,
    dosag: string,
    frequency: string,
    filledBy?: string | null,
    dateFilled: string,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPrescriptionsQueryVariables = {
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrescriptionsQuery = {
  listPrescriptions?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      physicianName: string,
      medication: string,
      dosag: string,
      frequency: string,
      filledBy?: string | null,
      dateFilled: string,
      medicalencounterID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      prescriptionServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPrescriptionsQueryVariables = {
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPrescriptionsQuery = {
  syncPrescriptions?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      physicianName: string,
      medication: string,
      dosag: string,
      frequency: string,
      filledBy?: string | null,
      dateFilled: string,
      medicalencounterID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      prescriptionServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PrescriptionsByMedicalencounterIDQueryVariables = {
  medicalencounterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PrescriptionsByMedicalencounterIDQuery = {
  prescriptionsByMedicalencounterID?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      physicianName: string,
      medication: string,
      dosag: string,
      frequency: string,
      filledBy?: string | null,
      dateFilled: string,
      medicalencounterID: string,
      ServiceProvidedByClinic?:  {
        __typename: "ServiceProvidedByClinic",
        id: string,
        type?: string | null,
        description?: string | null,
        cost?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      prescriptionServiceProvidedByClinicId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVitalSignQueryVariables = {
  id: string,
};

export type GetVitalSignQuery = {
  getVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    pulse: number,
    respirationRate: number,
    bloodPressure: string,
    temperature?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListVitalSignsQueryVariables = {
  filter?: ModelVitalSignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVitalSignsQuery = {
  listVitalSigns?:  {
    __typename: "ModelVitalSignConnection",
    items:  Array< {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVitalSignsQueryVariables = {
  filter?: ModelVitalSignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVitalSignsQuery = {
  syncVitalSigns?:  {
    __typename: "ModelVitalSignConnection",
    items:  Array< {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMedicalEncounterQueryVariables = {
  id: string,
};

export type GetMedicalEncounterQuery = {
  getMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    date: string,
    practitionerSeen: Array< Practitioner | null >,
    complaints?: string | null,
    diagnosis: string,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    patientID: string,
    VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Prescriptions?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        physicianName: string,
        medication: string,
        dosag: string,
        frequency: string,
        filledBy?: string | null,
        dateFilled: string,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        prescriptionServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LabOrders?:  {
      __typename: "ModelLabOrderConnection",
      items:  Array< {
        __typename: "LabOrder",
        id: string,
        physicianName?: string | null,
        testType?: string | null,
        testDate?: string | null,
        technician?: string | null,
        testResult?: string | null,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        labOrderServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterVitalSignId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListMedicalEncountersQueryVariables = {
  filter?: ModelMedicalEncounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicalEncountersQuery = {
  listMedicalEncounters?:  {
    __typename: "ModelMedicalEncounterConnection",
    items:  Array< {
      __typename: "MedicalEncounter",
      id: string,
      date: string,
      practitionerSeen: Array< Practitioner | null >,
      complaints?: string | null,
      diagnosis: string,
      treatmentPlan?: string | null,
      referralToSpecialists?: string | null,
      patientID: string,
      VitalSign?:  {
        __typename: "VitalSign",
        id: string,
        pulse: number,
        respirationRate: number,
        bloodPressure: string,
        temperature?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Prescriptions?:  {
        __typename: "ModelPrescriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LabOrders?:  {
        __typename: "ModelLabOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      medicalEncounterVitalSignId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMedicalEncountersQueryVariables = {
  filter?: ModelMedicalEncounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMedicalEncountersQuery = {
  syncMedicalEncounters?:  {
    __typename: "ModelMedicalEncounterConnection",
    items:  Array< {
      __typename: "MedicalEncounter",
      id: string,
      date: string,
      practitionerSeen: Array< Practitioner | null >,
      complaints?: string | null,
      diagnosis: string,
      treatmentPlan?: string | null,
      referralToSpecialists?: string | null,
      patientID: string,
      VitalSign?:  {
        __typename: "VitalSign",
        id: string,
        pulse: number,
        respirationRate: number,
        bloodPressure: string,
        temperature?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Prescriptions?:  {
        __typename: "ModelPrescriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LabOrders?:  {
        __typename: "ModelLabOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      medicalEncounterVitalSignId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MedicalEncountersByPatientIDQueryVariables = {
  patientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicalEncounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicalEncountersByPatientIDQuery = {
  medicalEncountersByPatientID?:  {
    __typename: "ModelMedicalEncounterConnection",
    items:  Array< {
      __typename: "MedicalEncounter",
      id: string,
      date: string,
      practitionerSeen: Array< Practitioner | null >,
      complaints?: string | null,
      diagnosis: string,
      treatmentPlan?: string | null,
      referralToSpecialists?: string | null,
      patientID: string,
      VitalSign?:  {
        __typename: "VitalSign",
        id: string,
        pulse: number,
        respirationRate: number,
        bloodPressure: string,
        temperature?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Prescriptions?:  {
        __typename: "ModelPrescriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LabOrders?:  {
        __typename: "ModelLabOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      medicalEncounterVitalSignId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMedicationQueryVariables = {
  id: string,
};

export type GetMedicationQuery = {
  getMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    usage?: string | null,
    dosage?: string | null,
    frequency?: string | null,
    sideEffects?: string | null,
    interactions?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMedicationsQueryVariables = {
  filter?: ModelMedicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicationsQuery = {
  listMedications?:  {
    __typename: "ModelMedicationConnection",
    items:  Array< {
      __typename: "Medication",
      id: string,
      name?: string | null,
      usage?: string | null,
      dosage?: string | null,
      frequency?: string | null,
      sideEffects?: string | null,
      interactions?: string | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMedicationsQueryVariables = {
  filter?: ModelMedicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMedicationsQuery = {
  syncMedications?:  {
    __typename: "ModelMedicationConnection",
    items:  Array< {
      __typename: "Medication",
      id: string,
      name?: string | null,
      usage?: string | null,
      dosage?: string | null,
      frequency?: string | null,
      sideEffects?: string | null,
      interactions?: string | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MedicationsByPatientIDQueryVariables = {
  patientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicationsByPatientIDQuery = {
  medicationsByPatientID?:  {
    __typename: "ModelMedicationConnection",
    items:  Array< {
      __typename: "Medication",
      id: string,
      name?: string | null,
      usage?: string | null,
      dosage?: string | null,
      frequency?: string | null,
      sideEffects?: string | null,
      interactions?: string | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetInsuranceCarrierQueryVariables = {
  id: string,
};

export type GetInsuranceCarrierQuery = {
  getInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name: string,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListInsuranceCarriersQueryVariables = {
  filter?: ModelInsuranceCarrierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInsuranceCarriersQuery = {
  listInsuranceCarriers?:  {
    __typename: "ModelInsuranceCarrierConnection",
    items:  Array< {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncInsuranceCarriersQueryVariables = {
  filter?: ModelInsuranceCarrierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncInsuranceCarriersQuery = {
  syncInsuranceCarriers?:  {
    __typename: "ModelInsuranceCarrierConnection",
    items:  Array< {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPatientQueryVariables = {
  id: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    address?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Medications?:  {
      __typename: "ModelMedicationConnection",
      items:  Array< {
        __typename: "Medication",
        id: string,
        name?: string | null,
        usage?: string | null,
        dosage?: string | null,
        frequency?: string | null,
        sideEffects?: string | null,
        interactions?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      items:  Array< {
        __typename: "MedicalEncounter",
        id: string,
        date: string,
        practitionerSeen: Array< Practitioner | null >,
        complaints?: string | null,
        diagnosis: string,
        treatmentPlan?: string | null,
        referralToSpecialists?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        medicalEncounterVitalSignId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    cell?: string | null,
    Payments?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    paymentStatus?: InsuranceCarrierStatus | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientInsuranceCarrierId?: string | null,
    patientPhysicianId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPatientsQuery = {
  syncPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPatientPaymentsQueryVariables = {
  id: string,
};

export type GetPatientPaymentsQuery = {
  getPatientPayments?:  {
    __typename: "PatientPayments",
    id: string,
    paymentsId: string,
    patientId: string,
    payments:  {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    patient:  {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListPatientPaymentsQueryVariables = {
  filter?: ModelPatientPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientPaymentsQuery = {
  listPatientPayments?:  {
    __typename: "ModelPatientPaymentsConnection",
    items:  Array< {
      __typename: "PatientPayments",
      id: string,
      paymentsId: string,
      patientId: string,
      payments:  {
        __typename: "Payments",
        id: string,
        amount: number,
        dayIssued: string,
        dayFulfilled?: string | null,
        isPaid: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      patient:  {
        __typename: "Patient",
        id: string,
        name?: string | null,
        address?: string | null,
        dateOfBirth?: string | null,
        gender?: string | null,
        cell?: string | null,
        paymentStatus?: InsuranceCarrierStatus | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        patientInsuranceCarrierId?: string | null,
        patientPhysicianId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPatientPaymentsQueryVariables = {
  filter?: ModelPatientPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPatientPaymentsQuery = {
  syncPatientPayments?:  {
    __typename: "ModelPatientPaymentsConnection",
    items:  Array< {
      __typename: "PatientPayments",
      id: string,
      paymentsId: string,
      patientId: string,
      payments:  {
        __typename: "Payments",
        id: string,
        amount: number,
        dayIssued: string,
        dayFulfilled?: string | null,
        isPaid: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      patient:  {
        __typename: "Patient",
        id: string,
        name?: string | null,
        address?: string | null,
        dateOfBirth?: string | null,
        gender?: string | null,
        cell?: string | null,
        paymentStatus?: InsuranceCarrierStatus | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        patientInsuranceCarrierId?: string | null,
        patientPhysicianId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PatientPaymentsByPaymentsIdQueryVariables = {
  paymentsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientPaymentsByPaymentsIdQuery = {
  patientPaymentsByPaymentsId?:  {
    __typename: "ModelPatientPaymentsConnection",
    items:  Array< {
      __typename: "PatientPayments",
      id: string,
      paymentsId: string,
      patientId: string,
      payments:  {
        __typename: "Payments",
        id: string,
        amount: number,
        dayIssued: string,
        dayFulfilled?: string | null,
        isPaid: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      patient:  {
        __typename: "Patient",
        id: string,
        name?: string | null,
        address?: string | null,
        dateOfBirth?: string | null,
        gender?: string | null,
        cell?: string | null,
        paymentStatus?: InsuranceCarrierStatus | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        patientInsuranceCarrierId?: string | null,
        patientPhysicianId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PatientPaymentsByPatientIdQueryVariables = {
  patientId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientPaymentsByPatientIdQuery = {
  patientPaymentsByPatientId?:  {
    __typename: "ModelPatientPaymentsConnection",
    items:  Array< {
      __typename: "PatientPayments",
      id: string,
      paymentsId: string,
      patientId: string,
      payments:  {
        __typename: "Payments",
        id: string,
        amount: number,
        dayIssued: string,
        dayFulfilled?: string | null,
        isPaid: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      patient:  {
        __typename: "Patient",
        id: string,
        name?: string | null,
        address?: string | null,
        dateOfBirth?: string | null,
        gender?: string | null,
        cell?: string | null,
        paymentStatus?: InsuranceCarrierStatus | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        patientInsuranceCarrierId?: string | null,
        patientPhysicianId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentsFilterInput | null,
  owner?: string | null,
};

export type OnCreatePaymentsSubscription = {
  onCreatePayments?:  {
    __typename: "Payments",
    id: string,
    amount: number,
    dayIssued: string,
    dayFulfilled?: string | null,
    isPaid: boolean,
    patients?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdatePaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentsFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePaymentsSubscription = {
  onUpdatePayments?:  {
    __typename: "Payments",
    id: string,
    amount: number,
    dayIssued: string,
    dayFulfilled?: string | null,
    isPaid: boolean,
    patients?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeletePaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentsFilterInput | null,
  owner?: string | null,
};

export type OnDeletePaymentsSubscription = {
  onDeletePayments?:  {
    __typename: "Payments",
    id: string,
    amount: number,
    dayIssued: string,
    dayFulfilled?: string | null,
    isPaid: boolean,
    patients?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
  owner?: string | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor?:  {
    __typename: "Vendor",
    id: string,
    name?: string | null,
    address?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor?:  {
    __typename: "Vendor",
    id: string,
    name?: string | null,
    address?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor?:  {
    __typename: "Vendor",
    id: string,
    name?: string | null,
    address?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateEquipmentMaintenanceSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentMaintenanceFilterInput | null,
  owner?: string | null,
};

export type OnCreateEquipmentMaintenanceSubscription = {
  onCreateEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    description?: string | null,
    status?: boolean | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateEquipmentMaintenanceSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentMaintenanceFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEquipmentMaintenanceSubscription = {
  onUpdateEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    description?: string | null,
    status?: boolean | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteEquipmentMaintenanceSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentMaintenanceFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEquipmentMaintenanceSubscription = {
  onDeleteEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    description?: string | null,
    status?: boolean | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateEquipmentOwnedSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentOwnedFilterInput | null,
  owner?: string | null,
};

export type OnCreateEquipmentOwnedSubscription = {
  onCreateEquipmentOwned?:  {
    __typename: "EquipmentOwned",
    id: string,
    datePurchased?: string | null,
    warranty?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateEquipmentOwnedSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentOwnedFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEquipmentOwnedSubscription = {
  onUpdateEquipmentOwned?:  {
    __typename: "EquipmentOwned",
    id: string,
    datePurchased?: string | null,
    warranty?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteEquipmentOwnedSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentOwnedFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEquipmentOwnedSubscription = {
  onDeleteEquipmentOwned?:  {
    __typename: "EquipmentOwned",
    id: string,
    datePurchased?: string | null,
    warranty?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateEquipmentLeasedSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentLeasedFilterInput | null,
  owner?: string | null,
};

export type OnCreateEquipmentLeasedSubscription = {
  onCreateEquipmentLeased?:  {
    __typename: "EquipmentLeased",
    id: string,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateEquipmentLeasedSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentLeasedFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEquipmentLeasedSubscription = {
  onUpdateEquipmentLeased?:  {
    __typename: "EquipmentLeased",
    id: string,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteEquipmentLeasedSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentLeasedFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEquipmentLeasedSubscription = {
  onDeleteEquipmentLeased?:  {
    __typename: "EquipmentLeased",
    id: string,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateEquipmentSubscription = {
  onCreateEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    leased?: boolean | null,
    Vendors?:  {
      __typename: "ModelVendorConnection",
      items:  Array< {
        __typename: "Vendor",
        id: string,
        name?: string | null,
        address?: string | null,
        preferred?: boolean | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentMaintenances?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      items:  Array< {
        __typename: "EquipmentMaintenance",
        id: string,
        type?: string | null,
        description?: string | null,
        status?: boolean | null,
        resolution?: string | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentOwned?:  {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    EquipmentLeased?:  {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    equipmentEquipmentOwnedId?: string | null,
    equipmentEquipmentLeasedId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEquipmentSubscription = {
  onUpdateEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    leased?: boolean | null,
    Vendors?:  {
      __typename: "ModelVendorConnection",
      items:  Array< {
        __typename: "Vendor",
        id: string,
        name?: string | null,
        address?: string | null,
        preferred?: boolean | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentMaintenances?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      items:  Array< {
        __typename: "EquipmentMaintenance",
        id: string,
        type?: string | null,
        description?: string | null,
        status?: boolean | null,
        resolution?: string | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentOwned?:  {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    EquipmentLeased?:  {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    equipmentEquipmentOwnedId?: string | null,
    equipmentEquipmentLeasedId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEquipmentSubscription = {
  onDeleteEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    leased?: boolean | null,
    Vendors?:  {
      __typename: "ModelVendorConnection",
      items:  Array< {
        __typename: "Vendor",
        id: string,
        name?: string | null,
        address?: string | null,
        preferred?: boolean | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentMaintenances?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      items:  Array< {
        __typename: "EquipmentMaintenance",
        id: string,
        type?: string | null,
        description?: string | null,
        status?: boolean | null,
        resolution?: string | null,
        equipmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EquipmentOwned?:  {
      __typename: "EquipmentOwned",
      id: string,
      datePurchased?: string | null,
      warranty?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    EquipmentLeased?:  {
      __typename: "EquipmentLeased",
      id: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    equipmentEquipmentOwnedId?: string | null,
    equipmentEquipmentLeasedId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLabTestSubscriptionVariables = {
  filter?: ModelSubscriptionLabTestFilterInput | null,
  owner?: string | null,
};

export type OnCreateLabTestSubscription = {
  onCreateLabTest?:  {
    __typename: "LabTest",
    id: string,
    testTypeName?: string | null,
    normalRange?: string | null,
    abnormalRange?: string | null,
    description?: string | null,
    laborderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateLabTestSubscriptionVariables = {
  filter?: ModelSubscriptionLabTestFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLabTestSubscription = {
  onUpdateLabTest?:  {
    __typename: "LabTest",
    id: string,
    testTypeName?: string | null,
    normalRange?: string | null,
    abnormalRange?: string | null,
    description?: string | null,
    laborderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteLabTestSubscriptionVariables = {
  filter?: ModelSubscriptionLabTestFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLabTestSubscription = {
  onDeleteLabTest?:  {
    __typename: "LabTest",
    id: string,
    testTypeName?: string | null,
    normalRange?: string | null,
    abnormalRange?: string | null,
    description?: string | null,
    laborderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateServiceProvidedByClinicSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidedByClinicFilterInput | null,
  owner?: string | null,
};

export type OnCreateServiceProvidedByClinicSubscription = {
  onCreateServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    cost?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateServiceProvidedByClinicSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidedByClinicFilterInput | null,
  owner?: string | null,
};

export type OnUpdateServiceProvidedByClinicSubscription = {
  onUpdateServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    cost?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteServiceProvidedByClinicSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidedByClinicFilterInput | null,
  owner?: string | null,
};

export type OnDeleteServiceProvidedByClinicSubscription = {
  onDeleteServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    cost?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateWorkScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionWorkScheduleFilterInput | null,
  owner?: string | null,
};

export type OnCreateWorkScheduleSubscription = {
  onCreateWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    twoMonthCalendar?:  Array< {
      __typename: "Week",
      weekDays?:  Array< {
        __typename: "Day",
        id: string,
        isReserved: boolean,
        periods: number,
        number: number,
      } | null > | null,
    } | null > | null,
    physicianID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateWorkScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionWorkScheduleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWorkScheduleSubscription = {
  onUpdateWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    twoMonthCalendar?:  Array< {
      __typename: "Week",
      weekDays?:  Array< {
        __typename: "Day",
        id: string,
        isReserved: boolean,
        periods: number,
        number: number,
      } | null > | null,
    } | null > | null,
    physicianID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteWorkScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionWorkScheduleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWorkScheduleSubscription = {
  onDeleteWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    twoMonthCalendar?:  Array< {
      __typename: "Week",
      weekDays?:  Array< {
        __typename: "Day",
        id: string,
        isReserved: boolean,
        periods: number,
        number: number,
      } | null > | null,
    } | null > | null,
    physicianID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreatePhysicianSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianFilterInput | null,
  owner?: string | null,
};

export type OnCreatePhysicianSubscription = {
  onCreatePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    WorkSchedules?:  {
      __typename: "ModelWorkScheduleConnection",
      items:  Array< {
        __typename: "WorkSchedule",
        id: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdatePhysicianSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePhysicianSubscription = {
  onUpdatePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    WorkSchedules?:  {
      __typename: "ModelWorkScheduleConnection",
      items:  Array< {
        __typename: "WorkSchedule",
        id: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeletePhysicianSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianFilterInput | null,
  owner?: string | null,
};

export type OnDeletePhysicianSubscription = {
  onDeletePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    WorkSchedules?:  {
      __typename: "ModelWorkScheduleConnection",
      items:  Array< {
        __typename: "WorkSchedule",
        id: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    time?: string | null,
    type?: string | null,
    patientID: string,
    physicianID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    time?: string | null,
    type?: string | null,
    patientID: string,
    physicianID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    time?: string | null,
    type?: string | null,
    patientID: string,
    physicianID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLabOrderSubscriptionVariables = {
  filter?: ModelSubscriptionLabOrderFilterInput | null,
  owner?: string | null,
};

export type OnCreateLabOrderSubscription = {
  onCreateLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    testType?: string | null,
    testDate?: string | null,
    technician?: string | null,
    testResult?: string | null,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    LabTests?:  {
      __typename: "ModelLabTestConnection",
      items:  Array< {
        __typename: "LabTest",
        id: string,
        testTypeName?: string | null,
        normalRange?: string | null,
        abnormalRange?: string | null,
        description?: string | null,
        laborderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateLabOrderSubscriptionVariables = {
  filter?: ModelSubscriptionLabOrderFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLabOrderSubscription = {
  onUpdateLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    testType?: string | null,
    testDate?: string | null,
    technician?: string | null,
    testResult?: string | null,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    LabTests?:  {
      __typename: "ModelLabTestConnection",
      items:  Array< {
        __typename: "LabTest",
        id: string,
        testTypeName?: string | null,
        normalRange?: string | null,
        abnormalRange?: string | null,
        description?: string | null,
        laborderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteLabOrderSubscriptionVariables = {
  filter?: ModelSubscriptionLabOrderFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLabOrderSubscription = {
  onDeleteLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    testType?: string | null,
    testDate?: string | null,
    technician?: string | null,
    testResult?: string | null,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    LabTests?:  {
      __typename: "ModelLabTestConnection",
      items:  Array< {
        __typename: "LabTest",
        id: string,
        testTypeName?: string | null,
        normalRange?: string | null,
        abnormalRange?: string | null,
        description?: string | null,
        laborderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
  owner?: string | null,
};

export type OnCreatePrescriptionSubscription = {
  onCreatePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName: string,
    medication: string,
    dosag: string,
    frequency: string,
    filledBy?: string | null,
    dateFilled: string,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePrescriptionSubscription = {
  onUpdatePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName: string,
    medication: string,
    dosag: string,
    frequency: string,
    filledBy?: string | null,
    dateFilled: string,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
  owner?: string | null,
};

export type OnDeletePrescriptionSubscription = {
  onDeletePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName: string,
    medication: string,
    dosag: string,
    frequency: string,
    filledBy?: string | null,
    dateFilled: string,
    medicalencounterID: string,
    ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      cost?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionServiceProvidedByClinicId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateVitalSignSubscriptionVariables = {
  filter?: ModelSubscriptionVitalSignFilterInput | null,
  owner?: string | null,
};

export type OnCreateVitalSignSubscription = {
  onCreateVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    pulse: number,
    respirationRate: number,
    bloodPressure: string,
    temperature?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateVitalSignSubscriptionVariables = {
  filter?: ModelSubscriptionVitalSignFilterInput | null,
  owner?: string | null,
};

export type OnUpdateVitalSignSubscription = {
  onUpdateVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    pulse: number,
    respirationRate: number,
    bloodPressure: string,
    temperature?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteVitalSignSubscriptionVariables = {
  filter?: ModelSubscriptionVitalSignFilterInput | null,
  owner?: string | null,
};

export type OnDeleteVitalSignSubscription = {
  onDeleteVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    pulse: number,
    respirationRate: number,
    bloodPressure: string,
    temperature?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateMedicalEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalEncounterFilterInput | null,
  owner?: string | null,
};

export type OnCreateMedicalEncounterSubscription = {
  onCreateMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    date: string,
    practitionerSeen: Array< Practitioner | null >,
    complaints?: string | null,
    diagnosis: string,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    patientID: string,
    VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Prescriptions?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        physicianName: string,
        medication: string,
        dosag: string,
        frequency: string,
        filledBy?: string | null,
        dateFilled: string,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        prescriptionServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LabOrders?:  {
      __typename: "ModelLabOrderConnection",
      items:  Array< {
        __typename: "LabOrder",
        id: string,
        physicianName?: string | null,
        testType?: string | null,
        testDate?: string | null,
        technician?: string | null,
        testResult?: string | null,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        labOrderServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterVitalSignId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateMedicalEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalEncounterFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMedicalEncounterSubscription = {
  onUpdateMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    date: string,
    practitionerSeen: Array< Practitioner | null >,
    complaints?: string | null,
    diagnosis: string,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    patientID: string,
    VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Prescriptions?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        physicianName: string,
        medication: string,
        dosag: string,
        frequency: string,
        filledBy?: string | null,
        dateFilled: string,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        prescriptionServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LabOrders?:  {
      __typename: "ModelLabOrderConnection",
      items:  Array< {
        __typename: "LabOrder",
        id: string,
        physicianName?: string | null,
        testType?: string | null,
        testDate?: string | null,
        technician?: string | null,
        testResult?: string | null,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        labOrderServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterVitalSignId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteMedicalEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalEncounterFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMedicalEncounterSubscription = {
  onDeleteMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    date: string,
    practitionerSeen: Array< Practitioner | null >,
    complaints?: string | null,
    diagnosis: string,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    patientID: string,
    VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      pulse: number,
      respirationRate: number,
      bloodPressure: string,
      temperature?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Prescriptions?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        physicianName: string,
        medication: string,
        dosag: string,
        frequency: string,
        filledBy?: string | null,
        dateFilled: string,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        prescriptionServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LabOrders?:  {
      __typename: "ModelLabOrderConnection",
      items:  Array< {
        __typename: "LabOrder",
        id: string,
        physicianName?: string | null,
        testType?: string | null,
        testDate?: string | null,
        technician?: string | null,
        testResult?: string | null,
        medicalencounterID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        labOrderServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterVitalSignId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnCreateMedicationSubscription = {
  onCreateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    usage?: string | null,
    dosage?: string | null,
    frequency?: string | null,
    sideEffects?: string | null,
    interactions?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnUpdateMedicationSubscription = {
  onUpdateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    usage?: string | null,
    dosage?: string | null,
    frequency?: string | null,
    sideEffects?: string | null,
    interactions?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnDeleteMedicationSubscription = {
  onDeleteMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    usage?: string | null,
    dosage?: string | null,
    frequency?: string | null,
    sideEffects?: string | null,
    interactions?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateInsuranceCarrierSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceCarrierFilterInput | null,
  owner?: string | null,
};

export type OnCreateInsuranceCarrierSubscription = {
  onCreateInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name: string,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateInsuranceCarrierSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceCarrierFilterInput | null,
  owner?: string | null,
};

export type OnUpdateInsuranceCarrierSubscription = {
  onUpdateInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name: string,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteInsuranceCarrierSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceCarrierFilterInput | null,
  owner?: string | null,
};

export type OnDeleteInsuranceCarrierSubscription = {
  onDeleteInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name: string,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
  owner?: string | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    address?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Medications?:  {
      __typename: "ModelMedicationConnection",
      items:  Array< {
        __typename: "Medication",
        id: string,
        name?: string | null,
        usage?: string | null,
        dosage?: string | null,
        frequency?: string | null,
        sideEffects?: string | null,
        interactions?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      items:  Array< {
        __typename: "MedicalEncounter",
        id: string,
        date: string,
        practitionerSeen: Array< Practitioner | null >,
        complaints?: string | null,
        diagnosis: string,
        treatmentPlan?: string | null,
        referralToSpecialists?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        medicalEncounterVitalSignId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    cell?: string | null,
    Payments?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    paymentStatus?: InsuranceCarrierStatus | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientInsuranceCarrierId?: string | null,
    patientPhysicianId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    address?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Medications?:  {
      __typename: "ModelMedicationConnection",
      items:  Array< {
        __typename: "Medication",
        id: string,
        name?: string | null,
        usage?: string | null,
        dosage?: string | null,
        frequency?: string | null,
        sideEffects?: string | null,
        interactions?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      items:  Array< {
        __typename: "MedicalEncounter",
        id: string,
        date: string,
        practitionerSeen: Array< Practitioner | null >,
        complaints?: string | null,
        diagnosis: string,
        treatmentPlan?: string | null,
        referralToSpecialists?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        medicalEncounterVitalSignId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    cell?: string | null,
    Payments?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    paymentStatus?: InsuranceCarrierStatus | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientInsuranceCarrierId?: string | null,
    patientPhysicianId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
  owner?: string | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    address?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name: string,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Medications?:  {
      __typename: "ModelMedicationConnection",
      items:  Array< {
        __typename: "Medication",
        id: string,
        name?: string | null,
        usage?: string | null,
        dosage?: string | null,
        frequency?: string | null,
        sideEffects?: string | null,
        interactions?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      items:  Array< {
        __typename: "MedicalEncounter",
        id: string,
        date: string,
        practitionerSeen: Array< Practitioner | null >,
        complaints?: string | null,
        diagnosis: string,
        treatmentPlan?: string | null,
        referralToSpecialists?: string | null,
        patientID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        medicalEncounterVitalSignId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        time?: string | null,
        type?: string | null,
        patientID: string,
        physicianID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        appointmentServiceProvidedByClinicId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      WorkSchedules?:  {
        __typename: "ModelWorkScheduleConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    cell?: string | null,
    Payments?:  {
      __typename: "ModelPatientPaymentsConnection",
      items:  Array< {
        __typename: "PatientPayments",
        id: string,
        paymentsId: string,
        patientId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    paymentStatus?: InsuranceCarrierStatus | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientInsuranceCarrierId?: string | null,
    patientPhysicianId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePatientPaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPatientPaymentsFilterInput | null,
  owner?: string | null,
};

export type OnCreatePatientPaymentsSubscription = {
  onCreatePatientPayments?:  {
    __typename: "PatientPayments",
    id: string,
    paymentsId: string,
    patientId: string,
    payments:  {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    patient:  {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdatePatientPaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPatientPaymentsFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePatientPaymentsSubscription = {
  onUpdatePatientPayments?:  {
    __typename: "PatientPayments",
    id: string,
    paymentsId: string,
    patientId: string,
    payments:  {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    patient:  {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeletePatientPaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPatientPaymentsFilterInput | null,
  owner?: string | null,
};

export type OnDeletePatientPaymentsSubscription = {
  onDeletePatientPayments?:  {
    __typename: "PatientPayments",
    id: string,
    paymentsId: string,
    patientId: string,
    payments:  {
      __typename: "Payments",
      id: string,
      amount: number,
      dayIssued: string,
      dayFulfilled?: string | null,
      isPaid: boolean,
      patients?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    patient:  {
      __typename: "Patient",
      id: string,
      name?: string | null,
      address?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      InsuranceCarrier?:  {
        __typename: "InsuranceCarrier",
        id: string,
        name: string,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Medications?:  {
        __typename: "ModelMedicationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      MedicalEncounters?:  {
        __typename: "ModelMedicalEncounterConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Physician?:  {
        __typename: "Physician",
        id: string,
        name?: string | null,
        cellPhoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      cell?: string | null,
      Payments?:  {
        __typename: "ModelPatientPaymentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      paymentStatus?: InsuranceCarrierStatus | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientInsuranceCarrierId?: string | null,
      patientPhysicianId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
