import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Input } from './Input'



test('A default Input', () => {
  const tree = renderer.create(<Input />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('A  Input with placeholder', () => {
  const tree = renderer.create(<Input placeholder='Hello' />).toJSON()
  expect(tree).toMatchSnapshot()
})


