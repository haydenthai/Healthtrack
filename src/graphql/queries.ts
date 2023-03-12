/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPatients = /* GraphQL */ `
  query SyncPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
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
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncVendors = /* GraphQL */ `
  query SyncVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVendors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const vendorsByEquipmentID = /* GraphQL */ `
  query VendorsByEquipmentID(
    $equipmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendorsByEquipmentID(
      equipmentID: $equipmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getEquipmentMaintenance = /* GraphQL */ `
  query GetEquipmentMaintenance($id: ID!) {
    getEquipmentMaintenance(id: $id) {
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
export const listEquipmentMaintenances = /* GraphQL */ `
  query ListEquipmentMaintenances(
    $filter: ModelEquipmentMaintenanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipmentMaintenances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncEquipmentMaintenances = /* GraphQL */ `
  query SyncEquipmentMaintenances(
    $filter: ModelEquipmentMaintenanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipmentMaintenances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const equipmentMaintenancesByEquipmentID = /* GraphQL */ `
  query EquipmentMaintenancesByEquipmentID(
    $equipmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEquipmentMaintenanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    equipmentMaintenancesByEquipmentID(
      equipmentID: $equipmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getEquipmentOwned = /* GraphQL */ `
  query GetEquipmentOwned($id: ID!) {
    getEquipmentOwned(id: $id) {
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
export const listEquipmentOwneds = /* GraphQL */ `
  query ListEquipmentOwneds(
    $filter: ModelEquipmentOwnedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipmentOwneds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        datePurchased
        warranty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEquipmentOwneds = /* GraphQL */ `
  query SyncEquipmentOwneds(
    $filter: ModelEquipmentOwnedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipmentOwneds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        datePurchased
        warranty
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEquipmentLeased = /* GraphQL */ `
  query GetEquipmentLeased($id: ID!) {
    getEquipmentLeased(id: $id) {
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
export const listEquipmentLeaseds = /* GraphQL */ `
  query ListEquipmentLeaseds(
    $filter: ModelEquipmentLeasedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipmentLeaseds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEquipmentLeaseds = /* GraphQL */ `
  query SyncEquipmentLeaseds(
    $filter: ModelEquipmentLeasedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipmentLeaseds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEquipment = /* GraphQL */ `
  query GetEquipment($id: ID!) {
    getEquipment(id: $id) {
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
export const listEquipment = /* GraphQL */ `
  query ListEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipment(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        description
        department
        owned
        leased
        Vendors {
          nextToken
          startedAt
        }
        EquipmentMaintenances {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEquipment = /* GraphQL */ `
  query SyncEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipment(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        description
        department
        owned
        leased
        Vendors {
          nextToken
          startedAt
        }
        EquipmentMaintenances {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabTest = /* GraphQL */ `
  query GetLabTest($id: ID!) {
    getLabTest(id: $id) {
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
export const listLabTests = /* GraphQL */ `
  query ListLabTests(
    $filter: ModelLabTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncLabTests = /* GraphQL */ `
  query SyncLabTests(
    $filter: ModelLabTestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabTests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const labTestsByLaborderID = /* GraphQL */ `
  query LabTestsByLaborderID(
    $laborderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLabTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    labTestsByLaborderID(
      laborderID: $laborderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getServiceProvidedByClinic = /* GraphQL */ `
  query GetServiceProvidedByClinic($id: ID!) {
    getServiceProvidedByClinic(id: $id) {
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
export const listServiceProvidedByClinics = /* GraphQL */ `
  query ListServiceProvidedByClinics(
    $filter: ModelServiceProvidedByClinicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceProvidedByClinics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncServiceProvidedByClinics = /* GraphQL */ `
  query SyncServiceProvidedByClinics(
    $filter: ModelServiceProvidedByClinicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServiceProvidedByClinics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkSchedule = /* GraphQL */ `
  query GetWorkSchedule($id: ID!) {
    getWorkSchedule(id: $id) {
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
export const listWorkSchedules = /* GraphQL */ `
  query ListWorkSchedules(
    $filter: ModelWorkScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncWorkSchedules = /* GraphQL */ `
  query SyncWorkSchedules(
    $filter: ModelWorkScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const workSchedulesByPhysicianID = /* GraphQL */ `
  query WorkSchedulesByPhysicianID(
    $physicianID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWorkScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    workSchedulesByPhysicianID(
      physicianID: $physicianID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPhysician = /* GraphQL */ `
  query GetPhysician($id: ID!) {
    getPhysician(id: $id) {
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
export const listPhysicians = /* GraphQL */ `
  query ListPhysicians(
    $filter: ModelPhysicianFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhysicians(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPhysicians = /* GraphQL */ `
  query SyncPhysicians(
    $filter: ModelPhysicianFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhysicians(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const appointmentsByPatientID = /* GraphQL */ `
  query AppointmentsByPatientID(
    $patientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByPatientID(
      patientID: $patientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const appointmentsByPhysicianID = /* GraphQL */ `
  query AppointmentsByPhysicianID(
    $physicianID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByPhysicianID(
      physicianID: $physicianID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLabOrder = /* GraphQL */ `
  query GetLabOrder($id: ID!) {
    getLabOrder(id: $id) {
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
export const listLabOrders = /* GraphQL */ `
  query ListLabOrders(
    $filter: ModelLabOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLabOrders = /* GraphQL */ `
  query SyncLabOrders(
    $filter: ModelLabOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLabOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const labOrdersByMedicalencounterID = /* GraphQL */ `
  query LabOrdersByMedicalencounterID(
    $medicalencounterID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLabOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    labOrdersByMedicalencounterID(
      medicalencounterID: $medicalencounterID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPrescription = /* GraphQL */ `
  query GetPrescription($id: ID!) {
    getPrescription(id: $id) {
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
export const listPrescriptions = /* GraphQL */ `
  query ListPrescriptions(
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPrescriptions = /* GraphQL */ `
  query SyncPrescriptions(
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const prescriptionsByMedicalencounterID = /* GraphQL */ `
  query PrescriptionsByMedicalencounterID(
    $medicalencounterID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prescriptionsByMedicalencounterID(
      medicalencounterID: $medicalencounterID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getVitalSign = /* GraphQL */ `
  query GetVitalSign($id: ID!) {
    getVitalSign(id: $id) {
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
export const listVitalSigns = /* GraphQL */ `
  query ListVitalSigns(
    $filter: ModelVitalSignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVitalSigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncVitalSigns = /* GraphQL */ `
  query SyncVitalSigns(
    $filter: ModelVitalSignFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVitalSigns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMedicalEncounter = /* GraphQL */ `
  query GetMedicalEncounter($id: ID!) {
    getMedicalEncounter(id: $id) {
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
export const listMedicalEncounters = /* GraphQL */ `
  query ListMedicalEncounters(
    $filter: ModelMedicalEncounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalEncounters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          nextToken
          startedAt
        }
        LabOrders {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMedicalEncounters = /* GraphQL */ `
  query SyncMedicalEncounters(
    $filter: ModelMedicalEncounterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMedicalEncounters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          nextToken
          startedAt
        }
        LabOrders {
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
      nextToken
      startedAt
    }
  }
`;
export const medicalEncountersByPatientID = /* GraphQL */ `
  query MedicalEncountersByPatientID(
    $patientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMedicalEncounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    medicalEncountersByPatientID(
      patientID: $patientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          nextToken
          startedAt
        }
        LabOrders {
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
      nextToken
      startedAt
    }
  }
`;
export const getMedication = /* GraphQL */ `
  query GetMedication($id: ID!) {
    getMedication(id: $id) {
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
export const listMedications = /* GraphQL */ `
  query ListMedications(
    $filter: ModelMedicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncMedications = /* GraphQL */ `
  query SyncMedications(
    $filter: ModelMedicationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMedications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const medicationsByPatientID = /* GraphQL */ `
  query MedicationsByPatientID(
    $patientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMedicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    medicationsByPatientID(
      patientID: $patientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getInsuranceCarrier = /* GraphQL */ `
  query GetInsuranceCarrier($id: ID!) {
    getInsuranceCarrier(id: $id) {
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
export const listInsuranceCarriers = /* GraphQL */ `
  query ListInsuranceCarriers(
    $filter: ModelInsuranceCarrierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsuranceCarriers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncInsuranceCarriers = /* GraphQL */ `
  query SyncInsuranceCarriers(
    $filter: ModelInsuranceCarrierFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInsuranceCarriers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
