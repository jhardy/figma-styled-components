
import styled, { css } from 'styled-components'

export type ButtonVariants = 'primary' | undefined

export interface ButtonProps {
  variant?: ButtonVariants
  destructive?: boolean
  disabled?: boolean
}

const getButtonStyles = (
  variant: ButtonVariants,
  disabled: boolean
) => {
  switch (variant) {
    case 'primary':
      return css`
        color: #ffffff;
        background-color: ${disabled ? 'rgba(0, 0, 0, 0.3)' : '#18a0fb'};
        font-family: "Inter", sans-serif;
        line-height: 16px;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0.01em;

        &:active,
        &:focus {
          box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
        }
      `
    default:
      return css`
        color: ${disabled ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.8)'};
        box-shadow: ${disabled
          ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.3)'
          : 'inset 0 0 0 1px rgba(0, 0, 0, 0.8)'};
        background-color: #ffffff;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0.005em;

        &:active,
        &:focus {

          box-shadow: inset 0 0 0 2px #18a0fb;
        }
      `
  }
}



const getDestructiveStyles = (variant: ButtonVariants) => {
  switch (variant) {
    case 'primary':
      return css`
        color: #ffffff;
        background-color: #f24822;

        &:active,
        &:focus {
          box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
        }
      `
    default:
      return css`
        color: #f24822;
        box-shadow: inset 0 0 0 1px #f24822;
        background-color: #ffffff;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0.005em;

        &:active,
        &:focus {
          box-shadow: inset 0 0 0 2px #f24822;
        }
      `
  }
}


export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 30px;
  flex-shrink: 0;
  margin: 1px 0 1px 0;
  padding: 6px 16px 5px 16px;
  border: none;
  border-radius: 6px;
  outline: none;
  ${(props) => getButtonStyles(props.variant, props.disabled || false)};
  ${(props) =>
    props.destructive ? getDestructiveStyles(props.variant) : undefined}
  opacity: ${(props) => (props.disabled && props.destructive ? 0.4 : 1)};
`
