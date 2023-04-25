/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicationFormInputValues = {
    name?: string;
    usage?: string;
    dosage?: string;
    frequency?: string;
    sideEffects?: string;
    interactions?: string;
};
export declare type MedicationFormValidationValues = {
    name?: ValidationFunction<string>;
    usage?: ValidationFunction<string>;
    dosage?: ValidationFunction<string>;
    frequency?: ValidationFunction<string>;
    sideEffects?: ValidationFunction<string>;
    interactions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationFormOverridesProps = {
    MedicationFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    usage?: PrimitiveOverrideProps<TextFieldProps>;
    dosage?: PrimitiveOverrideProps<TextFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    sideEffects?: PrimitiveOverrideProps<TextFieldProps>;
    interactions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationFormProps = React.PropsWithChildren<{
    overrides?: MedicationFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicationFormInputValues) => MedicationFormInputValues;
    onSuccess?: (fields: MedicationFormInputValues) => void;
    onError?: (fields: MedicationFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationFormInputValues) => MedicationFormInputValues;
    onValidate?: MedicationFormValidationValues;
} & React.CSSProperties>;
export default function MedicationForm(props: MedicationFormProps): React.ReactElement;
