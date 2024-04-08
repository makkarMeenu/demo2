const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const findWorkspaceRoot = require('find-yarn-workspace-root');

const workspaceRoot = findWorkspaceRoot(__dirname);
// Find the project and workspace directories
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
];

module.exports = config;
