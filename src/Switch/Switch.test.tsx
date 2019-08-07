import * as React from 'react'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Switch } from './Switch'


test('A default Switch', () => {
  const tree = renderer.create(<Switch label="A Switch" />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('A checked Switch', () => {
  const tree = renderer.create(<Switch label="A checked Switch" checked />).toJSON()
  expect(tree).toMatchSnapshot()
})


