import FormContext from "./FormContext";
import { FormValues } from "../interfaces/interfaces";
import { UserInfo } from "../interfaces/interfaces";
import { useReducer } from "react";
import formReducer from "./formReducer";

interface FormValuesProviderProps {
  children: React.ReactNode;
}

const INITIAL_STATE: FormValues = {
  name: "",
  email: "",
  password: "",
  shop_token: "",
  google_token: "",
  step: 1,
};

const FormValuesProvider = ({ children }: FormValuesProviderProps) => {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleAddShopToken = (token: string) => {
    dispatch({ type: "SET_SHOP_TOKEN", payload: token });
  };

  const handleAddGoogleToken = (token: string) => {
    dispatch({ type: "SET_GOOGLE_TOKEN", payload: token });
  };

  const handleAddFormValues = (values: UserInfo) => {
    dispatch({ type: "SET_USER_INFO", payload: values });
  };

  const handleChangeStep = (step: number) => {
    dispatch({ type: "CHANGE_STEP", payload: step });
  };

  const handleCleanState = () => {
    dispatch({ type: "CLEAN_STATE" });
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        handleAddFormValues,
        handleAddShopToken,
        handleAddGoogleToken,
        handleChangeStep,
        handleCleanState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormValuesProvider;
