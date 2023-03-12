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
export declare type EquipmentLeasedCreateFormInputValues = {
    startDate?: string;
    endDate?: string;
};
export declare type EquipmentLeasedCreateFormValidationValues = {
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentLeasedCreateFormOverridesProps = {
    EquipmentLeasedCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentLeasedCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentLeasedCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipmentLeasedCreateFormInputValues) => EquipmentLeasedCreateFormInputValues;
    onSuccess?: (fields: EquipmentLeasedCreateFormInputValues) => void;
    onError?: (fields: EquipmentLeasedCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentLeasedCreateFormInputValues) => EquipmentLeasedCreateFormInputValues;
    onValidate?: EquipmentLeasedCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentLeasedCreateForm(props: EquipmentLeasedCreateFormProps): React.ReactElement;
