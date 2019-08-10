import * as React from 'react'
import styled from 'styled-components'

import { Text } from '../Text'

export interface SelectOptionItem {
  label: string
  value?: string
}

export interface SelectOptions extends SelectOptionItem {
  group?: SelectOptionItem[]
}

export interface SelectProps {
  options: SelectOptions[]
  onChange?: any
  placeholder?: string
  noDefault?: boolean
}

const SelectedCheck = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.2069 5.20724L7.70688 10.7072L6.99977 11.4144L6.29267 10.7072L3.29267 7.70724L4.70688 6.29303L6.99977 8.58592L11.7927 3.79303L13.2069 5.20724Z'
        fill='white'
        fillOpacity='1'
      />
    </svg>
  )
}

const SelectItem = styled.li<{ selected?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 0 16px 0 32px;
  list-style-type: none;
  text-align: left;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    left: 6px;
    top: 4px;
    pointer-events: none;
  }

  &:hover {
    background-color: #18a0fb;
  }
`

const SelectGroup = styled.div`
`

const SelectChevronIcon = (props: any) => {
  return(
  <div {...props}><svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path fillRule='evenodd' clipRule='evenodd' d='M3.64645 4.35359L0.646454 1.35359L1.35356 0.646484L4.00001 3.29293L6.64645 0.646484L7.35356 1.35359L4.35356 4.35359L4.00001 4.70714L3.64645 4.35359Z' fill='currentColor' />
  </svg>
  </div>
  )
}

const SelectChevron = styled(SelectChevronIcon)`
`

const SelectTrigger = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 1px 0 1px 0 !important;
  padding: 0 8px 0 8px;
  text-align: left;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.005em;

  ${SelectChevron} {
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    ${SelectChevron} {
      color: rgba(0, 0, 0, 1);
    }
  }

  &:focus {
    padding: 0 7px 0 7px;
    border: 2px solid #18a0fb;
    outline: none;
    justify-content: space-between;

    ${SelectChevron} {
      color: rgba(0, 0, 0, 1);
    }
  }
`

export const SelectFactory: React.FC<SelectProps> = ({
  options,
  onChange,
  placeholder,
  noDefault,
  ...props
}) => {
  const selectInput = React.useRef<HTMLSelectElement>()

  const getInitalValue = (optionItems: SelectOptions[]) => {
    if (optionItems[0].group) {
      return optionItems[0].group[0].label ? { value: optionItems[0].group[0].value, label: optionItems[0].group[0].label } : { value: optionItems[0].group[0].value, label: optionItems[0].group[0].value }
    } else {
      return optionItems[0].label ? { value: optionItems[0].value, label: optionItems[0].label } : { value: optionItems[0].value, label: optionItems[0].value }
    }

  }

  const [selectedOption, setOption] = React.useState(getInitalValue(options))
  const [hasMadeSelection, setHasMadeSelection] = React.useState(placeholder ? false : true)
  const [showOptions, setOptionsVisiblity] = React.useState(false)

  const handleClick = (event: React.MouseEvent) => {
    setHasMadeSelection(true)
    // const ensureLabel = label === '' ? value : label
    const target = event.currentTarget
    // console.log(target, target.getAttribute('data-value'))
    const value = target.getAttribute('data-value') || ''
    const label = target.getAttribute('data-label') || ''

    setOption({ value, label })
    setOptionsVisiblity(false)
  }


  const wrapperRef = React.useRef(null)

  const toggleSelect = (e: any) => {
    setOptionsVisiblity(!showOptions)

  }

  function useOutsideAlerter (ref: any) {

    function handleClickOutside (event: any) {
      if (ref.current && !ref.current.contains(event.target)) {

        toggleSelect(event)
      }
    }

    React.useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }

  useOutsideAlerter(wrapperRef)


  return (
    <div {...props} ref={wrapperRef}>

      <select
        ref={selectInput as any/* this is :(, fix soon!*/}
        onChange={onChange}
        defaultValue={placeholder ? '' : selectedOption.value}
      >
        {noDefault && <option />}
        {options.map((option) => {
          return option.group ?
            <optgroup label={option.label} key={`opt-group-` + option.label}>
              {option.group.map((item) => {
                return <option key={`group` + item.label} value={item.value || item.label}>{item.label}</option>
              })}
            </optgroup>
            :
            <option key={option.label} value={option.value || option.label}>
            {option.label}
            </option>
        })}
      </select>
      <SelectTrigger onClick={toggleSelect}>
        <Text>{placeholder && !hasMadeSelection ? placeholder : selectedOption.label}</Text>
        <SelectChevron />
      </SelectTrigger>
      <ul className={showOptions ? 'show-options' : undefined}>
        {options.map((option, i) => {
          return option.group ?
            <SelectGroup key={`group-parent-` + i}>
              {option.group.map((item) => {
                return (
                <SelectItem key={`group-` + item.label} id={item.value || item.label} data-value={item.value} data-label={item.label || item.value} onClick={handleClick}>
                  {selectedOption.value === item.value && hasMadeSelection && <SelectedCheck />}
                  <Text size='ui12' inverted={true}>
                    {item.label}
                  </Text>
                </SelectItem>)
              })}
            </SelectGroup>
            :
            <SelectItem
              key={`list-` + i}
              id={option.value}
              data-value={option.value}
              data-label={option.label || option.value}
              onClick={handleClick}
            >
              {selectedOption.value === option.value && <SelectedCheck />}
              <Text size='ui12' inverted={true}>
                {option.label || option.value}
              </Text>
            </SelectItem>

        })}
      </ul>
    </div>
  )
}

export const Select = styled(SelectFactory)`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  flex-wrap: nowrap;
  width: 100%;

  select {
    display: none;
  }

  ul {
    position: absolute;
    z-index: 2;
    top: 31px;
    right: 0;
    left: 0;
    display: block;
    overflow: auto;
    width: 100%;
    margin: 0;
    padding: 8px 0 8px 0;
    list-style-type: none;
    opacity: 0;
    box-shadow: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15);
    background-color: #222222;
    display: none;

    &.show-options {
      opacity: 1;
      display: block;
    }
  }

  ${SelectGroup}:not(:first-child) {
    padding: 8px 0 0 0;
    margin-top: 8px;
    border-top: solid 1px rgba(255, 255, 255, 0.2);
  }

  ${SelectGroup}:last-child {
    padding-bottom: 0;
  }
`
