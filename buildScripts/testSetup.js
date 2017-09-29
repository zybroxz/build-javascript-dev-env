//not transpiled - must use commonjs and ES5

//register babel to transpile js before tests run
require('babel-register')();

//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function(){};