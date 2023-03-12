/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ServiceProvidedByClinic } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceProvidedByClinicUpdateFormInputValues = {
    type?: string;
    description?: string;
    cost?: number;
};
export declare type ServiceProvidedByClinicUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceProvidedByClinicUpdateFormOverridesProps = {
    ServiceProvidedByClinicUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceProvidedByClinicUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceProvidedByClinicUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    serviceProvidedByClinic?: ServiceProvidedByClinic;
    onSubmit?: (fields: ServiceProvidedByClinicUpdateFormInputValues) => ServiceProvidedByClinicUpdateFormInputValues;
    onSuccess?: (fields: ServiceProvidedByClinicUpdateFormInputValues) => void;
    onError?: (fields: ServiceProvidedByClinicUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceProvidedByClinicUpdateFormInputValues) => ServiceProvidedByClinicUpdateFormInputValues;
    onValidate?: ServiceProvidedByClinicUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceProvidedByClinicUpdateForm(props: ServiceProvidedByClinicUpdateFormProps): React.ReactElement;
