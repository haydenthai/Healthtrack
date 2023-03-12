/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Physician } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PhysicianUpdateFormInputValues = {
    name?: string;
    cellPhoneNumber?: string;
};
export declare type PhysicianUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    cellPhoneNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhysicianUpdateFormOverridesProps = {
    PhysicianUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    cellPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PhysicianUpdateFormProps = React.PropsWithChildren<{
    overrides?: PhysicianUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    physician?: Physician;
    onSubmit?: (fields: PhysicianUpdateFormInputValues) => PhysicianUpdateFormInputValues;
    onSuccess?: (fields: PhysicianUpdateFormInputValues) => void;
    onError?: (fields: PhysicianUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhysicianUpdateFormInputValues) => PhysicianUpdateFormInputValues;
    onValidate?: PhysicianUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PhysicianUpdateForm(props: PhysicianUpdateFormProps): React.ReactElement;
