import * as React from 'react'
import styled from 'styled-components'
import { Text } from '../Text'

/* TODO Type label better to accept, strings, numbers, and SVG */
export interface StripOption {
  value: string
  label: any
}

export interface OptionStripProps {
  options: StripOption[]
  defaultSelected?: number,
  onChange?: React.ReactEventHandler
}

const OptionStripContainer = styled.div`
  box-sizing: border-box;
  border-radius:2px;
  display: inline-flex;
  height: 24px;
  justify-content: center;

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
  }

`


const OptionStripOption = styled.div<{selected?: boolean}>`
  align-items: center;
  background: ${(props) => props.selected ? 'rgba(0,0,0,0.1)' : 'transparent'};
  box-sizing: border-box;
  border-radius: 2px;
  display:inline-flex;
  flex-grow: 1;
  height: 24px;
  justify-content: center;
  min-width: 24px;
  padding: 5px;
  position: relative;

  ${Text} {
    line-height: 0;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

`

const OptionStripFactory: React.FC<OptionStripProps> = ({ options, defaultSelected, onChange, ...props }) => {
  const [selectedOption, setOption] = React.useState(options[0].value)

  const handleChange = (event: any) => {
    setOption(event.target.value)

    if (onChange) {
      onChange(event)
    }
  }

  return(
    <OptionStripContainer {...props}>
      {options.map((option, i) => {
        return(
        <OptionStripOption key={`options-strip-item-` + option.value} selected={option.value === selectedOption}>
          <input type='checkbox' onChange={handleChange} value={option.value} checked={option.value === selectedOption ? true : false} />
          <Text size='ui12'>{option.label ? option.label : option.value}</Text>
        </OptionStripOption>)
      })}
    </OptionStripContainer>
  )
}

export const OptionStrip = styled(OptionStripFactory)``
