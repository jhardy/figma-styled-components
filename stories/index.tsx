import React from "react";
import { storiesOf } from "@storybook/react";
import "./storybook.css";

import {
  Button,
  Checkbox,
  Input,
  Label,
  SectionTitle,
  Select,
  Switch,
  Text
} from "../src";

storiesOf("Button", module)
.add("Variants", () => (
  <div>
    <Text size="xlarge">Primary</Text>
    <br />
    <Text size="large">Normal</Text>
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" disabled>
        Primary
      </Button>
    </div>
    <Text size="large">Destructive</Text>
    <div>
      <Button variant="primary" destructive>
        Primary
      </Button>
      <Button variant="primary" destructive disabled>
        Primary
      </Button>
    </div>

    <Text size="xlarge">Secondary</Text>
    <br />
    <Text size="large">Normal</Text>
    <div>
      <Button>Primary</Button>
      <Button disabled>Primary</Button>
    </div>
    <Text size="large">Destructive</Text>
    <div>
      <Button destructive>Primary</Button>
      <Button destructive disabled>
        Primary
      </Button>
    </div>

    <div />
  </div>
));

storiesOf("Checkbox", module)
.add("Checkbox", () => (
  <Checkbox label="I am a checkbox, click me" />
));

storiesOf("Input", module).add("Input", () => (
  <Input placeholder="I am an input" />
));

storiesOf("Text Components", module)
  .add("Section Tile", () => <SectionTitle>I am a section title</SectionTitle>)
  .add("Label", () => <Label>I am a Label</Label>)
  .add("Text", () => (
    <div className="text-components">
      <div>
        <Text size="xlarge">Positive Application</Text>
        <div className="text-block">

          <ul>
            <li>
              <Text>UI11 Normal</Text>
            </li>
            <li>
              <Text weight="medium">UI11 Medium</Text>
            </li>
            <li>
              <Text weight="bold">UI11 Bold</Text>
            </li>
          </ul>



          <ul>
            <li>
              <Text size="medium">UI12 Normal</Text>
            </li>
            <li>
              <Text size="medium" weight="medium">
                UI12 Medium
              </Text>
            </li>
            <li>
              <Text size="medium" weight="bold">
                UI12 Bold
              </Text>
            </li>
          </ul>
        </div>
      </div>

      <Text size="xlarge">Negative Application</Text>
      <div className="text-block negative-text">


          <ul>
            <li>
              <Text onNegative>UI11 Normal</Text>
            </li>
            <li>
              <Text onNegative weight="medium">
                UI11 Medium
              </Text>
            </li>
            <li>
              <Text onNegative weight="bold">
                UI11 Bold
              </Text>
            </li>
          </ul>



          <ul>
            <li><Text onNegative size="medium">
            UI12 Normal
          </Text></li>
            <li> <Text onNegative size="medium" weight="medium">
            UI12 Medium
          </Text></li>
            <li> <Text onNegative size="medium" weight="bold">
            UI12 Bold
          </Text></li>
          </ul>




      </div>
    </div>
  ));

storiesOf("Select", module)
  .add("Select", () => (
    <Select
      options={[
        { label: "Option One", value: "one" },
        { label: "Option Two", value: "two" },
        { label: "Option Three", value: "three" }
      ]}
    />
  ))
  .add("Select with a placeholder", () => (
    <Select
      placeholder="Select an option"
      options={[
        { label: "Option One", value: "one" },
        { label: "Option Two", value: "two" },
        { label: "Option Three", value: "three" }
      ]}
    />
  ))
  .add("Select with Groups", () => (
    <Select
      placeholder="Select an option"
      options={[
        {
          label: "Group 1",
          group: [
            { label: "Item 1", value: "1" },
            { label: "Item 2", value: "2" }
          ]
        },
        {
          label: "Group 2",
          group: [
            { label: "Item 3", value: "3" },
            { label: "Item 4", value: "4" }
          ]
        },
        {
          label: "Group 3",
          group: [
            { label: "Item 5", value: "5" },
            { label: "Item 6", value: "6" }
          ]
        }
      ]}
    />
  ));

storiesOf("Switch", module).add("A Switch", () => (
  <Switch label="I am a switch, click me" />
));
