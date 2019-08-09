import styled from "styled-components";
import * as React from "react";

import {Text} from '../Text'

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.2s;
  transition: background-color 0 0.2s;
  border: 1px solid #000000;
  border-radius: 12px;
  background-color: #ffffff;

  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 10px;
    height: 10px;
    content: "";
    transition: transform 0.2s;
    transition: background-color 0 0.2s;
    border: 1px solid #000000;
    border-radius: 50%;
    background-color: white;
  }
`;

export interface SwitchContainerProps {
  checked?: boolean;
  onChange: () => void;
}

const SwitchContainerFactory: React.FC<SwitchContainerProps> = ({ onChange, checked, ...props }) => {
  return (
    <div {...props}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <SwitchSlider />
    </div>
  );
};

const SwitchContainer = styled(SwitchContainerFactory)`
  position: relative;
  width: 24px;
  height: 12px;
  margin: 10px 16px 10px 8px;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:checked + ${SwitchSlider} {
    background-color: #000000;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + ${SwitchSlider}:before {
    transform: translateX(12px);
  }
`;

export interface SwitchProps {
  onChange?: () => void
  checked?: boolean
  label: string
}
const SwitchFactory: React.FC<SwitchProps> = ({ checked, onChange, label, ...props }) => {
  return (
    <label {...props}>
      <SwitchContainer onChange={() => {onChange}} checked={checked} />
      <Text>{label}</Text>
    </label>
  );
};

export const Switch = styled(SwitchFactory)`
  position: relative;
  display: flex;
  align-items: center;
  align-self: 1;
  flex-direction: row;
  cursor: default;
`;
