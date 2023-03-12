/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipmentCreateFormInputValues = {
    type?: string;
    description?: string;
    department?: string;
    owned?: boolean;
    leased?: boolean;
};
export declare type EquipmentCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    department?: ValidationFunction<string>;
    owned?: ValidationFunction<boolean>;
    leased?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentCreateFormOverridesProps = {
    EquipmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    department?: PrimitiveOverrideProps<TextFieldProps>;
    owned?: PrimitiveOverrideProps<SwitchFieldProps>;
    leased?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipmentCreateFormInputValues) => EquipmentCreateFormInputValues;
    onSuccess?: (fields: EquipmentCreateFormInputValues) => void;
    onError?: (fields: EquipmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentCreateFormInputValues) => EquipmentCreateFormInputValues;
    onValidate?: EquipmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentCreateForm(props: EquipmentCreateFormProps): React.ReactElement;
