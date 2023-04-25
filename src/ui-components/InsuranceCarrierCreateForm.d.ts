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
export declare type InsuranceCarrierCreateFormInputValues = {
    name?: string;
    address?: string;
};
export declare type InsuranceCarrierCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InsuranceCarrierCreateFormOverridesProps = {
    InsuranceCarrierCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InsuranceCarrierCreateFormProps = React.PropsWithChildren<{
    overrides?: InsuranceCarrierCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InsuranceCarrierCreateFormInputValues) => InsuranceCarrierCreateFormInputValues;
    onSuccess?: (fields: InsuranceCarrierCreateFormInputValues) => void;
    onError?: (fields: InsuranceCarrierCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InsuranceCarrierCreateFormInputValues) => InsuranceCarrierCreateFormInputValues;
    onValidate?: InsuranceCarrierCreateFormValidationValues;
} & React.CSSProperties>;
export default function InsuranceCarrierCreateForm(props: InsuranceCarrierCreateFormProps): React.ReactElement;
