import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    // .max(16, "Name must be at most 16 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    // .max(128, "Email must be at most 128 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 8 characters")
    // .max(128, "Password must be at most 128 characters")
    .required("Password is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
// .max(128, "Email must be at most 128 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 8 characters")
    // .max(128, "Password must be at most 128 characters")
    .required("Password is required"),
});