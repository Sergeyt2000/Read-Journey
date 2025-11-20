import css from "./PhonePreview.module.css";

export default function PhonePreview() {
  return (
    <div className={css.phoneLogo}>
      <picture className={css.phoneImg}>
        <source
          media="(min-width: 1440px)"
          srcSet="/public/images/phone_desk@1x.png 1x,
            /public/images/phone_desk@2x.png 2x"
        />
        <source
          sizes="(max-width: 767px)"
          srcSet="/public/images/auth/phone_mob@1x.png 1x,
            /public/images/phone_mob@2x.png 2x"
        />
        <img
          src="/public/images/phone_desk@1x.png"
          alt="App Preview"
        />
      </picture>
    </div>
  );
}
