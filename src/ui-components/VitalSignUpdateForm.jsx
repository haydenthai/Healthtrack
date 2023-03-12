/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { VitalSign } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VitalSignUpdateForm(props) {
  const {
    id: idProp,
    vitalSign,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    pulse: "",
    respirationRate: "",
    bloodPressure: "",
    temperature: "",
  };
  const [pulse, setPulse] = React.useState(initialValues.pulse);
  const [respirationRate, setRespirationRate] = React.useState(
    initialValues.respirationRate
  );
  const [bloodPressure, setBloodPressure] = React.useState(
    initialValues.bloodPressure
  );
  const [temperature, setTemperature] = React.useState(
    initialValues.temperature
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = vitalSignRecord
      ? { ...initialValues, ...vitalSignRecord }
      : initialValues;
    setPulse(cleanValues.pulse);
    setRespirationRate(cleanValues.respirationRate);
    setBloodPressure(cleanValues.bloodPressure);
    setTemperature(cleanValues.temperature);
    setErrors({});
  };
  const [vitalSignRecord, setVitalSignRecord] = React.useState(vitalSign);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(VitalSign, idProp)
        : vitalSign;
      setVitalSignRecord(record);
    };
    queryData();
  }, [idProp, vitalSign]);
  React.useEffect(resetStateValues, [vitalSignRecord]);
  const validations = {
    pulse: [{ type: "Required" }],
    respirationRate: [{ type: "Required" }],
    bloodPressure: [{ type: "Required" }],
    temperature: [],
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
          pulse,
          respirationRate,
          bloodPressure,
          temperature,
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
            VitalSign.copyOf(vitalSignRecord, (updated) => {
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
      {...getOverrideProps(overrides, "VitalSignUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pulse"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={pulse}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pulse: value,
              respirationRate,
              bloodPressure,
              temperature,
            };
            const result = onChange(modelFields);
            value = result?.pulse ?? value;
          }
          if (errors.pulse?.hasError) {
            runValidationTasks("pulse", value);
          }
          setPulse(value);
        }}
        onBlur={() => runValidationTasks("pulse", pulse)}
        errorMessage={errors.pulse?.errorMessage}
        hasError={errors.pulse?.hasError}
        {...getOverrideProps(overrides, "pulse")}
      ></TextField>
      <TextField
        label="Respiration rate"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={respirationRate}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pulse,
              respirationRate: value,
              bloodPressure,
              temperature,
            };
            const result = onChange(modelFields);
            value = result?.respirationRate ?? value;
          }
          if (errors.respirationRate?.hasError) {
            runValidationTasks("respirationRate", value);
          }
          setRespirationRate(value);
        }}
        onBlur={() => runValidationTasks("respirationRate", respirationRate)}
        errorMessage={errors.respirationRate?.errorMessage}
        hasError={errors.respirationRate?.hasError}
        {...getOverrideProps(overrides, "respirationRate")}
      ></TextField>
      <TextField
        label="Blood pressure"
        isRequired={true}
        isReadOnly={false}
        value={bloodPressure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pulse,
              respirationRate,
              bloodPressure: value,
              temperature,
            };
            const result = onChange(modelFields);
            value = result?.bloodPressure ?? value;
          }
          if (errors.bloodPressure?.hasError) {
            runValidationTasks("bloodPressure", value);
          }
          setBloodPressure(value);
        }}
        onBlur={() => runValidationTasks("bloodPressure", bloodPressure)}
        errorMessage={errors.bloodPressure?.errorMessage}
        hasError={errors.bloodPressure?.hasError}
        {...getOverrideProps(overrides, "bloodPressure")}
      ></TextField>
      <TextField
        label="Temperature"
        isRequired={false}
        isReadOnly={false}
        value={temperature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pulse,
              respirationRate,
              bloodPressure,
              temperature: value,
            };
            const result = onChange(modelFields);
            value = result?.temperature ?? value;
          }
          if (errors.temperature?.hasError) {
            runValidationTasks("temperature", value);
          }
          setTemperature(value);
        }}
        onBlur={() => runValidationTasks("temperature", temperature)}
        errorMessage={errors.temperature?.errorMessage}
        hasError={errors.temperature?.hasError}
        {...getOverrideProps(overrides, "temperature")}
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
          isDisabled={!(idProp || vitalSign)}
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
              !(idProp || vitalSign) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
