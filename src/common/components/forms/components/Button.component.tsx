import { ButtonProps } from "./button.types";

function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}

export default Button;
