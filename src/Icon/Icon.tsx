import * as React from 'react'
import styled from 'styled-components'
import * as IconGlyph from './components'
import { IconNames } from './IconNames'

export interface IconProps {
  name: IconNames
  color?: string
  size: number
}
const IconFactory: React.FC<IconProps> = ({ name, color, size, ...props }) => {
  const IconSVG = IconGlyph[name]
  return(
    <div {...props}>
      <IconSVG />
    </div>
  )
}

export const Icon = styled(IconFactory)`
  color: ${(props) => props.color || 'currentColor'};
  line-height: 0;
`
