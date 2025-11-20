import LoginForm from "../../components/LoginForm/LoginForm";
import PhonePreview from "../../components/PhonePreview/PhonePreview";
import css from "./LoginPage.module.css";

export default function LoginPage() {
    return (
        <div className={css.container}>
            <LoginForm />
            <PhonePreview />
        </div>
      );
}