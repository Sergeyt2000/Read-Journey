import { Formik, Form, ErrorMessage, Field } from "formik";
import { initialValues, registerSchema } from "../formSchema";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../redux/auth/operations.js";
import css from "./RegistrationForm.module.css";
import AuthHead from "../AuthHead/AuthHead.jsx";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const togglePassword = () => {
    setType(type === "password" ? "text" : "password");
  };
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
          {/* ===== Поле Name ===== */}
          <div className={css.fieldWrapper}>
            <label className={css.floatingLabel}>
              <span className={css.labelText}>Name:</span>
              <Field name="name" type="text" className={css.input} />
            </label>
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          {/* ===== Поле Email ===== */}
          <div className={css.fieldWrapper}>
            <label className={css.floatingLabel}>
              <span className={css.labelText}>Mail:</span>
              <Field name="email" type="email" className={css.input} />
            </label>
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          {/* ===== Поле Password з оком ===== */}
          <div className={css.fieldWrapper}>
            <label className={css.floatingLabel}>
              <span className={css.labelText}>Password:</span>
              <Field name="password" type={type} className={css.input} />
              <button
                type="button"
                onClick={togglePassword}
                className={css.eyeBtn}
                aria-label="Toggle password"
              >
                <svg width="20" height="20" className={css.eyeIcon}>
                  <use
                    href={`/icons/sprite.svg#${
                      type === "password" ? "icon-eye-off" : "icon-eye"
                    }`}
                  />
                </svg>
              </button>
            </label>
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <div className={css.btnWrapper}>
            <button type="submit" className={css.button}>
              Registration
            </button>
            <Link to="/login" className={css.registerwrapp_link}>
              Already have an account?
            </Link>
          </div>
        </Form>
        {/* <Form className={css.form}>
          <Field name="name" type="text" placeholder="Username" />
          <ErrorMessage name="name" component="div" className={css.error} />
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
        </Form> */}
      </Formik>
    </div>
  );
}
