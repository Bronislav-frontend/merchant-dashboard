import { FormValues } from "../interfaces/interfaces";

export const checkNextButtonEnabled = (step: number, values: FormValues) => {
  switch (step) {
    case 1:
      return values.name !== "" ? true : false;
    case 2:
      return values.shop_token !== "" ? true : false;
    default:
      return false;
  }
};
