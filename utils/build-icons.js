const util = require('util')
const fs = require('fs').promises
const exec = util.promisify(require('child_process').exec)
const writeFile = fs.writeFile
const path = require('path')
const rimraf = util.promisify(require('rimraf'))
const mkdir = fs.mkdir


const glyphPath = path.join(__dirname, '../src/Icon/components/');
const icons16x16 = path.join(__dirname, glyphPath, '16')
const icons32x32 = path.join(__dirname, glyphPath, '32')
const iconsLayer = path.join(__dirname, glyphPath, 'Layer')
let allComponentNames = null
let componentGroups = {'16' : [], '32': [], 'Layer': []}

async function walk(dir, fileList = []) {
  const files = await fs.readdir(dir)
  for (const file of files) {
    const stat = await fs.stat(path.join(dir, file))
    if (stat.isDirectory()) fileList = await walk(path.join(dir, file), fileList)
    else fileList.push({dir, file})
  }
  return fileList
}

async function clean() {
  await rimraf(glyphPath)
  await mkdir(glyphPath)
}

async function svgToComponent() {
  const result = await exec(
    "yarn svgr src/Icon/svg/ -d src/Icon/components --ext=tsx --prettier-config .prettierrc.json --replace-attr-values \"#000=currentColor\""
  )
}

async function getIconNames(path) {
  await walk(path).then((res) => {
    allComponentNames = res.map(file => {
        return `${file.file.split('.')[0]}`
    })

    res.map(file => {
      const dir = file.dir.split('/').slice(-1)[0]
      componentGroups[dir].push(`${file.file.split('.')[0]}`)
    })

    return allComponentNames
  })
}

async function createIconNameFile() {
  walk(glyphPath).then((res) => {
    const iconNames = res.map(file => {
        return `'${file.file.split('.')[0]}'`
    }).join(' | ')

    const exportContent = `export type IconNames = ${iconNames}`
    writeFile(path.join(__dirname , '..', 'src', 'Icon', 'IconNames.ts'), exportContent)
  })
}

async function createIconIndexFile() {
  walk(glyphPath).then((res) => {
    const iconNames = res.map(file => {
        const dir = file.dir.split('/').slice(-1)[0]
        return `export { default as ${file.file.split('.')[0]} } from './${dir}/${file.file.split('.')[0]}'`
    }).join('\n')

    const exportContent = iconNames
    writeFile(path.join(__dirname , '..', 'src', 'Icon', 'components', 'index.ts'), exportContent)
  })
}

async function storyIconTemplate(iconArray) {
  return iconArray.map(icon => {
    return `<div className="icon-item"><Icon name="${icon}" /> <br/><Text size="large">${icon}</Text></div>`
  }).join('\n')

}

async function storyIconTemplateWithCopy(iconArray) {
  return iconArray.map(icon => {
    return `<CopyToClipboard text={'<Icon name="${icon}" />'}
    onCopy={() => alert("Icon '${icon}' copied to clipboard")}>
    <div className="icon-item"><div className="icon-glyph"><Icon name="${icon}" /></div><Text size="large">${icon}</Text></div>
  </CopyToClipboard>`
  }).join('\n')
}
async function buildIconStory() {
  const iconComponents = allComponentNames.map(icon => {
  return `<div className="icon-item"><Icon name="${icon}" /> <br/><Text size="large">${icon}</Text></div>`
}).join('\n')

const icons16x16 = await storyIconTemplateWithCopy(componentGroups['16'])
const icons32x32 = await storyIconTemplateWithCopy(componentGroups['32'])
const iconsLayer = await storyIconTemplateWithCopy(componentGroups['Layer'])

const mdx =
`
import { Icon } from "./Icon"
import { Story, Meta } from "@storybook/addon-docs/blocks"
import { Text } from "../Text"
import {CopyToClipboard} from 'react-copy-to-clipboard'


<Meta title="MDX|Icon" component={Icon} />

# Icons

<div className="icon-tip"><Icon name="Smiley" /><strong>Tip:</strong> You can click any icon below and copy its component markup to your clipboard</div>

## 16 x 16 Icons
<Story name="Icon 16x16">
  <div className="component-box">
    <div className="icon-list">
      ${icons16x16}
    </div>
  </div>
</Story>

## 32 x 32 Icons
<Story name="Icon 32x32">
  <div className="component-box">
    <div className="icon-list">
      ${icons32x32}
    </div>
  </div>
</Story>

## Layer Icons
<Story name="Icon Layer">
  <div className="component-box">
    <div className="icon-list">
      ${iconsLayer}
    </div>
  </div>
</Story>
`

await writeFile(path.join(__dirname , '..', 'src', 'Icon', 'Icon.stories.mdx'), mdx)

}



async function run() {
    await clean()
    await svgToComponent()
    await getIconNames(glyphPath)
    await createIconNameFile()
    await createIconIndexFile()
    await buildIconStory();

}

run()
