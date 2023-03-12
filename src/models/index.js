// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Practitioner = {
  "NURSE": "NURSE",
  "DOCTOR": "DOCTOR",
  "PHYSICIAN": "PHYSICIAN",
  "PHYSICIAN_ASSISTANT": "PHYSICIAN_ASSISTANT",
  "PEDIATRIST": "PEDIATRIST",
  "ANESTHESIOLOGIST": "ANESTHESIOLOGIST",
  "RADIOLOGIST": "RADIOLOGIST",
  "PSYCHOLOGIST": "PSYCHOLOGIST",
  "NEUROLOGIST": "NEUROLOGIST",
  "PSYCHIATRIST": "PSYCHIATRIST"
};

const InsuranceCarrierStatus = {
  "PAYS_ON_TIME": "PAYS_ON_TIME",
  "LATE_WITH_PAYMENTS": "LATE_WITH_PAYMENTS",
  "DIFFICULT_TO_GET_PAYMENTS": "DIFFICULT_TO_GET_PAYMENTS"
};

const { Vendor, EquipmentMaintenance, EquipmentOwned, EquipmentLeased, Equipment, LabTest, ServiceProvidedByClinic, WorkSchedule, Physician, Appointment, LabOrder, Prescription, VitalSign, MedicalEncounter, Medication, InsuranceCarrier, Patient, Day, Week } = initSchema(schema);

export {
  Vendor,
  EquipmentMaintenance,
  EquipmentOwned,
  EquipmentLeased,
  Equipment,
  LabTest,
  ServiceProvidedByClinic,
  WorkSchedule,
  Physician,
  Appointment,
  LabOrder,
  Prescription,
  VitalSign,
  MedicalEncounter,
  Medication,
  InsuranceCarrier,
  Patient,
  Practitioner,
  InsuranceCarrierStatus,
  Day,
  Week
};