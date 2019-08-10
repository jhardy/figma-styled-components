import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { Checkbox } from './Checkbox'


test('A default Checkbox', () => {
  const tree = renderer.create(<Checkbox label='A checkbox' />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('A checked Checkbox', () => {
  const tree = renderer.create(<Checkbox label='A checked checkbox' checked={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})


