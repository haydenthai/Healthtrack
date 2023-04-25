/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MedicalEncounter } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicalEncounterUpdateFormInputValues = {
    date?: string;
    practitionerSeen?: string[];
    complaints?: string;
    diagnosis?: string;
    treatmentPlan?: string;
    referralToSpecialists?: string;
    patientID?: string;
};
export declare type MedicalEncounterUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    practitionerSeen?: ValidationFunction<string>;
    complaints?: ValidationFunction<string>;
    diagnosis?: ValidationFunction<string>;
    treatmentPlan?: ValidationFunction<string>;
    referralToSpecialists?: ValidationFunction<string>;
    patientID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicalEncounterUpdateFormOverridesProps = {
    MedicalEncounterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    practitionerSeen?: PrimitiveOverrideProps<SelectFieldProps>;
    complaints?: PrimitiveOverrideProps<TextFieldProps>;
    diagnosis?: PrimitiveOverrideProps<TextFieldProps>;
    treatmentPlan?: PrimitiveOverrideProps<TextFieldProps>;
    referralToSpecialists?: PrimitiveOverrideProps<TextFieldProps>;
    patientID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicalEncounterUpdateFormProps = React.PropsWithChildren<{
    overrides?: MedicalEncounterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medicalEncounter?: MedicalEncounter;
    onSubmit?: (fields: MedicalEncounterUpdateFormInputValues) => MedicalEncounterUpdateFormInputValues;
    onSuccess?: (fields: MedicalEncounterUpdateFormInputValues) => void;
    onError?: (fields: MedicalEncounterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicalEncounterUpdateFormInputValues) => MedicalEncounterUpdateFormInputValues;
    onValidate?: MedicalEncounterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MedicalEncounterUpdateForm(props: MedicalEncounterUpdateFormProps): React.ReactElement;
