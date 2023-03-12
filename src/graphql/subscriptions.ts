/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient(
    $filter: ModelSubscriptionPatientFilterInput
    $owner: String
  ) {
    onCreatePatient(filter: $filter, owner: $owner) {
      id
      user
      address
      dateOfBirth
      gender
      InsuranceCarrier {
        id
        name
        address
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          recommendedFollowUp
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          medicalEncounterVitalSignId
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
      }
      cell
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
      user
      address
      dateOfBirth
      gender
      InsuranceCarrier {
        id
        name
        address
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          recommendedFollowUp
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          medicalEncounterVitalSignId
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
      }
      cell
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
      user
      address
      dateOfBirth
      gender
      InsuranceCarrier {
        id
        name
        address
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          recommendedFollowUp
          patientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          medicalEncounterVitalSignId
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
      }
      cell
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor($filter: ModelSubscriptionVendorFilterInput) {
    onCreateVendor(filter: $filter) {
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
    }
  }
`;
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor($filter: ModelSubscriptionVendorFilterInput) {
    onUpdateVendor(filter: $filter) {
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
    }
  }
`;
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor($filter: ModelSubscriptionVendorFilterInput) {
    onDeleteVendor(filter: $filter) {
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
    }
  }
`;
export const onCreateEquipmentMaintenance = /* GraphQL */ `
  subscription OnCreateEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
  ) {
    onCreateEquipmentMaintenance(filter: $filter) {
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
    }
  }
`;
export const onUpdateEquipmentMaintenance = /* GraphQL */ `
  subscription OnUpdateEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
  ) {
    onUpdateEquipmentMaintenance(filter: $filter) {
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
    }
  }
`;
export const onDeleteEquipmentMaintenance = /* GraphQL */ `
  subscription OnDeleteEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
  ) {
    onDeleteEquipmentMaintenance(filter: $filter) {
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
    }
  }
`;
export const onCreateEquipmentOwned = /* GraphQL */ `
  subscription OnCreateEquipmentOwned(
    $filter: ModelSubscriptionEquipmentOwnedFilterInput
  ) {
    onCreateEquipmentOwned(filter: $filter) {
      id
      datePurchased
      warranty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEquipmentOwned = /* GraphQL */ `
  subscription OnUpdateEquipmentOwned(
    $filter: ModelSubscriptionEquipmentOwnedFilterInput
  ) {
    onUpdateEquipmentOwned(filter: $filter) {
      id
      datePurchased
      warranty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEquipmentOwned = /* GraphQL */ `
  subscription OnDeleteEquipmentOwned(
    $filter: ModelSubscriptionEquipmentOwnedFilterInput
  ) {
    onDeleteEquipmentOwned(filter: $filter) {
      id
      datePurchased
      warranty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEquipmentLeased = /* GraphQL */ `
  subscription OnCreateEquipmentLeased(
    $filter: ModelSubscriptionEquipmentLeasedFilterInput
  ) {
    onCreateEquipmentLeased(filter: $filter) {
      id
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEquipmentLeased = /* GraphQL */ `
  subscription OnUpdateEquipmentLeased(
    $filter: ModelSubscriptionEquipmentLeasedFilterInput
  ) {
    onUpdateEquipmentLeased(filter: $filter) {
      id
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEquipmentLeased = /* GraphQL */ `
  subscription OnDeleteEquipmentLeased(
    $filter: ModelSubscriptionEquipmentLeasedFilterInput
  ) {
    onDeleteEquipmentLeased(filter: $filter) {
      id
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onCreateEquipment(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentOwnedId
      equipmentEquipmentLeasedId
    }
  }
`;
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onUpdateEquipment(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentOwnedId
      equipmentEquipmentLeasedId
    }
  }
`;
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onDeleteEquipment(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentOwnedId
      equipmentEquipmentLeasedId
    }
  }
`;
export const onCreateLabTest = /* GraphQL */ `
  subscription OnCreateLabTest($filter: ModelSubscriptionLabTestFilterInput) {
    onCreateLabTest(filter: $filter) {
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
    }
  }
`;
export const onUpdateLabTest = /* GraphQL */ `
  subscription OnUpdateLabTest($filter: ModelSubscriptionLabTestFilterInput) {
    onUpdateLabTest(filter: $filter) {
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
    }
  }
`;
export const onDeleteLabTest = /* GraphQL */ `
  subscription OnDeleteLabTest($filter: ModelSubscriptionLabTestFilterInput) {
    onDeleteLabTest(filter: $filter) {
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
    }
  }
`;
export const onCreateServiceProvidedByClinic = /* GraphQL */ `
  subscription OnCreateServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
  ) {
    onCreateServiceProvidedByClinic(filter: $filter) {
      id
      type
      description
      cost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateServiceProvidedByClinic = /* GraphQL */ `
  subscription OnUpdateServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
  ) {
    onUpdateServiceProvidedByClinic(filter: $filter) {
      id
      type
      description
      cost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteServiceProvidedByClinic = /* GraphQL */ `
  subscription OnDeleteServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
  ) {
    onDeleteServiceProvidedByClinic(filter: $filter) {
      id
      type
      description
      cost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateWorkSchedule = /* GraphQL */ `
  subscription OnCreateWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
  ) {
    onCreateWorkSchedule(filter: $filter) {
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
    }
  }
`;
export const onUpdateWorkSchedule = /* GraphQL */ `
  subscription OnUpdateWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
  ) {
    onUpdateWorkSchedule(filter: $filter) {
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
    }
  }
`;
export const onDeleteWorkSchedule = /* GraphQL */ `
  subscription OnDeleteWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
  ) {
    onDeleteWorkSchedule(filter: $filter) {
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
    }
  }
`;
export const onCreatePhysician = /* GraphQL */ `
  subscription OnCreatePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
  ) {
    onCreatePhysician(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePhysician = /* GraphQL */ `
  subscription OnUpdatePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
  ) {
    onUpdatePhysician(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePhysician = /* GraphQL */ `
  subscription OnDeletePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
  ) {
    onDeletePhysician(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentServiceProvidedByClinicId
    }
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentServiceProvidedByClinicId
    }
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentServiceProvidedByClinicId
    }
  }
`;
export const onCreateLabOrder = /* GraphQL */ `
  subscription OnCreateLabOrder($filter: ModelSubscriptionLabOrderFilterInput) {
    onCreateLabOrder(filter: $filter) {
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
    }
  }
`;
export const onUpdateLabOrder = /* GraphQL */ `
  subscription OnUpdateLabOrder($filter: ModelSubscriptionLabOrderFilterInput) {
    onUpdateLabOrder(filter: $filter) {
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
    }
  }
`;
export const onDeleteLabOrder = /* GraphQL */ `
  subscription OnDeleteLabOrder($filter: ModelSubscriptionLabOrderFilterInput) {
    onDeleteLabOrder(filter: $filter) {
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
    }
  }
`;
export const onCreatePrescription = /* GraphQL */ `
  subscription OnCreatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onCreatePrescription(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionServiceProvidedByClinicId
    }
  }
`;
export const onUpdatePrescription = /* GraphQL */ `
  subscription OnUpdatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onUpdatePrescription(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionServiceProvidedByClinicId
    }
  }
`;
export const onDeletePrescription = /* GraphQL */ `
  subscription OnDeletePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onDeletePrescription(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionServiceProvidedByClinicId
    }
  }
`;
export const onCreateVitalSign = /* GraphQL */ `
  subscription OnCreateVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
  ) {
    onCreateVitalSign(filter: $filter) {
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
    }
  }
`;
export const onUpdateVitalSign = /* GraphQL */ `
  subscription OnUpdateVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
  ) {
    onUpdateVitalSign(filter: $filter) {
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
    }
  }
`;
export const onDeleteVitalSign = /* GraphQL */ `
  subscription OnDeleteVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
  ) {
    onDeleteVitalSign(filter: $filter) {
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
    }
  }
`;
export const onCreateMedicalEncounter = /* GraphQL */ `
  subscription OnCreateMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
  ) {
    onCreateMedicalEncounter(filter: $filter) {
      id
      date
      practitionerSeen
      complaints
      diagnosis
      treatmentPlan
      referralToSpecialists
      recommendedFollowUp
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
    }
  }
`;
export const onUpdateMedicalEncounter = /* GraphQL */ `
  subscription OnUpdateMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
  ) {
    onUpdateMedicalEncounter(filter: $filter) {
      id
      date
      practitionerSeen
      complaints
      diagnosis
      treatmentPlan
      referralToSpecialists
      recommendedFollowUp
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
    }
  }
`;
export const onDeleteMedicalEncounter = /* GraphQL */ `
  subscription OnDeleteMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
  ) {
    onDeleteMedicalEncounter(filter: $filter) {
      id
      date
      practitionerSeen
      complaints
      diagnosis
      treatmentPlan
      referralToSpecialists
      recommendedFollowUp
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
  ) {
    onCreateInsuranceCarrier(filter: $filter) {
      id
      name
      address
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateInsuranceCarrier = /* GraphQL */ `
  subscription OnUpdateInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
  ) {
    onUpdateInsuranceCarrier(filter: $filter) {
      id
      name
      address
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteInsuranceCarrier = /* GraphQL */ `
  subscription OnDeleteInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
  ) {
    onDeleteInsuranceCarrier(filter: $filter) {
      id
      name
      address
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
