module.exports = (componentName) => ({
  content: `import ${componentName} from './${componentName}';

export default ${componentName};
`,
  extension: `.ts`,
  fileName: `index`,
});
