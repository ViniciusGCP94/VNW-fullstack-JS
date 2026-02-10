import S from "./button.module.scss";

function Button({ 
  children, 
  text, 
  variant = "primary",
  onClick,
  type = "button"
}) {
  return (
    <button 
      className={`${S.btnBase} ${S[variant]}`}
      onClick={onClick}
      type={type}
    >
      {children || text}
    </button>
  );
}

export default Button;