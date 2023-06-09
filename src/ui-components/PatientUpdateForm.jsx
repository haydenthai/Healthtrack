/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Patient } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PatientUpdateForm(props) {
  const {
    id: idProp,
    patient,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    cell: "",
    paymentStatus: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [address, setAddress] = React.useState(initialValues.address);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [cell, setCell] = React.useState(initialValues.cell);
  const [paymentStatus, setPaymentStatus] = React.useState(
    initialValues.paymentStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = patientRecord
      ? { ...initialValues, ...patientRecord }
      : initialValues;
    setName(cleanValues.name);
    setAddress(cleanValues.address);
    setDateOfBirth(cleanValues.dateOfBirth);
    setGender(cleanValues.gender);
    setCell(cleanValues.cell);
    setPaymentStatus(cleanValues.paymentStatus);
    setErrors({});
  };
  const [patientRecord, setPatientRecord] = React.useState(patient);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Patient, idProp) : patient;
      setPatientRecord(record);
    };
    queryData();
  }, [idProp, patient]);
  React.useEffect(resetStateValues, [patientRecord]);
  const validations = {
    name: [],
    address: [],
    dateOfBirth: [],
    gender: [],
    cell: [{ type: "Phone" }],
    paymentStatus: [],
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
          name,
          address,
          dateOfBirth,
          gender,
          cell,
          paymentStatus,
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
            Patient.copyOf(patientRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PatientUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              address,
              dateOfBirth,
              gender,
              cell,
              paymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address: value,
              dateOfBirth,
              gender,
              cell,
              paymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              dateOfBirth: value,
              gender,
              cell,
              paymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              dateOfBirth,
              gender: value,
              cell,
              paymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Cell"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={cell}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              dateOfBirth,
              gender,
              cell: value,
              paymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.cell ?? value;
          }
          if (errors.cell?.hasError) {
            runValidationTasks("cell", value);
          }
          setCell(value);
        }}
        onBlur={() => runValidationTasks("cell", cell)}
        errorMessage={errors.cell?.errorMessage}
        hasError={errors.cell?.hasError}
        {...getOverrideProps(overrides, "cell")}
      ></TextField>
      <SelectField
        label="Payment status"
        placeholder="Please select an option"
        isDisabled={false}
        value={paymentStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              dateOfBirth,
              gender,
              cell,
              paymentStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.paymentStatus ?? value;
          }
          if (errors.paymentStatus?.hasError) {
            runValidationTasks("paymentStatus", value);
          }
          setPaymentStatus(value);
        }}
        onBlur={() => runValidationTasks("paymentStatus", paymentStatus)}
        errorMessage={errors.paymentStatus?.errorMessage}
        hasError={errors.paymentStatus?.hasError}
        {...getOverrideProps(overrides, "paymentStatus")}
      >
        <option
          children="Pays on time"
          value="PAYS_ON_TIME"
          {...getOverrideProps(overrides, "paymentStatusoption0")}
        ></option>
        <option
          children="Late with payments"
          value="LATE_WITH_PAYMENTS"
          {...getOverrideProps(overrides, "paymentStatusoption1")}
        ></option>
        <option
          children="Difficult to get payments"
          value="DIFFICULT_TO_GET_PAYMENTS"
          {...getOverrideProps(overrides, "paymentStatusoption2")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || patient)}
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
              !(idProp || patient) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
