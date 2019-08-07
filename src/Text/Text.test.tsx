import * as React from 'react'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Text } from './Text'


test('A default Text', () => {
  const tree = renderer.create(<Text>Hello</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})


test('Text can be resized', () => {
  const tree = renderer.create(<Text size="large">Hello</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Text can have a different weight', () => {
  const tree = renderer.create(<Text weight="bold">Hello</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})


test('Text can be on negative', () => {
  const tree = renderer.create(<Text size="large" onNegative>Hello</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})



