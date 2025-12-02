import css from "./LoginForm.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { loginSchema } from "../formSchema";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations.js";
import AuthHead from "../AuthHead/AuthHead.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const togglePassword = () => {
    setType(type === "password" ? "text" : "password");
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values)).unwrap();
      resetForm();
      navigate("/recommended");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css.login_form}>
      <AuthHead />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.floatingLabel}>
              <span className={css.labelText}>Mail:</span>
              <Field name="email" type="email" className={css.input} />
            </label>
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.floatingLabel}>
              <span className={css.labelText}>Password:</span>
              <Field
                name="password"
                type={type}
                className={`${css.input} ${css.leftPadding}`}
              />
              <button
                type="button"
                onClick={togglePassword}
                className={css.eyeBtn}
              >
                <svg className={css.eyeIco} width="20" height="20">
                  {type === "password" ? (
                    <use href="/icons/sprite.svg#icon-eye-off" />
                  ) : (
                    <use href="/icons/sprite.svg#icon-eye" />
                  )}
                </svg>
              </button>
            </label>
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          {/* <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className={css.error} />
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            /> */}
          <div className={css.logInBtns}>
            <button type="submit" className={css.button}>
              Log In
            </button>
            <Link to="/register" className={css.registerwrapp_link}>
              Don’t have an account?
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
