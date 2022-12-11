import { createContext } from "react";
import { FormValues } from "../interfaces/interfaces";
import { UserInfo } from "../interfaces/interfaces";

interface FormValuesContextProps {
  formState: FormValues;
  handleAddShopToken: (token: string) => void;
  handleAddGoogleToken: (token: string) => void;
  handleAddFormValues: (values: UserInfo) => void;
  handleChangeStep: (step: number) => void;
  handleCleanState: () => void;
}

const FormValuesContext = createContext<FormValuesContextProps>(
  {} as FormValuesContextProps
);

export default FormValuesContext;
