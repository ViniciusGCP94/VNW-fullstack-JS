import S from "./button.module.scss";

function Button({ children, variant = "primary" }) {

  return (
    <button className={`${S.btnBase} ${S[variant]}`}>
      {children}
    </button>
  );
}

export default Button;