export function getActions(data) {
  const root = process.cwd();

  switch (data.type) {
    case 'Component':
    case 'ComponentContext':
      return [
        {
          type: 'add',
          path: `${root}/${data.directory}/index.ts`,
          templateFile: './templates/index.ts.hbs',
          abortOnFail: false
        },
        {
          type: 'modify',
          path: `${root}/${data.directory}/index.ts`,
          pattern: /(\/\/ EXPORTS)/g,
          template: `export { default as {{ properCase name }} } from './{{ properCase name }}';\n$1`
        },
        {
          type: 'addMany',
          destination: `${root}/${data.directory}/{{ properCase name }}`,
          base: `./templates/${data.type}`,
          templateFiles: `./templates/${data.type}/*.hbs`
        }
      ];
    case 'Utils':
      return [
        {
          type: 'add',
          path: `${root}/${data.directory}/index.ts`,
          templateFile: './templates/index.ts.hbs',
          abortOnFail: false
        },
        {
          type: 'modify',
          path: `${root}/${data.directory}/index.ts`,
          pattern: /(\/\/ EXPORTS)/g,
          template: `export { default as {{ camelCase name }} } from './{{ dashCase name }}';\n$1`
        },
        {
          type: 'addMany',
          destination: `${root}/${data.directory}/{{ dashCase name }}`,
          base: `./templates/${data.type}`,
          templateFiles: `./templates/${data.type}/*.hbs`
        }
      ];
    default:
      return null;
  }
}
