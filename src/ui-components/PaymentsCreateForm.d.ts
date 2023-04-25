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
export declare type PaymentsCreateFormInputValues = {
    amount?: number;
    dayIssued?: string;
    dayFulfilled?: string;
    isPaid?: boolean;
};
export declare type PaymentsCreateFormValidationValues = {
    amount?: ValidationFunction<number>;
    dayIssued?: ValidationFunction<string>;
    dayFulfilled?: ValidationFunction<string>;
    isPaid?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentsCreateFormOverridesProps = {
    PaymentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    dayIssued?: PrimitiveOverrideProps<TextFieldProps>;
    dayFulfilled?: PrimitiveOverrideProps<TextFieldProps>;
    isPaid?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PaymentsCreateFormProps = React.PropsWithChildren<{
    overrides?: PaymentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PaymentsCreateFormInputValues) => PaymentsCreateFormInputValues;
    onSuccess?: (fields: PaymentsCreateFormInputValues) => void;
    onError?: (fields: PaymentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentsCreateFormInputValues) => PaymentsCreateFormInputValues;
    onValidate?: PaymentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentsCreateForm(props: PaymentsCreateFormProps): React.ReactElement;
