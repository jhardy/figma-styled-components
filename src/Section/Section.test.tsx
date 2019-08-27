import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Icon } from '../Icon'
import { Section } from './Section'



test('A default Section', () => {
  const tree = renderer.create(<Section title='Section'>Hello</Section>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Section with actions', () => {
  const tree = renderer.create(<Section title='Section' actions={<Icon name='Plus' />}>Hello</Section>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A collapsed Section', () => {
  const tree = renderer.create(<Section title='Section' actions={<Icon name='Plus' />} collapsed={true}>Hello</Section>).toJSON()
  expect(tree).toMatchSnapshot()
})

