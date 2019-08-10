import styled, { css } from 'styled-components'
import { OptionButton, OptionButtonContent } from '../OptionButton'


const getHoverStyles = (on: boolean, disabled: boolean) => {
  if (disabled) {
    return css`
      background: transparent;
    `
  } else {
    return css`
      background: ${on ? '#18A0FB' : 'rgba(0, 0, 0, 0.1)'};
    `
  }
}

const IconButtonFactory = styled(OptionButton)`
   background: ${(props) => props.on ? '#18A0FB' : 'transparent'};
   color: ${(props) => props.on ? '#ffffff' : '#000000'};

    &:hover {
      ${(props) => getHoverStyles(props.on || false, props.disabled || false)}
      box-shadow: none;
    }

    &:active {
      background: ${(props) => props.disabled ? 'transparent' : '#18A0FB'};
      color: ${(props) => props.disabled ? '#000' : '#fff'};

      ${OptionButtonContent} {
        background: transparent;
      }
    }

    &:focus {
      box-shadow: ${(props) => props.on ? 'inset 0 0 0 2px rgba(0, 0, 0, 0.3)' : 'inset 0 0 0 2px #18A0FB'};
    }

   ${OptionButtonContent} {
     background: transparent;
   }
`
export const IconButton = styled(IconButtonFactory)``
