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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Payments } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PaymentsUpdateForm(props) {
  const {
    id: idProp,
    payments,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    amount: "",
    dayIssued: "",
    dayFulfilled: "",
    isPaid: false,
  };
  const [amount, setAmount] = React.useState(initialValues.amount);
  const [dayIssued, setDayIssued] = React.useState(initialValues.dayIssued);
  const [dayFulfilled, setDayFulfilled] = React.useState(
    initialValues.dayFulfilled
  );
  const [isPaid, setIsPaid] = React.useState(initialValues.isPaid);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = paymentsRecord
      ? { ...initialValues, ...paymentsRecord }
      : initialValues;
    setAmount(cleanValues.amount);
    setDayIssued(cleanValues.dayIssued);
    setDayFulfilled(cleanValues.dayFulfilled);
    setIsPaid(cleanValues.isPaid);
    setErrors({});
  };
  const [paymentsRecord, setPaymentsRecord] = React.useState(payments);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Payments, idProp)
        : payments;
      setPaymentsRecord(record);
    };
    queryData();
  }, [idProp, payments]);
  React.useEffect(resetStateValues, [paymentsRecord]);
  const validations = {
    amount: [{ type: "Required" }],
    dayIssued: [{ type: "Required" }],
    dayFulfilled: [],
    isPaid: [{ type: "Required" }],
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
          amount,
          dayIssued,
          dayFulfilled,
          isPaid,
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
            Payments.copyOf(paymentsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PaymentsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Amount"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              amount: value,
              dayIssued,
              dayFulfilled,
              isPaid,
            };
            const result = onChange(modelFields);
            value = result?.amount ?? value;
          }
          if (errors.amount?.hasError) {
            runValidationTasks("amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("amount", amount)}
        errorMessage={errors.amount?.errorMessage}
        hasError={errors.amount?.hasError}
        {...getOverrideProps(overrides, "amount")}
      ></TextField>
      <TextField
        label="Day issued"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dayIssued}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              amount,
              dayIssued: value,
              dayFulfilled,
              isPaid,
            };
            const result = onChange(modelFields);
            value = result?.dayIssued ?? value;
          }
          if (errors.dayIssued?.hasError) {
            runValidationTasks("dayIssued", value);
          }
          setDayIssued(value);
        }}
        onBlur={() => runValidationTasks("dayIssued", dayIssued)}
        errorMessage={errors.dayIssued?.errorMessage}
        hasError={errors.dayIssued?.hasError}
        {...getOverrideProps(overrides, "dayIssued")}
      ></TextField>
      <TextField
        label="Day fulfilled"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dayFulfilled}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              amount,
              dayIssued,
              dayFulfilled: value,
              isPaid,
            };
            const result = onChange(modelFields);
            value = result?.dayFulfilled ?? value;
          }
          if (errors.dayFulfilled?.hasError) {
            runValidationTasks("dayFulfilled", value);
          }
          setDayFulfilled(value);
        }}
        onBlur={() => runValidationTasks("dayFulfilled", dayFulfilled)}
        errorMessage={errors.dayFulfilled?.errorMessage}
        hasError={errors.dayFulfilled?.hasError}
        {...getOverrideProps(overrides, "dayFulfilled")}
      ></TextField>
      <SwitchField
        label="Is paid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPaid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              amount,
              dayIssued,
              dayFulfilled,
              isPaid: value,
            };
            const result = onChange(modelFields);
            value = result?.isPaid ?? value;
          }
          if (errors.isPaid?.hasError) {
            runValidationTasks("isPaid", value);
          }
          setIsPaid(value);
        }}
        onBlur={() => runValidationTasks("isPaid", isPaid)}
        errorMessage={errors.isPaid?.errorMessage}
        hasError={errors.isPaid?.hasError}
        {...getOverrideProps(overrides, "isPaid")}
      ></SwitchField>
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
          isDisabled={!(idProp || payments)}
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
              !(idProp || payments) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
