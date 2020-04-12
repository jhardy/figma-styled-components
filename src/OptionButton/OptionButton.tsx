import * as React from 'react'
import styled from 'styled-components'
import { IconNames } from '../Icon/IconNames'

export interface OptionButtonProps {
  icon: IconNames | JSX.Element | string
  toggled?: boolean
  disabled?: boolean
  onClick?: React.ReactEventHandler
}

export const OptionButtonContent = styled.div<{toggled: boolean, disabled: boolean}>`
  align-items: center;
  border-radius: 2px;
  background: ${ (props) => props.toggled ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
  border: none;
  display:flex;
  height: 24px;
  justify-content: center;
  opacity: ${ (props) => props.disabled ? '0.3' : '1' };
  outline: none;
  pointer-events: none;
  text-align: center;
  min-width: 24px;
  width: 24px;
`

const OptionButtonWrapper = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 2px;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
  outline: none;
  color: #000;

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1)
  }

  &:active ${OptionButtonContent} {
    background: ${(props) => props.disabled ? 'transparent' : 'rgba(0, 0, 0, 0.1)'};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px #18A0FB;
  }
`

const OptionButtonFactory: React.FC<OptionButtonProps> = ({ icon, toggled, onClick, disabled, ...props }) => {
  return(
    <OptionButtonWrapper onClick={onClick} disabled={disabled || false} {...props}>
      <OptionButtonContent toggled={toggled || false} disabled={disabled || false} >
        {icon}
      </OptionButtonContent>
    </OptionButtonWrapper>
  )
}

export const OptionButton = styled(OptionButtonFactory)``
