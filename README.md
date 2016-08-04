# log-saviour
Better console log and warn for command line, with improved readability, using colours and ability to switch off globally

## Basic usage
```js
var sav = require('./index.js')

// Optionally prefix logs with a namespace
sav.setNameSpace("myProject");

// Good idea to create aliases to logging functions so they're shorter to write
warn = sav.warn;
warnArr = sav.warnArr;
log = sav.log;
logArr = sav.logArr;

// Example log
log("Example ", "log ", { a: "that has an object " }, ["and ", "an ", "array."]);
//OUTPUT: myProject: Example  | log  | {"a":"that has an object "} | ["and ","an ","array."]

// Example logArr
logArr(["Pass ", "an ", "array ", "which will be converted to individual parameters when logged."]);
//OUTPUT: myProject: Pass  | an  | array  | which will be converted to individual parameters when logged.

// Example warn
warn("Example ", "log ", { a: "that has an object " }, ["and ", "an ", "array."]);
//OUTPUT: myProject: Example  | log  | {"a":"that has an object "} | ["and ","an ","array."]

// Example warnArr
warnArr(["Pass ", "an ", "array ", "which will be converted to individual parameters when logged."]);
//OUTPUT: myProject: Pass  | an  | array  | which will be converted to individual parameters when logged.
```

## Suppress warnings
This can be useful if you don't want to output lots of warnings in things like unit tests (which can be annoying).
```js
var sav = require('./index.js')
sav.suppressWarnings(true);
```

## Override console functions
If you want to switch off or override the console 'log' and 'warn' functions, use 'setTestMode'.
```js
var sav = require('./index.js')

// Override log
sav.setTestMode(functions(args) {
    // args will be the array of strings that would normally be output, including NPM Chalk entities (use 'chalk.stripColor' to normalize strings).
});

// Override warn
sav.setTestMode(null, functions(args) {
    // args will be the array of strings that would normally be output, including NPM Chalk entities (use 'chalk.stripColor' to normalize strings).
});
```  

## Example
Run the `node _example` to see the example in command-line.