import { fileURLToPath } from 'url';
import { dirname } from 'path';
import InquirerFuzzyPath from 'inquirer-fuzzy-path';
import { getActions } from './utils/get-actions.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line import/no-anonymous-default-export
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setPrompt('fuzzypath', InquirerFuzzyPath);

  plop.setGenerator('basics', {
    description: 'Generate',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of file?',
        default: 'component',
        choices: [
          {
            key: 'Component',
            name: 'Component',
            value: 'Component'
          },
          {
            key: 'ComponentContext',
            name: 'Component w/ Context',
            value: 'ComponentContext'
          },
          {
            key: 'Utils',
            name: 'Utils',
            value: 'Utils'
          }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'File name: '
      },
      {
        type: 'fuzzypath',
        name: 'directory',
        message: 'Select a target directory: ',
        rootPath: 'src',
        itemType: 'directory',
        depthLimit: 1,
        excludePath: nodePath => ['node_modules', 'plop', 'public'].some(path => nodePath.includes(path)),
        excludeFilter: nodePath => nodePath.startsWith('.')
      }
    ],
    actions: data => {
      const actions = getActions(data);

      return actions;
    }
  });
}
