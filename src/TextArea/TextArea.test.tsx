import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { TextArea } from './TextArea'

test('A default TextArea', () => {
  const tree = renderer.create(<TextArea />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A  TextArea with placeholder', () => {
  const tree = renderer.create(<TextArea placeholder='Hello' />).toJSON()
  expect(tree).toMatchSnapshot()
})



