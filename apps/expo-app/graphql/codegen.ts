import { CodegenConfig } from '@graphql-codegen/cli';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

import { SchemaEnv } from '../env';
const IGNORE_DIRECTORIES = ['apollo', 'hooks'];
const GRAPHQL_DIR = './graphql';
const CODEGEN_CONFIG: CodegenConfig = {
  overwrite: true,
  schema: SchemaEnv.EXPO_PUBLIC_GRAPHQL_URL,
  generates: {},
};

const PLUGIN_LIST = [
  'typescript',
  'typescript-operations',
  'typescript-react-apollo',
];

const generateModuleConfig = (modulePath: string) => {
  const moduleName = modulePath.split('/').pop() || '';
  const hooksPath = join(
    GRAPHQL_DIR,
    modulePath,
    '..',
    '..',
    'hooks',
    moduleName,
    'index.ts'
  );

  return {
    [hooksPath]: {
      plugins: PLUGIN_LIST,
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
      documents: [`${modulePath}/**/*.graphql`],
    },
  };
};

const modules = readdirSync(GRAPHQL_DIR).filter((subDir) => {
  const fullPath = join(GRAPHQL_DIR, subDir);
  if (IGNORE_DIRECTORIES.includes(subDir)) {
    return false;
  }

  return statSync(fullPath).isDirectory();
});

modules.forEach((moduleName) => {
  const modulePath = join(GRAPHQL_DIR, moduleName);
  const moduleConfig = generateModuleConfig(modulePath);
  CODEGEN_CONFIG.generates = { ...CODEGEN_CONFIG.generates, ...moduleConfig };
});

export default CODEGEN_CONFIG;
