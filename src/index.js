#!/usr/bin/env node
import path from 'path';
import {execSync} from 'child_process';

const PRE_COMMIT_VERSION = '1.1.1';

function main(appRoot) {
  const venv = path.join(__dirname, '..', 'venv-pre-commit-wrapper');

  const commands = [
    `virtualenv ${venv} --python=python3`,
    `${path.join(
      venv,
      'bin',
      'pip',
    )} install pre-commit==${PRE_COMMIT_VERSION}`,
  ];

  commands.forEach(command => {
    execSync(command, {cwd: appRoot, stdio: ['pipe', 1, 2]});
  });
}

if (process.env !== 'test') {
  const appRoot = path.join(process.cwd(), '..', '..');
  console.log(`Installing pre-commit venv to ${appRoot}`);
  main(appRoot);
}
