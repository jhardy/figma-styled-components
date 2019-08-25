import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { Switch } from './Switch'


test('A default Switch', () => {
  const tree = renderer.create(<Switch label='A Switch' value='default' />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('A checked Switch', () => {
  const tree = renderer.create(<Switch label='A checked Switch' checked={true} value='checked' />).toJSON()
  expect(tree).toMatchSnapshot()
})


