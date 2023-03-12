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
export declare type EquipmentOwnedCreateFormInputValues = {
    datePurchased?: string;
    warranty?: string;
};
export declare type EquipmentOwnedCreateFormValidationValues = {
    datePurchased?: ValidationFunction<string>;
    warranty?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentOwnedCreateFormOverridesProps = {
    EquipmentOwnedCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    datePurchased?: PrimitiveOverrideProps<TextFieldProps>;
    warranty?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentOwnedCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentOwnedCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipmentOwnedCreateFormInputValues) => EquipmentOwnedCreateFormInputValues;
    onSuccess?: (fields: EquipmentOwnedCreateFormInputValues) => void;
    onError?: (fields: EquipmentOwnedCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentOwnedCreateFormInputValues) => EquipmentOwnedCreateFormInputValues;
    onValidate?: EquipmentOwnedCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentOwnedCreateForm(props: EquipmentOwnedCreateFormProps): React.ReactElement;
