import * as React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../SectionTitle'

export interface SectionProps {
  title: string
  actions?: JSX.Element
  collapsed?: boolean
}



class SectionFactory extends React.Component<SectionProps,{ collapsed: boolean}> {
  constructor (props: SectionProps) {
    super(props)
    this.state = {
      collapsed: this.props.collapsed || false
    }
  }

  public render () {
    return(
      <SectionWrapper collapsed={this.state.collapsed} {...this.props}>
          <SectionHeader>
            <SectionTitle>{this.props.title}</SectionTitle>
            {this.props.actions &&
              <SectionActions>{this.props.actions}</SectionActions>
            }
          </SectionHeader>
          <SectionContent>
            {this.props.children}
          </SectionContent>
      </SectionWrapper>
    )
  }
}

const SectionContent = styled.div``

const SectionActions = styled.div``

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const SectionWrapper = styled.section<SectionProps>`
  padding: 8px;

  ${SectionHeader} {
    opacity: ${(props) => props.collapsed ? 0.5 : 1 };
  }

  ${SectionContent} {
    display: ${(props) => props.collapsed ? 'none' : 'block'};
  }

  &:hover {
    ${SectionHeader} {
      opacity: 1;
    }
  }
`
export const Section = styled(SectionFactory)<SectionProps>`


  & + & {
    border-top: solid 1px rgba(0,0,0, 0.1);
  }
`
