import styled from "styled-components";
import { Theme } from "../../theme/types";
import { ButtonVariants } from "./types";

const getButtonStyles = (theme: Theme, variant?: ButtonVariants, disabled?: boolean) => {
  switch (variant) {
    case "primary":
      return `
          background: ${disabled ? theme.colors.background : theme.colors.primary};
          color: ${disabled? theme.colors.primary : theme.colors.white};
          border: 1px solid ${theme.colors.primary};
        `;
    case "secondary":
      return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
        `;
    default:
      return "";
  }
};

export const StyledButton = styled.button<{ variant?: ButtonVariants, disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.8")};
  }

  ${({ theme, variant, disabled }) => getButtonStyles(theme as Theme, variant, disabled)}
`;
