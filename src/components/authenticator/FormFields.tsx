import { useAuthenticator, Authenticator, SelectField, CheckboxField } from "@aws-amplify/ui-react";
import React from "react";

const customSignUpFields = () => {
    const { validationErrors } = useAuthenticator();
  
    return (
      <>
        {/* Re-use default `Authenticator.SignUp.FormFields` */}
        <Authenticator.SignUp.FormFields />
  
        <SelectField name="custom:role" label="Roles">
          <option value="Physician">Physician</option>
          <option value="PhysicianAssisstant">Physician Assisstant</option>
          <option value="Nurse">Nurse</option>
          <option value="Pharmacist">Pharmacist</option>
          <option value="LabTechnician">Lab Technician</option>
        </SelectField>
  
        {/* Append & require Terms & Conditions field to sign up  */}
        <CheckboxField
          errorMessage={validationErrors.acknowledgement as string}
          hasError={!!validationErrors.acknowledgement}
          name="acknowledgement"
          value="yes"
          label="I agree with the Terms & Conditions"
        />
      </>
    );
  };

  export default customSignUpFields;