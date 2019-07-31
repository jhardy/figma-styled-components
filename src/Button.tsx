
import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | undefined;

interface ButtonProps {
  variant?: ButtonVariants;
  destructive?: boolean;
  disabled?: boolean;
}

const getButtonStyles = (
  variant: ButtonVariants,
  disabled: boolean
) => {
  switch (variant) {
    case "primary":
      return css`
        color: #ffffff;
        background-color: ${disabled ? "rgba(0, 0, 0, 0.3)" : "#18a0fb"};
        font-family: "Inter", sans-serif;
        line-height: 16px;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0.01em;

        &:active,
        &:focus {
          border: 2px solid rgba(0, 0, 0, 0.3);
        }
      `;
    default:
      return css`
        color: ${disabled ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.8)"};
        border: ${disabled
          ? "1px solid rgba(0, 0, 0, 0.3)"
          : "1px solid rgba(0, 0, 0, 0.8)"};
        background-color: #ffffff;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0.005em;

        &:active,
        &:focus {
          padding: 4px 15px 4px 15px;
          border: 2px solid #18a0fb;
        }
      `;
  }
};



const getDestructiveStyles = (variant: ButtonVariants) => {
  switch (variant) {
    case "primary":
      return css`
        color: #ffffff;
        background-color: #f24822;

        &:active,
        &:focus {
          border: 2px solid rgba(0, 0, 0, 0.3);
        }
      `;
    default:
      return css`
        color: #f24822;
        border: 1px solid #f24822;
        background-color: #ffffff;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0.005em;

        &:active,
        &:focus {
          padding: 4px 15px 4px 15px;
          border: 2px solid #f24822;
        }
      `;
  }
};


export const Button = styled.button<ButtonProps>`
 display: inline-block;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  margin: 1px 0 1px 0;
  padding: 5px 16px 5px 16px;
  border: 2px solid transparent;
  border-radius: 6px;
  outline: none;
  ${props => getButtonStyles(props.variant, props.disabled || false)};
  ${props =>
    props.destructive ? getDestructiveStyles(props.variant) : undefined}
  opacity: ${props => (props.disabled && props.destructive ? 0.4 : 1)};
`;
