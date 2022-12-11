import { FormValues } from "../interfaces/interfaces";
import { UserInfo } from "../interfaces/interfaces";

type Actions =
  | { type: "SET_USER_INFO"; payload: UserInfo }
  | { type: "SET_SHOP_TOKEN"; payload: string }
  | { type: "SET_GOOGLE_TOKEN"; payload: string }
  | { type: "CHANGE_STEP"; payload: number }
  | { type: "CLEAN_STATE" };

const formValuesReducer = (state: FormValues, action: Actions) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        password: action.payload.password,
      };
    case "SET_SHOP_TOKEN":
      return {
        ...state,
        shop_token: action.payload,
      };
    case "SET_GOOGLE_TOKEN":
      return {
        ...state,
        google_token: action.payload,
      };
    case "CHANGE_STEP":
      return {
        ...state,
        step: action.payload,
      };
    case "CLEAN_STATE":
      return (state = {
        name: "",
        email: "",
        password: "",
        shop_token: "",
        google_token: "",
        step: 1,
      });
    default:
      return state;
  }
};

export default formValuesReducer;
