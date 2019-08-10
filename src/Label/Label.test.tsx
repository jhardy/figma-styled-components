import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Label } from './Label'


test('A default Label', () => {
  const tree = renderer.create(<Label>Hello</Label>).toJSON()
  expect(tree).toMatchSnapshot()
})


