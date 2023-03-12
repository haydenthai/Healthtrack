/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { InsuranceCarrier } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InsuranceCarrierUpdateFormInputValues = {
    name?: string;
    address?: string;
    status?: string;
};
export declare type InsuranceCarrierUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InsuranceCarrierUpdateFormOverridesProps = {
    InsuranceCarrierUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type InsuranceCarrierUpdateFormProps = React.PropsWithChildren<{
    overrides?: InsuranceCarrierUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    insuranceCarrier?: InsuranceCarrier;
    onSubmit?: (fields: InsuranceCarrierUpdateFormInputValues) => InsuranceCarrierUpdateFormInputValues;
    onSuccess?: (fields: InsuranceCarrierUpdateFormInputValues) => void;
    onError?: (fields: InsuranceCarrierUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InsuranceCarrierUpdateFormInputValues) => InsuranceCarrierUpdateFormInputValues;
    onValidate?: InsuranceCarrierUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InsuranceCarrierUpdateForm(props: InsuranceCarrierUpdateFormProps): React.ReactElement;
