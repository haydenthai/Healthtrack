/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Equipment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipmentUpdateFormInputValues = {
    type?: string;
    description?: string;
    department?: string;
    owned?: boolean;
    leased?: boolean;
};
export declare type EquipmentUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    department?: ValidationFunction<string>;
    owned?: ValidationFunction<boolean>;
    leased?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentUpdateFormOverridesProps = {
    EquipmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    department?: PrimitiveOverrideProps<TextFieldProps>;
    owned?: PrimitiveOverrideProps<SwitchFieldProps>;
    leased?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipment?: Equipment;
    onSubmit?: (fields: EquipmentUpdateFormInputValues) => EquipmentUpdateFormInputValues;
    onSuccess?: (fields: EquipmentUpdateFormInputValues) => void;
    onError?: (fields: EquipmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentUpdateFormInputValues) => EquipmentUpdateFormInputValues;
    onValidate?: EquipmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentUpdateForm(props: EquipmentUpdateFormProps): React.ReactElement;
