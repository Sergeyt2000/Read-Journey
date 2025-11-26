import css from "./LoginForm.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { loginSchema } from "../formSchema";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations.js";
import AuthHead from "../AuthHead/AuthHead.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    }
    return (
      <div className={css.login_form}>
        <AuthHead />
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className={css.error} />
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
            <div>
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