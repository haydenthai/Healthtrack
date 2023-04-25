/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Medication } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MedicationForm(props) {
  const {
    clearOnSuccess = true,
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
    usage: "",
    dosage: "",
    frequency: "",
    sideEffects: "",
    interactions: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [usage, setUsage] = React.useState(initialValues.usage);
  const [dosage, setDosage] = React.useState(initialValues.dosage);
  const [frequency, setFrequency] = React.useState(initialValues.frequency);
  const [sideEffects, setSideEffects] = React.useState(
    initialValues.sideEffects
  );
  const [interactions, setInteractions] = React.useState(
    initialValues.interactions
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setUsage(initialValues.usage);
    setDosage(initialValues.dosage);
    setFrequency(initialValues.frequency);
    setSideEffects(initialValues.sideEffects);
    setInteractions(initialValues.interactions);
    setErrors({});
  };
  const validations = {
    name: [],
    usage: [],
    dosage: [],
    frequency: [],
    sideEffects: [],
    interactions: [],
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
          usage,
          dosage,
          frequency,
          sideEffects,
          interactions,
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
          await DataStore.save(new Medication(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MedicationForm")}
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
              usage,
              dosage,
              frequency,
              sideEffects,
              interactions,
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
        label="Usage"
        isRequired={false}
        isReadOnly={false}
        value={usage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              usage: value,
              dosage,
              frequency,
              sideEffects,
              interactions,
            };
            const result = onChange(modelFields);
            value = result?.usage ?? value;
          }
          if (errors.usage?.hasError) {
            runValidationTasks("usage", value);
          }
          setUsage(value);
        }}
        onBlur={() => runValidationTasks("usage", usage)}
        errorMessage={errors.usage?.errorMessage}
        hasError={errors.usage?.hasError}
        {...getOverrideProps(overrides, "usage")}
      ></TextField>
      <TextField
        label="Dosage"
        isRequired={false}
        isReadOnly={false}
        value={dosage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              usage,
              dosage: value,
              frequency,
              sideEffects,
              interactions,
            };
            const result = onChange(modelFields);
            value = result?.dosage ?? value;
          }
          if (errors.dosage?.hasError) {
            runValidationTasks("dosage", value);
          }
          setDosage(value);
        }}
        onBlur={() => runValidationTasks("dosage", dosage)}
        errorMessage={errors.dosage?.errorMessage}
        hasError={errors.dosage?.hasError}
        {...getOverrideProps(overrides, "dosage")}
      ></TextField>
      <TextField
        label="Frequency"
        isRequired={false}
        isReadOnly={false}
        value={frequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              usage,
              dosage,
              frequency: value,
              sideEffects,
              interactions,
            };
            const result = onChange(modelFields);
            value = result?.frequency ?? value;
          }
          if (errors.frequency?.hasError) {
            runValidationTasks("frequency", value);
          }
          setFrequency(value);
        }}
        onBlur={() => runValidationTasks("frequency", frequency)}
        errorMessage={errors.frequency?.errorMessage}
        hasError={errors.frequency?.hasError}
        {...getOverrideProps(overrides, "frequency")}
      ></TextField>
      <TextField
        label="Side effects"
        isRequired={false}
        isReadOnly={false}
        value={sideEffects}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              usage,
              dosage,
              frequency,
              sideEffects: value,
              interactions,
            };
            const result = onChange(modelFields);
            value = result?.sideEffects ?? value;
          }
          if (errors.sideEffects?.hasError) {
            runValidationTasks("sideEffects", value);
          }
          setSideEffects(value);
        }}
        onBlur={() => runValidationTasks("sideEffects", sideEffects)}
        errorMessage={errors.sideEffects?.errorMessage}
        hasError={errors.sideEffects?.hasError}
        {...getOverrideProps(overrides, "sideEffects")}
      ></TextField>
      <TextField
        label="Interactions"
        isRequired={false}
        isReadOnly={false}
        value={interactions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              usage,
              dosage,
              frequency,
              sideEffects,
              interactions: value,
            };
            const result = onChange(modelFields);
            value = result?.interactions ?? value;
          }
          if (errors.interactions?.hasError) {
            runValidationTasks("interactions", value);
          }
          setInteractions(value);
        }}
        onBlur={() => runValidationTasks("interactions", interactions)}
        errorMessage={errors.interactions?.errorMessage}
        hasError={errors.interactions?.hasError}
        {...getOverrideProps(overrides, "interactions")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
