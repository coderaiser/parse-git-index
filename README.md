# Parse Git Index [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage][CoverageIMGURL]][CoverageURL]

Parse [git index file](https://github.com/git/git/blob/v2.23.0/Documentation/technical/index-format.txt).

## Install

```
npm i parse-git-index
```

## How to use?

```js
const {readFileSync} = require('fs');
const parse = require('parse-git-index');
const index = readFileSync('./.git/index');

parse(index);
// returns
({
    header: {
        signature: 'DIRC',
        version: '0x2',
        count: '0x1',
    },
    entries: [{
        ctime: '0x5d8893b223ad1e53',
        mtime: '0x5d8893b223ad1e53',
        dev: '0xfd01',
        ino: '0x8e850',
        mode: '0x81a4',
        uid: '0x3e8',
        gid: '0x3e8',
        fileSize: '0x9b',
        objectId: '0xaa148880272ec1d0488346da70e2dad451e8d3bf',
        filePathSize: '0xe',
        filePath: '.eslintrc.json',
    }],
});
```

## License

MIT

[NPMIMGURL]: https://img.shields.io/npm/v/parse-git-index.svg?style=flat&longCache=true
[BuildStatusIMGURL]: https://img.shields.io/travis/coderaiser/parse-git-index/master.svg?style=flat&longCache=true
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/parse-git-index "npm"
[BuildStatusURL]: https://travis-ci.org/coderaiser/parse-git-index "Build Status"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]: https://coveralls.io/github/coderaiser/parse-git-index?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/parse-git-index/badge.svg?branch=master&service=github
