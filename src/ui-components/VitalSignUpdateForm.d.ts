/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { VitalSign } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VitalSignUpdateFormInputValues = {
    pulse?: number;
    respirationRate?: number;
    bloodPressure?: string;
    temperature?: string;
};
export declare type VitalSignUpdateFormValidationValues = {
    pulse?: ValidationFunction<number>;
    respirationRate?: ValidationFunction<number>;
    bloodPressure?: ValidationFunction<string>;
    temperature?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VitalSignUpdateFormOverridesProps = {
    VitalSignUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pulse?: PrimitiveOverrideProps<TextFieldProps>;
    respirationRate?: PrimitiveOverrideProps<TextFieldProps>;
    bloodPressure?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VitalSignUpdateFormProps = React.PropsWithChildren<{
    overrides?: VitalSignUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vitalSign?: VitalSign;
    onSubmit?: (fields: VitalSignUpdateFormInputValues) => VitalSignUpdateFormInputValues;
    onSuccess?: (fields: VitalSignUpdateFormInputValues) => void;
    onError?: (fields: VitalSignUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VitalSignUpdateFormInputValues) => VitalSignUpdateFormInputValues;
    onValidate?: VitalSignUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VitalSignUpdateForm(props: VitalSignUpdateFormProps): React.ReactElement;
