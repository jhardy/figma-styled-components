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
  defaultValue?: string
  value?: string
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
  { options: StripOption[]; defaultSelected: string; value: string }
> {
  constructor (props: OptionStripProps) {
    super(props)
    this.state = {
      defaultSelected: this.props.defaultValue || this.props.options[0].value,
      options: this.props.options,
      value: this.props.value ? this.props.value : this.props.defaultValue ? this.props.defaultValue : this.props.options[0].value
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
              selected={option.value === this.state.value}
            >
              <input
                type='radio'
                name={`options-strip-${this.props.options[0].label}`}
                onChange={this.handleChange}
                value={option.value}
                checked={
                  option.value === this.state.value ? true : false
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

  public componentDidUpdate (prevState: any) {
    if (this.props.value && prevState.value !== this.props.value) {
      this.setState({value: this.props.value})
    }
  }

  private updateState(value:string, event?:any) {
    this.setState(
      {
        value: value
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(event)
        }
      }
    )
  }

  private handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    event.persist()
    const value = event.target.value
    const storedEvent = event
    this.updateState(value, storedEvent)
  }
}

export const OptionStrip = styled(OptionStripFactory)``
