import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Disclosure } from './Disclosure'



test('A default Disclosure', () => {
  const tree = renderer.create(<Disclosure title='Disclosure'>Hello</Disclosure>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('An expaned Disclosure', () => {
  const tree = renderer.create(<Disclosure title='Disclosure' collapsed={false}>Hello</Disclosure>).toJSON()
  expect(tree).toMatchSnapshot()
})
