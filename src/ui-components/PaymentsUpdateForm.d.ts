/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Payments } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PaymentsUpdateFormInputValues = {
    amount?: number;
    dayIssued?: string;
    dayFulfilled?: string;
    isPaid?: boolean;
};
export declare type PaymentsUpdateFormValidationValues = {
    amount?: ValidationFunction<number>;
    dayIssued?: ValidationFunction<string>;
    dayFulfilled?: ValidationFunction<string>;
    isPaid?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentsUpdateFormOverridesProps = {
    PaymentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    dayIssued?: PrimitiveOverrideProps<TextFieldProps>;
    dayFulfilled?: PrimitiveOverrideProps<TextFieldProps>;
    isPaid?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PaymentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    payments?: Payments;
    onSubmit?: (fields: PaymentsUpdateFormInputValues) => PaymentsUpdateFormInputValues;
    onSuccess?: (fields: PaymentsUpdateFormInputValues) => void;
    onError?: (fields: PaymentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentsUpdateFormInputValues) => PaymentsUpdateFormInputValues;
    onValidate?: PaymentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentsUpdateForm(props: PaymentsUpdateFormProps): React.ReactElement;
