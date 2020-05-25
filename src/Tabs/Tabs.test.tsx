import 'jest-styled-components'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from './Tabs'


test('A set of tabs', () => {
  const tree = renderer.create(<Tabs>
    <TabList>
      <Tab>Design</Tab>
      <Tab>Prototype</Tab>
      <Tab>Code</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>panel 1</TabPanel>
      <TabPanel>panel 2</TabPanel>
      <TabPanel>panel 3</TabPanel>
    </TabPanels>
  </Tabs>).toJSON()
  expect(tree).toMatchSnapshot()
})
