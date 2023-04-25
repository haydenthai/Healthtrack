/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MedicalEncounter } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function MedicalEncounterUpdateForm(props) {
  const {
    id: idProp,
    medicalEncounter,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    practitionerSeen: [],
    complaints: "",
    diagnosis: "",
    treatmentPlan: "",
    referralToSpecialists: "",
    patientID: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [practitionerSeen, setPractitionerSeen] = React.useState(
    initialValues.practitionerSeen
  );
  const [complaints, setComplaints] = React.useState(initialValues.complaints);
  const [diagnosis, setDiagnosis] = React.useState(initialValues.diagnosis);
  const [treatmentPlan, setTreatmentPlan] = React.useState(
    initialValues.treatmentPlan
  );
  const [referralToSpecialists, setReferralToSpecialists] = React.useState(
    initialValues.referralToSpecialists
  );
  const [patientID, setPatientID] = React.useState(initialValues.patientID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = medicalEncounterRecord
      ? { ...initialValues, ...medicalEncounterRecord }
      : initialValues;
    setDate(cleanValues.date);
    setPractitionerSeen(cleanValues.practitionerSeen ?? []);
    setCurrentPractitionerSeenValue(undefined);
    setComplaints(cleanValues.complaints);
    setDiagnosis(cleanValues.diagnosis);
    setTreatmentPlan(cleanValues.treatmentPlan);
    setReferralToSpecialists(cleanValues.referralToSpecialists);
    setPatientID(cleanValues.patientID);
    setErrors({});
  };
  const [medicalEncounterRecord, setMedicalEncounterRecord] =
    React.useState(medicalEncounter);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(MedicalEncounter, idProp)
        : medicalEncounter;
      setMedicalEncounterRecord(record);
    };
    queryData();
  }, [idProp, medicalEncounter]);
  React.useEffect(resetStateValues, [medicalEncounterRecord]);
  const [currentPractitionerSeenValue, setCurrentPractitionerSeenValue] =
    React.useState(undefined);
  const practitionerSeenRef = React.createRef();
  const getDisplayValue = {
    practitionerSeen: (r) => {
      const enumDisplayValueMap = {
        NURSE: "Nurse",
        DOCTOR: "Doctor",
        PHYSICIAN: "Physician",
        PHYSICIAN_ASSISTANT: "Physician assistant",
        PEDIATRIST: "Pediatrist",
        ANESTHESIOLOGIST: "Anesthesiologist",
        RADIOLOGIST: "Radiologist",
        PSYCHOLOGIST: "Psychologist",
        NEUROLOGIST: "Neurologist",
        PSYCHIATRIST: "Psychiatrist",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    date: [{ type: "Required" }],
    practitionerSeen: [],
    complaints: [],
    diagnosis: [{ type: "Required" }],
    treatmentPlan: [],
    referralToSpecialists: [],
    patientID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date,
          practitionerSeen,
          complaints,
          diagnosis,
          treatmentPlan,
          referralToSpecialists,
          patientID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            MedicalEncounter.copyOf(medicalEncounterRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MedicalEncounterUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              practitionerSeen,
              complaints,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              patientID,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              date,
              practitionerSeen: values,
              complaints,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              patientID,
            };
            const result = onChange(modelFields);
            values = result?.practitionerSeen ?? values;
          }
          setPractitionerSeen(values);
          setCurrentPractitionerSeenValue(undefined);
        }}
        currentFieldValue={currentPractitionerSeenValue}
        label={"Practitioner seen"}
        items={practitionerSeen}
        hasError={errors?.practitionerSeen?.hasError}
        errorMessage={errors?.practitionerSeen?.errorMessage}
        getBadgeText={getDisplayValue.practitionerSeen}
        setFieldValue={setCurrentPractitionerSeenValue}
        inputFieldRef={practitionerSeenRef}
        defaultFieldValue={undefined}
      >
        <SelectField
          label="Practitioner seen"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentPractitionerSeenValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.practitionerSeen?.hasError) {
              runValidationTasks("practitionerSeen", value);
            }
            setCurrentPractitionerSeenValue(value);
          }}
          onBlur={() =>
            runValidationTasks("practitionerSeen", currentPractitionerSeenValue)
          }
          errorMessage={errors.practitionerSeen?.errorMessage}
          hasError={errors.practitionerSeen?.hasError}
          ref={practitionerSeenRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "practitionerSeen")}
        >
          <option
            children="Nurse"
            value="NURSE"
            {...getOverrideProps(overrides, "practitionerSeenoption0")}
          ></option>
          <option
            children="Doctor"
            value="DOCTOR"
            {...getOverrideProps(overrides, "practitionerSeenoption1")}
          ></option>
          <option
            children="Physician"
            value="PHYSICIAN"
            {...getOverrideProps(overrides, "practitionerSeenoption2")}
          ></option>
          <option
            children="Physician assistant"
            value="PHYSICIAN_ASSISTANT"
            {...getOverrideProps(overrides, "practitionerSeenoption3")}
          ></option>
          <option
            children="Pediatrist"
            value="PEDIATRIST"
            {...getOverrideProps(overrides, "practitionerSeenoption4")}
          ></option>
          <option
            children="Anesthesiologist"
            value="ANESTHESIOLOGIST"
            {...getOverrideProps(overrides, "practitionerSeenoption5")}
          ></option>
          <option
            children="Radiologist"
            value="RADIOLOGIST"
            {...getOverrideProps(overrides, "practitionerSeenoption6")}
          ></option>
          <option
            children="Psychologist"
            value="PSYCHOLOGIST"
            {...getOverrideProps(overrides, "practitionerSeenoption7")}
          ></option>
          <option
            children="Neurologist"
            value="NEUROLOGIST"
            {...getOverrideProps(overrides, "practitionerSeenoption8")}
          ></option>
          <option
            children="Psychiatrist"
            value="PSYCHIATRIST"
            {...getOverrideProps(overrides, "practitionerSeenoption9")}
          ></option>
        </SelectField>
      </ArrayField>
      <TextField
        label="Complaints"
        isRequired={false}
        isReadOnly={false}
        value={complaints}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              practitionerSeen,
              complaints: value,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              patientID,
            };
            const result = onChange(modelFields);
            value = result?.complaints ?? value;
          }
          if (errors.complaints?.hasError) {
            runValidationTasks("complaints", value);
          }
          setComplaints(value);
        }}
        onBlur={() => runValidationTasks("complaints", complaints)}
        errorMessage={errors.complaints?.errorMessage}
        hasError={errors.complaints?.hasError}
        {...getOverrideProps(overrides, "complaints")}
      ></TextField>
      <TextField
        label="Diagnosis"
        isRequired={true}
        isReadOnly={false}
        value={diagnosis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              practitionerSeen,
              complaints,
              diagnosis: value,
              treatmentPlan,
              referralToSpecialists,
              patientID,
            };
            const result = onChange(modelFields);
            value = result?.diagnosis ?? value;
          }
          if (errors.diagnosis?.hasError) {
            runValidationTasks("diagnosis", value);
          }
          setDiagnosis(value);
        }}
        onBlur={() => runValidationTasks("diagnosis", diagnosis)}
        errorMessage={errors.diagnosis?.errorMessage}
        hasError={errors.diagnosis?.hasError}
        {...getOverrideProps(overrides, "diagnosis")}
      ></TextField>
      <TextField
        label="Treatment plan"
        isRequired={false}
        isReadOnly={false}
        value={treatmentPlan}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              practitionerSeen,
              complaints,
              diagnosis,
              treatmentPlan: value,
              referralToSpecialists,
              patientID,
            };
            const result = onChange(modelFields);
            value = result?.treatmentPlan ?? value;
          }
          if (errors.treatmentPlan?.hasError) {
            runValidationTasks("treatmentPlan", value);
          }
          setTreatmentPlan(value);
        }}
        onBlur={() => runValidationTasks("treatmentPlan", treatmentPlan)}
        errorMessage={errors.treatmentPlan?.errorMessage}
        hasError={errors.treatmentPlan?.hasError}
        {...getOverrideProps(overrides, "treatmentPlan")}
      ></TextField>
      <TextField
        label="Referral to specialists"
        isRequired={false}
        isReadOnly={false}
        value={referralToSpecialists}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              practitionerSeen,
              complaints,
              diagnosis,
              treatmentPlan,
              referralToSpecialists: value,
              patientID,
            };
            const result = onChange(modelFields);
            value = result?.referralToSpecialists ?? value;
          }
          if (errors.referralToSpecialists?.hasError) {
            runValidationTasks("referralToSpecialists", value);
          }
          setReferralToSpecialists(value);
        }}
        onBlur={() =>
          runValidationTasks("referralToSpecialists", referralToSpecialists)
        }
        errorMessage={errors.referralToSpecialists?.errorMessage}
        hasError={errors.referralToSpecialists?.hasError}
        {...getOverrideProps(overrides, "referralToSpecialists")}
      ></TextField>
      <TextField
        label="Patient id"
        isRequired={true}
        isReadOnly={false}
        value={patientID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              practitionerSeen,
              complaints,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              patientID: value,
            };
            const result = onChange(modelFields);
            value = result?.patientID ?? value;
          }
          if (errors.patientID?.hasError) {
            runValidationTasks("patientID", value);
          }
          setPatientID(value);
        }}
        onBlur={() => runValidationTasks("patientID", patientID)}
        errorMessage={errors.patientID?.errorMessage}
        hasError={errors.patientID?.hasError}
        {...getOverrideProps(overrides, "patientID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || medicalEncounter)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || medicalEncounter) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
