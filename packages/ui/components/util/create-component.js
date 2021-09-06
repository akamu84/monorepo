/* eslint-disable */
require('colors');
const fs = require('fs');
const templates = require('./templates');
const rootIndexTemplate = require('./templates/root.index');

const componentName = process.argv[2];
const baseDir = './src/components';

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log(`Creating Component Templates with name: ${componentName}`);

const componentDirectory = `${baseDir}/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(`${componentDirectory}/${template.fileName || componentName}${template.extension}`, template.content);
});

const components = fs.readdirSync(baseDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const rootIndex = rootIndexTemplate(components);

fs.writeFileSync(`${baseDir}/${rootIndex.fileName}${rootIndex.extension}`, rootIndex.content);

console.log(`Successfully created component under: ${componentDirectory.green}`);
