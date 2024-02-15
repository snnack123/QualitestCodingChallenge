import { FC, ReactNode } from "react";
import { StyledButton } from "./styles";
import { ButtonVariants } from "./types";

interface Props {
  children?: ReactNode;
  ariaLabel: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<Props> = ({ children, ariaLabel, variant, disabled, onClick }) => (
  <StyledButton aria-label={ariaLabel} disabled={disabled} variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);
