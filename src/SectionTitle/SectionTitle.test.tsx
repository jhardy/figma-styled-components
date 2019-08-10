import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { SectionTitle } from './SectionTitle'

test('A default SectionTitle', () => {
  const tree = renderer.create(<SectionTitle>Hello</SectionTitle>).toJSON()
  expect(tree).toMatchSnapshot()
})


