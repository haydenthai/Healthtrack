/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePayments = /* GraphQL */ `
  subscription OnCreatePayments(
    $filter: ModelSubscriptionPaymentsFilterInput
    $owner: String
  ) {
    onCreatePayments(filter: $filter, owner: $owner) {
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
export const onUpdatePayments = /* GraphQL */ `
  subscription OnUpdatePayments(
    $filter: ModelSubscriptionPaymentsFilterInput
    $owner: String
  ) {
    onUpdatePayments(filter: $filter, owner: $owner) {
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
export const onDeletePayments = /* GraphQL */ `
  subscription OnDeletePayments(
    $filter: ModelSubscriptionPaymentsFilterInput
    $owner: String
  ) {
    onDeletePayments(filter: $filter, owner: $owner) {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor(
    $filter: ModelSubscriptionVendorFilterInput
    $owner: String
  ) {
    onCreateVendor(filter: $filter, owner: $owner) {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor(
    $filter: ModelSubscriptionVendorFilterInput
    $owner: String
  ) {
    onUpdateVendor(filter: $filter, owner: $owner) {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor(
    $filter: ModelSubscriptionVendorFilterInput
    $owner: String
  ) {
    onDeleteVendor(filter: $filter, owner: $owner) {
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
export const onCreateEquipmentMaintenance = /* GraphQL */ `
  subscription OnCreateEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
    $owner: String
  ) {
    onCreateEquipmentMaintenance(filter: $filter, owner: $owner) {
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
export const onUpdateEquipmentMaintenance = /* GraphQL */ `
  subscription OnUpdateEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
    $owner: String
  ) {
    onUpdateEquipmentMaintenance(filter: $filter, owner: $owner) {
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
export const onDeleteEquipmentMaintenance = /* GraphQL */ `
  subscription OnDeleteEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
    $owner: String
  ) {
    onDeleteEquipmentMaintenance(filter: $filter, owner: $owner) {
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
export const onCreateEquipmentOwned = /* GraphQL */ `
  subscription OnCreateEquipmentOwned(
    $filter: ModelSubscriptionEquipmentOwnedFilterInput
    $owner: String
  ) {
    onCreateEquipmentOwned(filter: $filter, owner: $owner) {
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
export const onUpdateEquipmentOwned = /* GraphQL */ `
  subscription OnUpdateEquipmentOwned(
    $filter: ModelSubscriptionEquipmentOwnedFilterInput
    $owner: String
  ) {
    onUpdateEquipmentOwned(filter: $filter, owner: $owner) {
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
export const onDeleteEquipmentOwned = /* GraphQL */ `
  subscription OnDeleteEquipmentOwned(
    $filter: ModelSubscriptionEquipmentOwnedFilterInput
    $owner: String
  ) {
    onDeleteEquipmentOwned(filter: $filter, owner: $owner) {
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
export const onCreateEquipmentLeased = /* GraphQL */ `
  subscription OnCreateEquipmentLeased(
    $filter: ModelSubscriptionEquipmentLeasedFilterInput
    $owner: String
  ) {
    onCreateEquipmentLeased(filter: $filter, owner: $owner) {
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
export const onUpdateEquipmentLeased = /* GraphQL */ `
  subscription OnUpdateEquipmentLeased(
    $filter: ModelSubscriptionEquipmentLeasedFilterInput
    $owner: String
  ) {
    onUpdateEquipmentLeased(filter: $filter, owner: $owner) {
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
export const onDeleteEquipmentLeased = /* GraphQL */ `
  subscription OnDeleteEquipmentLeased(
    $filter: ModelSubscriptionEquipmentLeasedFilterInput
    $owner: String
  ) {
    onDeleteEquipmentLeased(filter: $filter, owner: $owner) {
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
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
    $owner: String
  ) {
    onCreateEquipment(filter: $filter, owner: $owner) {
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
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
    $owner: String
  ) {
    onUpdateEquipment(filter: $filter, owner: $owner) {
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
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
    $owner: String
  ) {
    onDeleteEquipment(filter: $filter, owner: $owner) {
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
export const onCreateLabTest = /* GraphQL */ `
  subscription OnCreateLabTest(
    $filter: ModelSubscriptionLabTestFilterInput
    $owner: String
  ) {
    onCreateLabTest(filter: $filter, owner: $owner) {
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
export const onUpdateLabTest = /* GraphQL */ `
  subscription OnUpdateLabTest(
    $filter: ModelSubscriptionLabTestFilterInput
    $owner: String
  ) {
    onUpdateLabTest(filter: $filter, owner: $owner) {
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
export const onDeleteLabTest = /* GraphQL */ `
  subscription OnDeleteLabTest(
    $filter: ModelSubscriptionLabTestFilterInput
    $owner: String
  ) {
    onDeleteLabTest(filter: $filter, owner: $owner) {
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
export const onCreateServiceProvidedByClinic = /* GraphQL */ `
  subscription OnCreateServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
    $owner: String
  ) {
    onCreateServiceProvidedByClinic(filter: $filter, owner: $owner) {
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
export const onUpdateServiceProvidedByClinic = /* GraphQL */ `
  subscription OnUpdateServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
    $owner: String
  ) {
    onUpdateServiceProvidedByClinic(filter: $filter, owner: $owner) {
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
export const onDeleteServiceProvidedByClinic = /* GraphQL */ `
  subscription OnDeleteServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
    $owner: String
  ) {
    onDeleteServiceProvidedByClinic(filter: $filter, owner: $owner) {
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
export const onCreateWorkSchedule = /* GraphQL */ `
  subscription OnCreateWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
    $owner: String
  ) {
    onCreateWorkSchedule(filter: $filter, owner: $owner) {
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
export const onUpdateWorkSchedule = /* GraphQL */ `
  subscription OnUpdateWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
    $owner: String
  ) {
    onUpdateWorkSchedule(filter: $filter, owner: $owner) {
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
export const onDeleteWorkSchedule = /* GraphQL */ `
  subscription OnDeleteWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
    $owner: String
  ) {
    onDeleteWorkSchedule(filter: $filter, owner: $owner) {
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
export const onCreatePhysician = /* GraphQL */ `
  subscription OnCreatePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
    $owner: String
  ) {
    onCreatePhysician(filter: $filter, owner: $owner) {
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
export const onUpdatePhysician = /* GraphQL */ `
  subscription OnUpdatePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
    $owner: String
  ) {
    onUpdatePhysician(filter: $filter, owner: $owner) {
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
export const onDeletePhysician = /* GraphQL */ `
  subscription OnDeletePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
    $owner: String
  ) {
    onDeletePhysician(filter: $filter, owner: $owner) {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
    $owner: String
  ) {
    onCreateAppointment(filter: $filter, owner: $owner) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
    $owner: String
  ) {
    onUpdateAppointment(filter: $filter, owner: $owner) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
    $owner: String
  ) {
    onDeleteAppointment(filter: $filter, owner: $owner) {
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
export const onCreateLabOrder = /* GraphQL */ `
  subscription OnCreateLabOrder(
    $filter: ModelSubscriptionLabOrderFilterInput
    $owner: String
  ) {
    onCreateLabOrder(filter: $filter, owner: $owner) {
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
export const onUpdateLabOrder = /* GraphQL */ `
  subscription OnUpdateLabOrder(
    $filter: ModelSubscriptionLabOrderFilterInput
    $owner: String
  ) {
    onUpdateLabOrder(filter: $filter, owner: $owner) {
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
export const onDeleteLabOrder = /* GraphQL */ `
  subscription OnDeleteLabOrder(
    $filter: ModelSubscriptionLabOrderFilterInput
    $owner: String
  ) {
    onDeleteLabOrder(filter: $filter, owner: $owner) {
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
export const onCreatePrescription = /* GraphQL */ `
  subscription OnCreatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
    $owner: String
  ) {
    onCreatePrescription(filter: $filter, owner: $owner) {
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
export const onUpdatePrescription = /* GraphQL */ `
  subscription OnUpdatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
    $owner: String
  ) {
    onUpdatePrescription(filter: $filter, owner: $owner) {
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
export const onDeletePrescription = /* GraphQL */ `
  subscription OnDeletePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
    $owner: String
  ) {
    onDeletePrescription(filter: $filter, owner: $owner) {
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
export const onCreateVitalSign = /* GraphQL */ `
  subscription OnCreateVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
    $owner: String
  ) {
    onCreateVitalSign(filter: $filter, owner: $owner) {
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
export const onUpdateVitalSign = /* GraphQL */ `
  subscription OnUpdateVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
    $owner: String
  ) {
    onUpdateVitalSign(filter: $filter, owner: $owner) {
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
export const onDeleteVitalSign = /* GraphQL */ `
  subscription OnDeleteVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
    $owner: String
  ) {
    onDeleteVitalSign(filter: $filter, owner: $owner) {
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
export const onCreateMedicalEncounter = /* GraphQL */ `
  subscription OnCreateMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
    $owner: String
  ) {
    onCreateMedicalEncounter(filter: $filter, owner: $owner) {
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
export const onUpdateMedicalEncounter = /* GraphQL */ `
  subscription OnUpdateMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
    $owner: String
  ) {
    onUpdateMedicalEncounter(filter: $filter, owner: $owner) {
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
export const onDeleteMedicalEncounter = /* GraphQL */ `
  subscription OnDeleteMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
    $owner: String
  ) {
    onDeleteMedicalEncounter(filter: $filter, owner: $owner) {
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
export const onCreateMedication = /* GraphQL */ `
  subscription OnCreateMedication(
    $filter: ModelSubscriptionMedicationFilterInput
  ) {
    onCreateMedication(filter: $filter) {
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
export const onUpdateMedication = /* GraphQL */ `
  subscription OnUpdateMedication(
    $filter: ModelSubscriptionMedicationFilterInput
  ) {
    onUpdateMedication(filter: $filter) {
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
export const onDeleteMedication = /* GraphQL */ `
  subscription OnDeleteMedication(
    $filter: ModelSubscriptionMedicationFilterInput
  ) {
    onDeleteMedication(filter: $filter) {
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
export const onCreateInsuranceCarrier = /* GraphQL */ `
  subscription OnCreateInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
    $owner: String
  ) {
    onCreateInsuranceCarrier(filter: $filter, owner: $owner) {
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
export const onUpdateInsuranceCarrier = /* GraphQL */ `
  subscription OnUpdateInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
    $owner: String
  ) {
    onUpdateInsuranceCarrier(filter: $filter, owner: $owner) {
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
export const onDeleteInsuranceCarrier = /* GraphQL */ `
  subscription OnDeleteInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
    $owner: String
  ) {
    onDeleteInsuranceCarrier(filter: $filter, owner: $owner) {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient(
    $filter: ModelSubscriptionPatientFilterInput
    $owner: String
  ) {
    onCreatePatient(filter: $filter, owner: $owner) {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient(
    $filter: ModelSubscriptionPatientFilterInput
    $owner: String
  ) {
    onUpdatePatient(filter: $filter, owner: $owner) {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient(
    $filter: ModelSubscriptionPatientFilterInput
    $owner: String
  ) {
    onDeletePatient(filter: $filter, owner: $owner) {
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
export const onCreatePatientPayments = /* GraphQL */ `
  subscription OnCreatePatientPayments(
    $filter: ModelSubscriptionPatientPaymentsFilterInput
    $owner: String
  ) {
    onCreatePatientPayments(filter: $filter, owner: $owner) {
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
export const onUpdatePatientPayments = /* GraphQL */ `
  subscription OnUpdatePatientPayments(
    $filter: ModelSubscriptionPatientPaymentsFilterInput
    $owner: String
  ) {
    onUpdatePatientPayments(filter: $filter, owner: $owner) {
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
export const onDeletePatientPayments = /* GraphQL */ `
  subscription OnDeletePatientPayments(
    $filter: ModelSubscriptionPatientPaymentsFilterInput
    $owner: String
  ) {
    onDeletePatientPayments(filter: $filter, owner: $owner) {
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
