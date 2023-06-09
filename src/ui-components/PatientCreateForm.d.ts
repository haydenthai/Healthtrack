/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatientCreateFormInputValues = {
    name?: string;
    address?: string;
    dateOfBirth?: string;
    gender?: string;
    cell?: string;
    paymentStatus?: string;
};
export declare type PatientCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    cell?: ValidationFunction<string>;
    paymentStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientCreateFormOverridesProps = {
    PatientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    cell?: PrimitiveOverrideProps<TextFieldProps>;
    paymentStatus?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PatientCreateFormProps = React.PropsWithChildren<{
    overrides?: PatientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PatientCreateFormInputValues) => PatientCreateFormInputValues;
    onSuccess?: (fields: PatientCreateFormInputValues) => void;
    onError?: (fields: PatientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientCreateFormInputValues) => PatientCreateFormInputValues;
    onValidate?: PatientCreateFormValidationValues;
} & React.CSSProperties>;
export default function PatientCreateForm(props: PatientCreateFormProps): React.ReactElement;
