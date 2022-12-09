import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .max(100, "Too Long!")
    .required("This field cannot be empty"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(60, "Too Long!")
    .required("This field cannot be empty"),
  password: Yup.string()
    .min(6, "Password must consist at least 6 characters")
    .max(60, "Too Long!")
    .required("This field cannot be empty"),
});
