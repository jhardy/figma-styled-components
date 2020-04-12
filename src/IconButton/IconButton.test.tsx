
import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { IconButton } from './IconButton'


const testIcon = (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fillRule='evenodd' clip-rule='evenodd' d='M11 4.5V6H12V4.5C12 2.567 10.433 1 8.5 1C6.567 1 5 2.567 5 4.5V6H6V4.5C6 3.11929 7.11929 2 8.5 2C9.88071 2 11 3.11929 11 4.5ZM11 10H12V11.5C12 13.433 10.433 15 8.5 15C6.567 15 5 13.433 5 11.5V10H6V11.5C6 12.8807 7.11929 14 8.5 14C9.88071 14 11 12.8807 11 11.5V10ZM8 5V11H9V5H8Z' fill='black' fill-opacity='0.8'/>
</svg>

)

test('A default Option Button', () => {
  const tree = renderer.create(<IconButton icon={testIcon} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A on Option Button', () => {
  const tree = renderer.create(<IconButton toggled={true} icon={testIcon} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A dsiabled Option Button', () => {
  const tree = renderer.create(<IconButton disabled={true} icon={testIcon} />).toJSON()
  expect(tree).toMatchSnapshot()
})
