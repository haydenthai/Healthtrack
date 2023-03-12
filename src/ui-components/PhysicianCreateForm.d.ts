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
export declare type PhysicianCreateFormInputValues = {
    name?: string;
    cellPhoneNumber?: string;
};
export declare type PhysicianCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    cellPhoneNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhysicianCreateFormOverridesProps = {
    PhysicianCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    cellPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PhysicianCreateFormProps = React.PropsWithChildren<{
    overrides?: PhysicianCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PhysicianCreateFormInputValues) => PhysicianCreateFormInputValues;
    onSuccess?: (fields: PhysicianCreateFormInputValues) => void;
    onError?: (fields: PhysicianCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhysicianCreateFormInputValues) => PhysicianCreateFormInputValues;
    onValidate?: PhysicianCreateFormValidationValues;
} & React.CSSProperties>;
export default function PhysicianCreateForm(props: PhysicianCreateFormProps): React.ReactElement;
