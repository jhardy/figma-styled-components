import * as React from 'react'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Label } from './Label'


test('A default Label', () => {
  const tree = renderer.create(<Label>Hello</Label>).toJSON()
  expect(tree).toMatchSnapshot()
})


