import * as React from 'react'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Input } from './Input'


test('A default Input', () => {
  const tree = renderer.create(<Input  />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('A  Input with placeholder', () => {
  const tree = renderer.create(<Input placeholder="Hello" />).toJSON()
  expect(tree).toMatchSnapshot()
})


