const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

// Test 1, empty graphs, should be isomorphic.
assert(JSON.stringify(are_isomorphic(
    [],
    []))
    == JSON.stringify(true), "Test 1 failed.");

// Test 2, single vertex, no edges, should be isomorphic.
assert(JSON.stringify(are_isomorphic(
    [[0]],
    [[0]]))
    == JSON.stringify(true), "Test 2 failed.");

// [[0,1,0,1],
// [1,0,1,0],
// [0,1,1,1],
// [1,0,1,0]]