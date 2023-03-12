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
export declare type ServiceProvidedByClinicCreateFormInputValues = {
    type?: string;
    description?: string;
    cost?: number;
};
export declare type ServiceProvidedByClinicCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceProvidedByClinicCreateFormOverridesProps = {
    ServiceProvidedByClinicCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceProvidedByClinicCreateFormProps = React.PropsWithChildren<{
    overrides?: ServiceProvidedByClinicCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServiceProvidedByClinicCreateFormInputValues) => ServiceProvidedByClinicCreateFormInputValues;
    onSuccess?: (fields: ServiceProvidedByClinicCreateFormInputValues) => void;
    onError?: (fields: ServiceProvidedByClinicCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceProvidedByClinicCreateFormInputValues) => ServiceProvidedByClinicCreateFormInputValues;
    onValidate?: ServiceProvidedByClinicCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceProvidedByClinicCreateForm(props: ServiceProvidedByClinicCreateFormProps): React.ReactElement;
