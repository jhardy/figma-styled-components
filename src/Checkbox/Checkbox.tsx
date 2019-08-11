import * as React from 'react'
import styled from 'styled-components'
import { Text } from '../Text'


const CheckboxMark = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 12px;
  height: 12px;
  border: 1px solid #000000;
  border-radius: 2px;
  background-color: #ffffff;

  &:after {
    position: absolute;
    width: 10px;
    height: 10px;
    content: "";
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: center center;
  }
`

export interface CheckboxContainerProps {
  checked?: boolean,
  onChange?: () => void
}
const CheckboxContainerFacotry: React.FC<CheckboxContainerProps> = ({ onChange, checked, ...props }) => {
  return (
    <div {...props}>
      <input type='checkbox' onChange={onChange} checked={checked} />
      <CheckboxMark />
    </div>
  )
}

const CheckboxContainer = styled(CheckboxContainerFacotry)`
  position: relative;
  width: 32px;
  height: 32px;

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:checked + ${CheckboxMark} {
    border: 1px solid #18a0fb;
    background-color: #18a0fb;
  }

  input:checked ${CheckboxMark}:after {
    display: block;
  }
`


export interface CheckboxProps {
  onChange?: () => void
  checked?: boolean
  label: string
}
const CheckboxFactory: React.FC<CheckboxProps> = ({ onChange, label, checked, ...props }) => {
  return (
    <label {...props}>
      <CheckboxContainer onChange={onChange} checked={checked} />
      <Text>{label}</Text>
    </label>
  )
}

export const Checkbox = styled(CheckboxFactory)`
  display: flex;
  flex-direction: row;
  height: 28px;
  cursor: default;
  align-items: center;
`
