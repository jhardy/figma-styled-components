import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { Text } from '../Text'

export interface DisclosureProps {
  title: string
  collapsed?: boolean
}



class DisclosureFactory extends React.Component<DisclosureProps,{ collapsed: boolean}> {
  constructor (props: DisclosureProps) {
    super(props)
    this.state = {
      collapsed: this.props.collapsed || true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  public render () {
    return(
      <DisclosureWrapper collapsed={this.state.collapsed} {...this.props}>
          <DisclosureHeader onClick={this.handleClick}>
            {this.state.collapsed ? <Icon name='CaretRight' /> : <Icon name='CaretDown' />}
            <Text>{this.props.title}</Text>
          </DisclosureHeader>
          {!this.state.collapsed &&
             <DisclosureContent>
             {this.props.children}
           </DisclosureContent>
          }
      </DisclosureWrapper>
    )
  }

  private handleClick () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
}

const DisclosureContent = styled.div`
  padding-left: 22px;
`

const DisclosureHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;

  ${Icon} {
    margin-right: 6px;
    margin-top: -3px;
  }
`

const DisclosureWrapper = styled.section<DisclosureProps>``

export const Disclosure = styled(DisclosureFactory)<DisclosureProps>``
