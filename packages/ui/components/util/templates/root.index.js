module.exports = (components) => ({
  content: `${components.map((c) => `import ${c} from './${c}';`).join('\n')}

export {
  ${components.map((c) => `${c},`).join('\n  ')}
};
`,
  extension: `.ts`,
  fileName: `index`,
});
