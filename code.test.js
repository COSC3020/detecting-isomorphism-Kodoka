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

// Test 3, two vertex, one edge, should be isomorphic, graph1 == graph2.
assert(JSON.stringify(are_isomorphic(
    [[0, 1],
     [1, 0]],
    [[0, 1],
     [1, 0]]))
    == JSON.stringify(true), "Test 3 failed.");

// Test 4, two vertex, one edge, vs. two vertex, no edges, not isomorphic.
assert(JSON.stringify(are_isomorphic(
    [[0, 1],
     [1, 0]],
    [[0, 0],
     [0, 0]]))
    == JSON.stringify(false), "Test 4 failed.");

// Test 5, mismatched dimensions, not isomorphic.
assert(JSON.stringify(are_isomorphic(
    [[0, 1],
     [1, 0]],
    [[0,1,0,1],
     [1,0,1,0],
     [0,1,1,1],
     [1,0,1,0]]))
    == JSON.stringify(false), "Test 5 failed.");

// Test 6, three vertex, two edges, should be isomorphic.
assert(JSON.stringify(are_isomorphic(
    [[0, 1, 0],
     [1, 0, 1],
     [0, 1, 0]],
    [[0, 1, 1],
     [1, 0, 0],
     [1, 0, 0]]))
    == JSON.stringify(true), "Test 6 failed.");

// Test 7, six vertex, side edges, swapped vertices 0/1, should be isomorphic.
assert(JSON.stringify(are_isomorphic(
    [[0,1,0,0,0,1],
     [1,0,1,0,0,0],
     [0,1,0,1,0,0],
     [0,0,1,0,1,0],
     [0,0,0,1,0,1],
     [1,0,0,0,1,0]],
    [[0,1,1,0,0,0],
     [1,0,0,0,0,1],
     [1,0,0,1,0,0],
     [0,0,1,0,1,0],
     [0,0,0,1,0,1],
     [0,1,0,0,1,0]]))
    == JSON.stringify(true), "Test 7 failed.");

// Test 8, six vertex, five edges, not isomorphic
assert(JSON.stringify(are_isomorphic(
    [[0,1,0,0,0,1],
     [1,0,1,0,0,0],
     [0,1,0,1,0,0],
     [0,0,1,0,1,0],
     [0,0,0,1,0,1],
     [1,0,0,0,1,0]],
    [[0,0,0,0,0,1],
     [0,0,1,0,0,0],
     [0,1,0,1,0,0],
     [0,0,1,0,1,0],
     [0,0,0,1,0,1],
     [1,0,0,0,1,0]]))
    == JSON.stringify(false), "Test 8 failed.");