# Figma Styled Components
A set of styled components modeled after the Figma UI

![image](https://user-images.githubusercontent.com/170681/62256697-2b65f500-b3b7-11e9-9937-7673ab072c84.png)

## Usage

```npm i figma-styled-components --save```

To test this library I've created this Figma plugin: [fig-ui](https://github.com/jhardy/fig-ui), that uses the components to recreate the Figma sidebar. You can clone the repo and checkout the code to see some example of the components in an actual Figma plugin.

```

import {Button, Checkbox, Input, Label, SectionTitle, Select, Switch, Text} from 'figma-styled-components`

<Button> I am a button</Button>

...

```

## Documentation

Current documentation is in [storybook project here](https://determined-borg-d1ccaa.netlify.com/)


#### Locally
Install dependency with `yarn` and then run `yarn storybook` to build the storybook for this project

##### Build
You can build the project with `yarn build`

### Todo
* Refactor to functional components
* Refactor select, handle default option better,
* Document component interfaces better, with code examples (maybe switch away from storybook)
* Expand demo plugin that uses components
* Use a theme wrapper
* Handle OptionStrip default selection better
* Tabs
* Decide if Text components should accept color
* Select with Icon, in Select trigger as well as in select option

