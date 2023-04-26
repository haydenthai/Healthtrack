/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPayments = /* GraphQL */ `
  mutation CreatePayments(
    $input: CreatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    createPayments(input: $input, condition: $condition) {
      id
      amount
      dayIssued
      dayFulfilled
      isPaid
      patients {
        items {
          id
          paymentsId
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePayments = /* GraphQL */ `
  mutation UpdatePayments(
    $input: UpdatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    updatePayments(input: $input, condition: $condition) {
      id
      amount
      dayIssued
      dayFulfilled
      isPaid
      patients {
        items {
          id
          paymentsId
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePayments = /* GraphQL */ `
  mutation DeletePayments(
    $input: DeletePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    deletePayments(input: $input, condition: $condition) {
      id
      amount
      dayIssued
      dayFulfilled
      isPaid
      patients {
        items {
          id
          paymentsId
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
      id
      name
      address
      preferred
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
      id
      name
      address
      preferred
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
      id
      name
      address
      preferred
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createEquipmentMaintenance = /* GraphQL */ `
  mutation CreateEquipmentMaintenance(
    $input: CreateEquipmentMaintenanceInput!
    $condition: ModelEquipmentMaintenanceConditionInput
  ) {
    createEquipmentMaintenance(input: $input, condition: $condition) {
      id
      type
      description
      status
      resolution
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateEquipmentMaintenance = /* GraphQL */ `
  mutation UpdateEquipmentMaintenance(
    $input: UpdateEquipmentMaintenanceInput!
    $condition: ModelEquipmentMaintenanceConditionInput
  ) {
    updateEquipmentMaintenance(input: $input, condition: $condition) {
      id
      type
      description
      status
      resolution
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteEquipmentMaintenance = /* GraphQL */ `
  mutation DeleteEquipmentMaintenance(
    $input: DeleteEquipmentMaintenanceInput!
    $condition: ModelEquipmentMaintenanceConditionInput
  ) {
    deleteEquipmentMaintenance(input: $input, condition: $condition) {
      id
      type
      description
      status
      resolution
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createEquipmentOwned = /* GraphQL */ `
  mutation CreateEquipmentOwned(
    $input: CreateEquipmentOwnedInput!
    $condition: ModelEquipmentOwnedConditionInput
  ) {
    createEquipmentOwned(input: $input, condition: $condition) {
      id
      datePurchased
      warranty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateEquipmentOwned = /* GraphQL */ `
  mutation UpdateEquipmentOwned(
    $input: UpdateEquipmentOwnedInput!
    $condition: ModelEquipmentOwnedConditionInput
  ) {
    updateEquipmentOwned(input: $input, condition: $condition) {
      id
      datePurchased
      warranty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteEquipmentOwned = /* GraphQL */ `
  mutation DeleteEquipmentOwned(
    $input: DeleteEquipmentOwnedInput!
    $condition: ModelEquipmentOwnedConditionInput
  ) {
    deleteEquipmentOwned(input: $input, condition: $condition) {
      id
      datePurchased
      warranty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createEquipmentLeased = /* GraphQL */ `
  mutation CreateEquipmentLeased(
    $input: CreateEquipmentLeasedInput!
    $condition: ModelEquipmentLeasedConditionInput
  ) {
    createEquipmentLeased(input: $input, condition: $condition) {
      id
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateEquipmentLeased = /* GraphQL */ `
  mutation UpdateEquipmentLeased(
    $input: UpdateEquipmentLeasedInput!
    $condition: ModelEquipmentLeasedConditionInput
  ) {
    updateEquipmentLeased(input: $input, condition: $condition) {
      id
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteEquipmentLeased = /* GraphQL */ `
  mutation DeleteEquipmentLeased(
    $input: DeleteEquipmentLeasedInput!
    $condition: ModelEquipmentLeasedConditionInput
  ) {
    deleteEquipmentLeased(input: $input, condition: $condition) {
      id
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
      id
      type
      description
      department
      owned
      leased
      Vendors {
        items {
          id
          name
          address
          preferred
          equipmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      EquipmentMaintenances {
        items {
          id
          type
          description
          status
          resolution
          equipmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      EquipmentOwned {
        id
        datePurchased
        warranty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      EquipmentLeased {
        id
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentOwnedId
      equipmentEquipmentLeasedId
      owner
    }
  }
`;
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
      id
      type
      description
      department
      owned
      leased
      Vendors {
        items {
          id
          name
          address
          preferred
          equipmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      EquipmentMaintenances {
        items {
          id
          type
          description
          status
          resolution
          equipmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      EquipmentOwned {
        id
        datePurchased
        warranty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      EquipmentLeased {
        id
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentOwnedId
      equipmentEquipmentLeasedId
      owner
    }
  }
`;
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
      id
      type
      description
      department
      owned
      leased
      Vendors {
        items {
          id
          name
          address
          preferred
          equipmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      EquipmentMaintenances {
        items {
          id
          type
          description
          status
          resolution
          equipmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      EquipmentOwned {
        id
        datePurchased
        warranty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      EquipmentLeased {
        id
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentOwnedId
      equipmentEquipmentLeasedId
      owner
    }
  }
`;
export const createLabTest = /* GraphQL */ `
  mutation CreateLabTest(
    $input: CreateLabTestInput!
    $condition: ModelLabTestConditionInput
  ) {
    createLabTest(input: $input, condition: $condition) {
      id
      testTypeName
      normalRange
      abnormalRange
      description
      laborderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateLabTest = /* GraphQL */ `
  mutation UpdateLabTest(
    $input: UpdateLabTestInput!
    $condition: ModelLabTestConditionInput
  ) {
    updateLabTest(input: $input, condition: $condition) {
      id
      testTypeName
      normalRange
      abnormalRange
      description
      laborderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteLabTest = /* GraphQL */ `
  mutation DeleteLabTest(
    $input: DeleteLabTestInput!
    $condition: ModelLabTestConditionInput
  ) {
    deleteLabTest(input: $input, condition: $condition) {
      id
      testTypeName
      normalRange
      abnormalRange
      description
      laborderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createServiceProvidedByClinic = /* GraphQL */ `
  mutation CreateServiceProvidedByClinic(
    $input: CreateServiceProvidedByClinicInput!
    $condition: ModelServiceProvidedByClinicConditionInput
  ) {
    createServiceProvidedByClinic(input: $input, condition: $condition) {
      id
      type
      description
      cost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateServiceProvidedByClinic = /* GraphQL */ `
  mutation UpdateServiceProvidedByClinic(
    $input: UpdateServiceProvidedByClinicInput!
    $condition: ModelServiceProvidedByClinicConditionInput
  ) {
    updateServiceProvidedByClinic(input: $input, condition: $condition) {
      id
      type
      description
      cost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteServiceProvidedByClinic = /* GraphQL */ `
  mutation DeleteServiceProvidedByClinic(
    $input: DeleteServiceProvidedByClinicInput!
    $condition: ModelServiceProvidedByClinicConditionInput
  ) {
    deleteServiceProvidedByClinic(input: $input, condition: $condition) {
      id
      type
      description
      cost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createWorkSchedule = /* GraphQL */ `
  mutation CreateWorkSchedule(
    $input: CreateWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    createWorkSchedule(input: $input, condition: $condition) {
      id
      twoMonthCalendar {
        weekDays {
          id
          isReserved
          periods
          number
        }
      }
      physicianID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateWorkSchedule = /* GraphQL */ `
  mutation UpdateWorkSchedule(
    $input: UpdateWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    updateWorkSchedule(input: $input, condition: $condition) {
      id
      twoMonthCalendar {
        weekDays {
          id
          isReserved
          periods
          number
        }
      }
      physicianID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteWorkSchedule = /* GraphQL */ `
  mutation DeleteWorkSchedule(
    $input: DeleteWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    deleteWorkSchedule(input: $input, condition: $condition) {
      id
      twoMonthCalendar {
        weekDays {
          id
          isReserved
          periods
          number
        }
      }
      physicianID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createPhysician = /* GraphQL */ `
  mutation CreatePhysician(
    $input: CreatePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    createPhysician(input: $input, condition: $condition) {
      id
      name
      cellPhoneNumber
      WorkSchedules {
        items {
          id
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Appointments {
        items {
          id
          time
          type
          patientID
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          appointmentServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePhysician = /* GraphQL */ `
  mutation UpdatePhysician(
    $input: UpdatePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    updatePhysician(input: $input, condition: $condition) {
      id
      name
      cellPhoneNumber
      WorkSchedules {
        items {
          id
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Appointments {
        items {
          id
          time
          type
          patientID
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          appointmentServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePhysician = /* GraphQL */ `
  mutation DeletePhysician(
    $input: DeletePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    deletePhysician(input: $input, condition: $condition) {
      id
      name
      cellPhoneNumber
      WorkSchedules {
        items {
          id
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Appointments {
        items {
          id
          time
          type
          patientID
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          appointmentServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
      id
      time
      type
      patientID
      physicianID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentServiceProvidedByClinicId
      owner
    }
  }
`;
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
      id
      time
      type
      patientID
      physicianID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentServiceProvidedByClinicId
      owner
    }
  }
`;
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
      id
      time
      type
      patientID
      physicianID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentServiceProvidedByClinicId
      owner
    }
  }
`;
export const createLabOrder = /* GraphQL */ `
  mutation CreateLabOrder(
    $input: CreateLabOrderInput!
    $condition: ModelLabOrderConditionInput
  ) {
    createLabOrder(input: $input, condition: $condition) {
      id
      physicianName
      testType
      testDate
      technician
      testResult
      medicalencounterID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      LabTests {
        items {
          id
          testTypeName
          normalRange
          abnormalRange
          description
          laborderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      labOrderServiceProvidedByClinicId
      owner
    }
  }
`;
export const updateLabOrder = /* GraphQL */ `
  mutation UpdateLabOrder(
    $input: UpdateLabOrderInput!
    $condition: ModelLabOrderConditionInput
  ) {
    updateLabOrder(input: $input, condition: $condition) {
      id
      physicianName
      testType
      testDate
      technician
      testResult
      medicalencounterID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      LabTests {
        items {
          id
          testTypeName
          normalRange
          abnormalRange
          description
          laborderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      labOrderServiceProvidedByClinicId
      owner
    }
  }
`;
export const deleteLabOrder = /* GraphQL */ `
  mutation DeleteLabOrder(
    $input: DeleteLabOrderInput!
    $condition: ModelLabOrderConditionInput
  ) {
    deleteLabOrder(input: $input, condition: $condition) {
      id
      physicianName
      testType
      testDate
      technician
      testResult
      medicalencounterID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      LabTests {
        items {
          id
          testTypeName
          normalRange
          abnormalRange
          description
          laborderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      labOrderServiceProvidedByClinicId
      owner
    }
  }
`;
export const createPrescription = /* GraphQL */ `
  mutation CreatePrescription(
    $input: CreatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    createPrescription(input: $input, condition: $condition) {
      id
      physicianName
      medication
      dosag
      frequency
      filledBy
      dateFilled
      medicalencounterID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionServiceProvidedByClinicId
      owner
    }
  }
`;
export const updatePrescription = /* GraphQL */ `
  mutation UpdatePrescription(
    $input: UpdatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    updatePrescription(input: $input, condition: $condition) {
      id
      physicianName
      medication
      dosag
      frequency
      filledBy
      dateFilled
      medicalencounterID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionServiceProvidedByClinicId
      owner
    }
  }
`;
export const deletePrescription = /* GraphQL */ `
  mutation DeletePrescription(
    $input: DeletePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    deletePrescription(input: $input, condition: $condition) {
      id
      physicianName
      medication
      dosag
      frequency
      filledBy
      dateFilled
      medicalencounterID
      ServiceProvidedByClinic {
        id
        type
        description
        cost
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionServiceProvidedByClinicId
      owner
    }
  }
`;
export const createVitalSign = /* GraphQL */ `
  mutation CreateVitalSign(
    $input: CreateVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    createVitalSign(input: $input, condition: $condition) {
      id
      pulse
      respirationRate
      bloodPressure
      temperature
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateVitalSign = /* GraphQL */ `
  mutation UpdateVitalSign(
    $input: UpdateVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    updateVitalSign(input: $input, condition: $condition) {
      id
      pulse
      respirationRate
      bloodPressure
      temperature
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteVitalSign = /* GraphQL */ `
  mutation DeleteVitalSign(
    $input: DeleteVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    deleteVitalSign(input: $input, condition: $condition) {
      id
      pulse
      respirationRate
      bloodPressure
      temperature
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createMedicalEncounter = /* GraphQL */ `
  mutation CreateMedicalEncounter(
    $input: CreateMedicalEncounterInput!
    $condition: ModelMedicalEncounterConditionInput
  ) {
    createMedicalEncounter(input: $input, condition: $condition) {
      id
      date
      practitionerSeen
      complaints
      diagnosis
      treatmentPlan
      referralToSpecialists
      patientID
      VitalSign {
        id
        pulse
        respirationRate
        bloodPressure
        temperature
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Prescriptions {
        items {
          id
          physicianName
          medication
          dosag
          frequency
          filledBy
          dateFilled
          medicalencounterID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          prescriptionServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      LabOrders {
        items {
          id
          physicianName
          testType
          testDate
          technician
          testResult
          medicalencounterID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          labOrderServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      medicalEncounterVitalSignId
      owner
    }
  }
`;
export const updateMedicalEncounter = /* GraphQL */ `
  mutation UpdateMedicalEncounter(
    $input: UpdateMedicalEncounterInput!
    $condition: ModelMedicalEncounterConditionInput
  ) {
    updateMedicalEncounter(input: $input, condition: $condition) {
      id
      date
      practitionerSeen
      complaints
      diagnosis
      treatmentPlan
      referralToSpecialists
      patientID
      VitalSign {
        id
        pulse
        respirationRate
        bloodPressure
        temperature
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Prescriptions {
        items {
          id
          physicianName
          medication
          dosag
          frequency
          filledBy
          dateFilled
          medicalencounterID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          prescriptionServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      LabOrders {
        items {
          id
          physicianName
          testType
          testDate
          technician
          testResult
          medicalencounterID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          labOrderServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      medicalEncounterVitalSignId
      owner
    }
  }
`;
export const deleteMedicalEncounter = /* GraphQL */ `
  mutation DeleteMedicalEncounter(
    $input: DeleteMedicalEncounterInput!
    $condition: ModelMedicalEncounterConditionInput
  ) {
    deleteMedicalEncounter(input: $input, condition: $condition) {
      id
      date
      practitionerSeen
      complaints
      diagnosis
      treatmentPlan
      referralToSpecialists
      patientID
      VitalSign {
        id
        pulse
        respirationRate
        bloodPressure
        temperature
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Prescriptions {
        items {
          id
          physicianName
          medication
          dosag
          frequency
          filledBy
          dateFilled
          medicalencounterID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          prescriptionServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      LabOrders {
        items {
          id
          physicianName
          testType
          testDate
          technician
          testResult
          medicalencounterID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          labOrderServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      medicalEncounterVitalSignId
      owner
    }
  }
`;
export const createMedication = /* GraphQL */ `
  mutation CreateMedication(
    $input: CreateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    createMedication(input: $input, condition: $condition) {
      id
      name
      usage
      dosage
      frequency
      sideEffects
      interactions
      patientID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMedication = /* GraphQL */ `
  mutation UpdateMedication(
    $input: UpdateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    updateMedication(input: $input, condition: $condition) {
      id
      name
      usage
      dosage
      frequency
      sideEffects
      interactions
      patientID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMedication = /* GraphQL */ `
  mutation DeleteMedication(
    $input: DeleteMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    deleteMedication(input: $input, condition: $condition) {
      id
      name
      usage
      dosage
      frequency
      sideEffects
      interactions
      patientID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createInsuranceCarrier = /* GraphQL */ `
  mutation CreateInsuranceCarrier(
    $input: CreateInsuranceCarrierInput!
    $condition: ModelInsuranceCarrierConditionInput
  ) {
    createInsuranceCarrier(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateInsuranceCarrier = /* GraphQL */ `
  mutation UpdateInsuranceCarrier(
    $input: UpdateInsuranceCarrierInput!
    $condition: ModelInsuranceCarrierConditionInput
  ) {
    updateInsuranceCarrier(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteInsuranceCarrier = /* GraphQL */ `
  mutation DeleteInsuranceCarrier(
    $input: DeleteInsuranceCarrierInput!
    $condition: ModelInsuranceCarrierConditionInput
  ) {
    deleteInsuranceCarrier(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      name
      address
      dateOfBirth
      gender
      InsuranceCarrier {
        id
        name
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Medications {
        items {
          id
          name
          usage
          dosage
          frequency
          sideEffects
          interactions
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      MedicalEncounters {
        items {
          id
          date
          practitionerSeen
          complaints
          diagnosis
          treatmentPlan
          referralToSpecialists
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          medicalEncounterVitalSignId
          owner
        }
        nextToken
        startedAt
      }
      Appointments {
        items {
          id
          time
          type
          patientID
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          appointmentServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      Physician {
        id
        name
        cellPhoneNumber
        WorkSchedules {
          nextToken
          startedAt
        }
        Appointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      cell
      Payments {
        items {
          id
          paymentsId
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      paymentStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientInsuranceCarrierId
      patientPhysicianId
      owner
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      name
      address
      dateOfBirth
      gender
      InsuranceCarrier {
        id
        name
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Medications {
        items {
          id
          name
          usage
          dosage
          frequency
          sideEffects
          interactions
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      MedicalEncounters {
        items {
          id
          date
          practitionerSeen
          complaints
          diagnosis
          treatmentPlan
          referralToSpecialists
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          medicalEncounterVitalSignId
          owner
        }
        nextToken
        startedAt
      }
      Appointments {
        items {
          id
          time
          type
          patientID
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          appointmentServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      Physician {
        id
        name
        cellPhoneNumber
        WorkSchedules {
          nextToken
          startedAt
        }
        Appointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      cell
      Payments {
        items {
          id
          paymentsId
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      paymentStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientInsuranceCarrierId
      patientPhysicianId
      owner
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      name
      address
      dateOfBirth
      gender
      InsuranceCarrier {
        id
        name
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Medications {
        items {
          id
          name
          usage
          dosage
          frequency
          sideEffects
          interactions
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      MedicalEncounters {
        items {
          id
          date
          practitionerSeen
          complaints
          diagnosis
          treatmentPlan
          referralToSpecialists
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          medicalEncounterVitalSignId
          owner
        }
        nextToken
        startedAt
      }
      Appointments {
        items {
          id
          time
          type
          patientID
          physicianID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          appointmentServiceProvidedByClinicId
          owner
        }
        nextToken
        startedAt
      }
      Physician {
        id
        name
        cellPhoneNumber
        WorkSchedules {
          nextToken
          startedAt
        }
        Appointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      cell
      Payments {
        items {
          id
          paymentsId
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      paymentStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientInsuranceCarrierId
      patientPhysicianId
      owner
    }
  }
`;
export const createPatientPayments = /* GraphQL */ `
  mutation CreatePatientPayments(
    $input: CreatePatientPaymentsInput!
    $condition: ModelPatientPaymentsConditionInput
  ) {
    createPatientPayments(input: $input, condition: $condition) {
      id
      paymentsId
      patientId
      payments {
        id
        amount
        dayIssued
        dayFulfilled
        isPaid
        patients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      patient {
        id
        name
        address
        dateOfBirth
        gender
        InsuranceCarrier {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Medications {
          nextToken
          startedAt
        }
        MedicalEncounters {
          nextToken
          startedAt
        }
        Appointments {
          nextToken
          startedAt
        }
        Physician {
          id
          name
          cellPhoneNumber
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        cell
        Payments {
          nextToken
          startedAt
        }
        paymentStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientInsuranceCarrierId
        patientPhysicianId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePatientPayments = /* GraphQL */ `
  mutation UpdatePatientPayments(
    $input: UpdatePatientPaymentsInput!
    $condition: ModelPatientPaymentsConditionInput
  ) {
    updatePatientPayments(input: $input, condition: $condition) {
      id
      paymentsId
      patientId
      payments {
        id
        amount
        dayIssued
        dayFulfilled
        isPaid
        patients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      patient {
        id
        name
        address
        dateOfBirth
        gender
        InsuranceCarrier {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Medications {
          nextToken
          startedAt
        }
        MedicalEncounters {
          nextToken
          startedAt
        }
        Appointments {
          nextToken
          startedAt
        }
        Physician {
          id
          name
          cellPhoneNumber
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        cell
        Payments {
          nextToken
          startedAt
        }
        paymentStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientInsuranceCarrierId
        patientPhysicianId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePatientPayments = /* GraphQL */ `
  mutation DeletePatientPayments(
    $input: DeletePatientPaymentsInput!
    $condition: ModelPatientPaymentsConditionInput
  ) {
    deletePatientPayments(input: $input, condition: $condition) {
      id
      paymentsId
      patientId
      payments {
        id
        amount
        dayIssued
        dayFulfilled
        isPaid
        patients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      patient {
        id
        name
        address
        dateOfBirth
        gender
        InsuranceCarrier {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Medications {
          nextToken
          startedAt
        }
        MedicalEncounters {
          nextToken
          startedAt
        }
        Appointments {
          nextToken
          startedAt
        }
        Physician {
          id
          name
          cellPhoneNumber
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        cell
        Payments {
          nextToken
          startedAt
        }
        paymentStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientInsuranceCarrierId
        patientPhysicianId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
