'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'coverage': () => 'c8 npm test',
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'c8 report --reporter=text-lcov | coveralls',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run('watcher', 'npm test'),
    'watch:lint': async () => await run('watcher', `'npm run lint'`),
    'watch:tape': () => 'nodemon -w test -w lib --exec tape',
    'watch:coverage:base': () => run('watcher', 'nyc npm test'),
    'watch:coverage:tape': () => run('watcher', 'nyc tape'),
    'watch:coverage': () => run('watch:coverage:base'),
};
