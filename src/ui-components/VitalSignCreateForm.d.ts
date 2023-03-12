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
export declare type VitalSignCreateFormInputValues = {
    pulse?: number;
    respirationRate?: number;
    bloodPressure?: string;
    temperature?: string;
};
export declare type VitalSignCreateFormValidationValues = {
    pulse?: ValidationFunction<number>;
    respirationRate?: ValidationFunction<number>;
    bloodPressure?: ValidationFunction<string>;
    temperature?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VitalSignCreateFormOverridesProps = {
    VitalSignCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pulse?: PrimitiveOverrideProps<TextFieldProps>;
    respirationRate?: PrimitiveOverrideProps<TextFieldProps>;
    bloodPressure?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VitalSignCreateFormProps = React.PropsWithChildren<{
    overrides?: VitalSignCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VitalSignCreateFormInputValues) => VitalSignCreateFormInputValues;
    onSuccess?: (fields: VitalSignCreateFormInputValues) => void;
    onError?: (fields: VitalSignCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VitalSignCreateFormInputValues) => VitalSignCreateFormInputValues;
    onValidate?: VitalSignCreateFormValidationValues;
} & React.CSSProperties>;
export default function VitalSignCreateForm(props: VitalSignCreateFormProps): React.ReactElement;
