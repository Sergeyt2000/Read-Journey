import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import PhonePreview from '../../components/PhonePreview/PhonePreview.jsx';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <RegistrationForm />
      <PhonePreview />
      </div>
    );
}