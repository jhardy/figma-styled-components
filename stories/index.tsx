import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  Button,
  Checkbox,
  IconButton,
  Input,
  Label,
  OptionButton,
  OptionStrip,
  SectionTitle,
  Select,
  Switch,
  Text
} from '../src'
import './storybook.css'

const testIcon = (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fillRule='evenodd' clip-rule='evenodd' d='M11 4.5V6H12V4.5C12 2.567 10.433 1 8.5 1C6.567 1 5 2.567 5 4.5V6H6V4.5C6 3.11929 7.11929 2 8.5 2C9.88071 2 11 3.11929 11 4.5ZM11 10H12V11.5C12 13.433 10.433 15 8.5 15C6.567 15 5 13.433 5 11.5V10H6V11.5C6 12.8807 7.11929 14 8.5 14C9.88071 14 11 12.8807 11 11.5V10ZM8 5V11H9V5H8Z' fill='currentColor' />
</svg>

)

storiesOf('Button', module).add('Variants', () => (
  <div>
    <Text size='xlarge'>Primary</Text>
    <br />
    <Text size='large'>Normal</Text>
    <div>
      <Button variant='primary'>Primary</Button>
      <Button variant='primary' disabled={true}>
        Primary
      </Button>
    </div>
    <Text size='large'>Destructive</Text>
    <div>
      <Button variant='primary' destructive={true}>
        Primary
      </Button>
      <Button variant='primary' destructive={true} disabled={true}>
        Primary
      </Button>
    </div>

    <Text size='xlarge'>Secondary</Text>
    <br />
    <Text size='large'>Normal</Text>
    <div>
      <Button>Primary</Button>
      <Button disabled={true}>Primary</Button>
    </div>
    <Text size='large'>Destructive</Text>
    <div>
      <Button destructive={true}>Primary</Button>
      <Button destructive={true} disabled={true}>
        Primary
      </Button>
    </div>

    <div />
  </div>
))

storiesOf('Checkbox', module).add('Checkbox', () => (
  <Checkbox label='I am a checkbox, click me' />
))
 // tslint:disable:jsx-no-lambda
storiesOf('Icon Button', module).add('Icon Button', () => (
  <div>
    <SectionTitle>An IconButton, click me</SectionTitle>
    <IconButton icon={testIcon} onClick={() => { alert('hello') }} />

    <SectionTitle>An on IconButton</SectionTitle>
    <IconButton icon={testIcon} on={true} />

    <SectionTitle>An disabled IconButton</SectionTitle>
    <IconButton icon={testIcon} disabled={true} />
  </div>
))

storiesOf('Input', module).add('Input', () => (
  <Input placeholder='I am an input' />
))



storiesOf('Option Button', module).add('Option Button', () => (
  <div>
    <SectionTitle>An Option Button, click me</SectionTitle>
    <OptionButton icon={testIcon} onClick={() => { alert('hello') }} />

    <SectionTitle>An on Option button</SectionTitle>
    <OptionButton on={true} icon={testIcon} />

    <SectionTitle>A disabled Option button</SectionTitle>
    <OptionButton disabled={true} icon={testIcon} />
  </div>
))

storiesOf('Options Strip', module).add('Options Strip', () => (
  <div>
    <Label> Test Label</Label>
    <OptionStrip
      options={[
        { value: '1', label: testIcon },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ]}
    />
  </div>
))

storiesOf('Text Components', module)
  .add('Section Tile', () => <SectionTitle>I am a section title</SectionTitle>)
  .add('Label', () => <Label>I am a Label</Label>)
  .add('Text', () => (
    <div className='text-components'>
      <div>
        <Text size='xlarge'>Positive Application</Text>
        <div className='text-block'>
          <ul>
            <li>
              <Text>UI11 Normal</Text>
            </li>
            <li>
              <Text weight='medium'>UI11 Medium</Text>
            </li>
            <li>
              <Text weight='bold'>UI11 Bold</Text>
            </li>
          </ul>

          <ul>
            <li>
              <Text size='medium'>UI12 Normal</Text>
            </li>
            <li>
              <Text size='medium' weight='medium'>
                UI12 Medium
              </Text>
            </li>
            <li>
              <Text size='medium' weight='bold'>
                UI12 Bold
              </Text>
            </li>
          </ul>
        </div>
      </div>

      <Text size='xlarge'>Negative Application</Text>
      <div className='text-block negative-text'>
        <ul>
          <li>
            <Text onNegative={true}>UI11 Normal</Text>
          </li>
          <li>
            <Text onNegative={true} weight='medium'>
              UI11 Medium
            </Text>
          </li>
          <li>
            <Text onNegative={true} weight='bold'>
              UI11 Bold
            </Text>
          </li>
        </ul>

        <ul>
          <li>
            <Text onNegative={true} size='medium'>
              UI12 Normal
            </Text>
          </li>
          <li>
            {' '}
            <Text onNegative={true} size='medium' weight='medium'>
              UI12 Medium
            </Text>
          </li>
          <li>
            {' '}
            <Text onNegative={true} size='medium' weight='bold'>
              UI12 Bold
            </Text>
          </li>
        </ul>
      </div>
    </div>
  ))

storiesOf('Select', module)
  .add('Select', () => (
    <Select
      options={[
        { label: 'Option One', value: 'one' },
        { label: 'Option Two', value: 'two' },
        { label: 'Option Three', value: 'three' }
      ]}
    />
  ))
  .add('Select with a placeholder', () => (
    <Select
      placeholder='Select an option'
      options={[
        { label: 'Option One', value: 'one' },
        { label: 'Option Two', value: 'two' },
        { label: 'Option Three', value: 'three' }
      ]}
    />
  ))
  .add('Select with Groups', () => (
    // tslint:disable:object-literal-sort-keys
    <Select
      placeholder='Select an option'
      options={[
        {
          label: 'Group 1',
          group: [
            { label: 'Item 1', value: '1' },
            { label: 'Item 2', value: '2' }
          ]
        },
        {
          label: 'Group 2',
          group: [
            { label: 'Item 3', value: '3' },
            { label: 'Item 4', value: '4' }
          ]
        },
        {
          label: 'Group 3',
          group: [
            { label: 'Item 5', value: '5' },
            { label: 'Item 6', value: '6' }
          ]
        }
      ]}
    />
  ))

storiesOf('Switch', module).add('A Switch', () => (
  <Switch label='I am a switch, click me' />
))
