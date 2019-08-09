import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { OptionStrip } from './OptionStrip'


test('A default option strip', () => {
  const tree = renderer.create(<OptionStrip options={[{value: "1", label:"One"}, {value: "2", label:"Two"}, ]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
