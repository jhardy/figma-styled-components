import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Icon } from '../Icon'
import { Input } from './Input'

test('A default Input', () => {
  const tree = renderer.create(<Input />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('A  Input with placeholder', () => {
  const tree = renderer.create(<Input placeholder='Hello' value='test' />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A  Input with Icon', () => {
  const tree = renderer.create(<Input icon={<Icon name='Adjust' />} placeholder='Hello' value='icon' />).toJSON()
  expect(tree).toMatchSnapshot()
})



