import test from 'node:test';
import assert from 'node:assert/strict';
import { projectName } from '../src/index.js';

test('项目入口可加载', () => {
  assert.equal(typeof projectName(), 'string');
});
