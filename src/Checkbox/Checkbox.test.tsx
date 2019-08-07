import * as React from 'react'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Checkbox } from './Checkbox'


test('A default Checkbox', () => {
  const tree = renderer.create(<Checkbox label="A checkbox" />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('A checked Checkbox', () => {
  const tree = renderer.create(<Checkbox label="A checked checkbox" checked />).toJSON()
  expect(tree).toMatchSnapshot()
})


