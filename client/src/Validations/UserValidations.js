import * as yup from "yup";
export const userSchemaValidation = yup.object().shape(
    {
    name:yup.string().required("Must input name"),
    email:yup.string().email("Must be an email")
    .required("Email is required"),
    password:yup.string().min(4).max(20)
    .required("Password is required"),
    confirmPassword:yup.string()
    .oneOf([yup.ref("password")],"Password don't Match")
    .required("Confirm Password is required"),
});