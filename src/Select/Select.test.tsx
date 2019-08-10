import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Select } from './Select'


const options = [{ label: 'Option One', value: 'one' },
{ label: 'Option Two', value: 'two' },
{ label: 'Option Three', value: 'three' }]

const groupedOptions = [{
  label: 'Group 1',
  // tslint:disable-next-line: object-literal-sort-keys
  group: [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' }
  ]
},
  {
    label: 'Group 2',
    // tslint:disable-next-line: object-literal-sort-keys
    group: [
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' }
    ]
  },
  {
    label: 'Group 3',
    // tslint:disable-next-line: object-literal-sort-keys
    group: [
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' }
    ]
  }
]
test('A default Select', () => {
  const tree = renderer.create(<Select options={options} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Select with grouped options', () => {
  const tree = renderer.create(<Select options={groupedOptions} />).toJSON()
  expect(tree).toMatchSnapshot()
})



