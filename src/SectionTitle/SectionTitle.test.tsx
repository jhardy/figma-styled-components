import * as React from 'react'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { SectionTitle } from './SectionTitle'


test('A default SectionTitle', () => {
  const tree = renderer.create(<SectionTitle>Hello</SectionTitle>).toJSON()
  expect(tree).toMatchSnapshot()
})


