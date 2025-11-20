import { Formik, Form, ErrorMessage, Field } from "formik";
import { initialValues, registerSchema } from "../formSchema";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";
import css from "./RegistrationForm.module.css";
import AuthHead from "../AuthHead/AuthHead.jsx";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    dispatch(register(values)).unwrap();
    resetForm();
  };
  return (
    <div className={css.registration_form}>
      <AuthHead />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field name="name" type="text" placeholder="Username" />
          <ErrorMessage name="username" component="div" className={css.error} />
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" className={css.error} />
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" className={css.error} />
          <div>
            <button type="submit" className={css.button}>
              Registration
            </button>
            <Link to="/login" className={css.registerwrapp_link}>
              Already have an account?
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
