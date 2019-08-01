import {
  Button,
  Input,
  Switch,
  Checkbox,
  Text,
  SectionTitle,
  Label,
  Select
} from "./src";

const UITest = () => {
  return (
    <div className="ui-test">
      <section>
        <h1>Typography</h1>
        <Text size="xlarge">Positive Applications</Text>
        <div className="text-holder">
          <ul>
            <li>
              <Text>UI 11 Normal</Text>
            </li>
            <li>
              <Text weight="medium">UI 11 Medium</Text>
            </li>
            <li>
              <Text weight="bold">UI 11 Bold</Text>
            </li>
          </ul>
          <ul>
            <li>
              <Text size="medium">UI 12 Normal</Text>
            </li>
            <li>
              <Text size="medium" weight="medium">
                UI 12 Medium
              </Text>
            </li>
            <li>
              <Text size="medium" weight="bold">
                UI 12 Bold
              </Text>
            </li>
          </ul>
        </div>

        <Text size="xlarge">Negative Applications</Text>
        <div className="text-holder negative">
          <ul>
            <li>
              <Text onNegative>UI 11 Normal</Text>
            </li>
            <li>
              <Text weight="medium" onNegative>
                UI 11 Medium
              </Text>
            </li>
            <li>
              <Text weight="bold" onNegative>
                UI 11 Bold
              </Text>
            </li>
          </ul>
          <ul>
            <li>
              <Text size="medium" onNegative>
                UI 12 Normal
              </Text>
            </li>
            <li>
              <Text size="medium" weight="medium" onNegative>
                UI 12 Medium
              </Text>
            </li>
            <li>
              <Text size="medium" weight="bold" onNegative>
                UI 12 Bold
              </Text>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h1>Text Components</h1>
        <Label>Label</Label>
        <SectionTitle>Section Title</SectionTitle>
      </section>

      <section>
        <h1>Controls</h1>
        <div className="input-section">
          <h2>Input</h2>
          <div className="todo">
            <code>/* TODO  */</code>
            <ul>
              <li>Input with icon</li>
              <li>Textarea</li>
            </ul>
          </div>
          <Input placeholder="Value" />
          <Input placeholder="Value" value="1" />
        </div>

        <div className="input-section">
          <h2>Switch</h2>
          <Switch label="Switch Label" onChange={this.handleChange} />
        </div>

        <div className="input-section">
          <h2>Checkbox</h2>
          <Checkbox label="Checkbox" onChange={this.handleChange} />
        </div>

        <div className="input-section">
          <h2>Select</h2>

          <div className="todo">
            <code>/* TODO  */</code>
            <ul>
              <li>Handle closing select on clicking out side and with the esc key</li>
              <li>Default Value for a select</li>
            </ul>
          </div>
          <div className="select-item">
            <h3>Without groups, with placeholder</h3>
            <Select
              placeholder="Select an option"
              options={[
                { label: "Option One", value: "one" },
                { label: "Option Two", value: "two" },
                { label: "Option Three", value: "three" }
              ]}
            />
          </div>

          <div className="select-item">
            <h3>With Groups</h3>
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
          </div>
        </div>
      </section>

      <section>
        <h1>Buttons</h1>
        <div className="button-section">
          <h2>Primary</h2>
          <h3>Normal</h3>
          <div className="button-example">
            <Button variant="primary">Label</Button>
            <Button variant="primary" disabled>
              Label
            </Button>
          </div>

          <h3>Destructive</h3>
          <div className="button-example">
            <Button variant="primary" destructive>
              Label
            </Button>
            <Button variant="primary" disabled destructive>
              Label
            </Button>
          </div>
        </div>

        <div className="button-section">
          <h2>Secodnary</h2>
          <h3>Normal</h3>
          <div className="button-example">
            <Button>Label</Button>
            <Button disabled>Label</Button>
          </div>

          <h3>Destructive</h3>
          <div className="button-example">
            <Button destructive>Label</Button>
            <Button disabled destructive>
              Label
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h1>Icons</h1>
        <div className="todo">
            <code>/* TODO  */</code>
            <ul>
              <li>All icons and modifiers</li>
              <li>Icon button</li>
            </ul>
          </div>
      </section>
    </div>
  );
};

export default UITest;
