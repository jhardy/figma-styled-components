import * as React from 'react'
import styled from 'styled-components'
import { Text } from '../Text'

/* TODO Type label better to accept, strings, numbers, and SVG */
export interface StripOption {
  value: string
  label: JSX.Element | string
}


// TODO figure out why onchange even fires twice here
export interface OptionStripProps {
  options: StripOption[]
  defaultSelected?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const OptionStripContainer = styled.div`
  box-sizing: border-box;
  border-radius: 2px;
  display: inline-flex;
  height: 24px;
  justify-content: center;

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`

const OptionStripOption = styled.div<{ selected?: boolean }>`
  align-items: center;
  background: ${(props) => (props.selected ? 'rgba(0,0,0,0.1)' : 'transparent')};
  box-sizing: border-box;
  border-radius: 2px;
  display: inline-flex;
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

class OptionStripFactory extends React.Component<
  OptionStripProps,
  { options: StripOption[]; defaultSelected: number; selectedOption: string }
> {
  constructor (props: OptionStripProps) {
    super(props)
    this.state = {
      defaultSelected: this.props.defaultSelected || 0,
      options: this.props.options,
      selectedOption: this.props.defaultSelected
        ? this.props.options[this.state.defaultSelected].value
        : this.props.options[0].value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  public render () {
    return (
      <OptionStripContainer {...this.props}>
        {this.props.options.map((option, i) => {
          return (
            <OptionStripOption
              key={`options-strip-item-` + option.value}
              selected={option.value === this.state.selectedOption}
            >
              <input
                type='radio'
                name={`options-strip-${this.props.options[0].label}`}
                onChange={this.handleChange}
                value={option.value}
                checked={
                  option.value === this.state.selectedOption ? true : false
                }
              />
              <Text size='small'>
                {option.label ? option.label : option.value}
              </Text>
            </OptionStripOption>
          )
        })}
      </OptionStripContainer>
    )
  }

  private handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    event.persist()
    this.setState(
      {
        selectedOption: event.target.value
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(event)
        }
      }
    )
  }
}

export const OptionStrip = styled(OptionStripFactory)``
