import {
  Tab as ReachTab,
  TabList as ReachTabList,
  TabPanel as ReachPanel,
  TabPanels as ReachPanels,
  Tabs as ReachTabs
} from '@reach/tabs'
import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../SectionTitle'

export const Tabs = styled(ReachTabs)``


export const TabList = styled(ReachTabList)`
  border-bottom: solid 1px rgba(0,0,0,0.1);
`

const StyledTab = styled(ReachTab)`
  border: none;
  background: #fff;
  outline: none;
  padding: 0 8px;
  ${SectionTitle} {
    opacity: 0.5;
  }

  &[aria-selected='true'] {
    ${SectionTitle} {
      opacity: 1;
    }
  }

  &:hover {
    ${SectionTitle} {
      opacity: 1;
    }
  }
`

export const Tab: React.FC = (props) => {
  return (
    <StyledTab>
      <SectionTitle>{props.children}</SectionTitle>
    </StyledTab>
  )
}

export const TabPanels = styled(ReachPanels)``
export const TabPanel = styled(ReachPanel)``
