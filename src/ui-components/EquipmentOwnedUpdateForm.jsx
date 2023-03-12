/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { EquipmentOwned } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EquipmentOwnedUpdateForm(props) {
  const {
    id: idProp,
    equipmentOwned,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    datePurchased: "",
    warranty: "",
  };
  const [datePurchased, setDatePurchased] = React.useState(
    initialValues.datePurchased
  );
  const [warranty, setWarranty] = React.useState(initialValues.warranty);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = equipmentOwnedRecord
      ? { ...initialValues, ...equipmentOwnedRecord }
      : initialValues;
    setDatePurchased(cleanValues.datePurchased);
    setWarranty(cleanValues.warranty);
    setErrors({});
  };
  const [equipmentOwnedRecord, setEquipmentOwnedRecord] =
    React.useState(equipmentOwned);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(EquipmentOwned, idProp)
        : equipmentOwned;
      setEquipmentOwnedRecord(record);
    };
    queryData();
  }, [idProp, equipmentOwned]);
  React.useEffect(resetStateValues, [equipmentOwnedRecord]);
  const validations = {
    datePurchased: [],
    warranty: [],
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
          datePurchased,
          warranty,
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
            EquipmentOwned.copyOf(equipmentOwnedRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EquipmentOwnedUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date purchased"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={datePurchased}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datePurchased: value,
              warranty,
            };
            const result = onChange(modelFields);
            value = result?.datePurchased ?? value;
          }
          if (errors.datePurchased?.hasError) {
            runValidationTasks("datePurchased", value);
          }
          setDatePurchased(value);
        }}
        onBlur={() => runValidationTasks("datePurchased", datePurchased)}
        errorMessage={errors.datePurchased?.errorMessage}
        hasError={errors.datePurchased?.hasError}
        {...getOverrideProps(overrides, "datePurchased")}
      ></TextField>
      <TextField
        label="Warranty"
        isRequired={false}
        isReadOnly={false}
        value={warranty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              datePurchased,
              warranty: value,
            };
            const result = onChange(modelFields);
            value = result?.warranty ?? value;
          }
          if (errors.warranty?.hasError) {
            runValidationTasks("warranty", value);
          }
          setWarranty(value);
        }}
        onBlur={() => runValidationTasks("warranty", warranty)}
        errorMessage={errors.warranty?.errorMessage}
        hasError={errors.warranty?.hasError}
        {...getOverrideProps(overrides, "warranty")}
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
          isDisabled={!(idProp || equipmentOwned)}
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
              !(idProp || equipmentOwned) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
