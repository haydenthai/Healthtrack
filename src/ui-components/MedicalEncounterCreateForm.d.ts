/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicalEncounterCreateFormInputValues = {
    date?: string;
    practitionerSeen?: string[];
    complaints?: string;
    diagnosis?: string;
    treatmentPlan?: string;
    referralToSpecialists?: string;
    patientID?: string;
};
export declare type MedicalEncounterCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    practitionerSeen?: ValidationFunction<string>;
    complaints?: ValidationFunction<string>;
    diagnosis?: ValidationFunction<string>;
    treatmentPlan?: ValidationFunction<string>;
    referralToSpecialists?: ValidationFunction<string>;
    patientID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicalEncounterCreateFormOverridesProps = {
    MedicalEncounterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    practitionerSeen?: PrimitiveOverrideProps<SelectFieldProps>;
    complaints?: PrimitiveOverrideProps<TextFieldProps>;
    diagnosis?: PrimitiveOverrideProps<TextFieldProps>;
    treatmentPlan?: PrimitiveOverrideProps<TextFieldProps>;
    referralToSpecialists?: PrimitiveOverrideProps<TextFieldProps>;
    patientID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicalEncounterCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicalEncounterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicalEncounterCreateFormInputValues) => MedicalEncounterCreateFormInputValues;
    onSuccess?: (fields: MedicalEncounterCreateFormInputValues) => void;
    onError?: (fields: MedicalEncounterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicalEncounterCreateFormInputValues) => MedicalEncounterCreateFormInputValues;
    onValidate?: MedicalEncounterCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicalEncounterCreateForm(props: MedicalEncounterCreateFormProps): React.ReactElement;
