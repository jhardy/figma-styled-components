import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { Button } from './Button'


test('A default Button', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A primary Button', () => {
  const tree = renderer.create(<Button variant='primary' />)
  expect(tree).toMatchSnapshot()
})

test('A destructive Button', () => {
  const tree = renderer.create(<Button destructive={true} />)
})


test('A disabped Button', () => {
  const tree = renderer.create(<Button disabled={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A full width Button', () => {
  const tree = renderer.create(<Button fullWidth={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})



