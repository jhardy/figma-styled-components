import * as React from 'react'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button } from './Button'


test('A default Button', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('A primary Button', () => {
  const tree = renderer.create(<Button variant="primary" />)
  expect(tree).toMatchSnapshot()
} )

test('A destructive Button', () => {
  const tree = renderer.create(<Button destructive />)
})


test('A disabped Button', () => {
  const tree = renderer.create(<Button disabled />).toJSON()
  expect(tree).toMatchSnapshot()
})


