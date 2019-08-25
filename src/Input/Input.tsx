import styled from 'styled-components'
// TOOD: Figuure out how to make icon prop accept an item from Icon Names or a user supplied svg
// import { IconNames } from '../Icon'

import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
}

const InputFactory: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <InputWrapper icon={icon}>
      {icon && <InputIconWrapper className='icon-holder'>{icon}</InputIconWrapper>}
      <input {...props} />
    </InputWrapper>
  )
}

export const InputIconWrapper = styled.div`
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
`

export const InputWrapper = styled.div<InputProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 1px 0 1px 0;
  padding: ${(props) => (props.icon ? '8px 4px 8px 0' : '8px 4px 8px 8px')};
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.005em;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }

  &:active,
  &:focus-within {
    color: #000000;
    box-shadow: inset 0 0 0 2px #18a0fb;
  }

  &::selection {
    color: #000000;
    background-color: rgba(24, 145, 251, 0.3);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.3);
  }
`

export const Input = styled(InputFactory)``
