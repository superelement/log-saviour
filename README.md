# log-saviour
Better console log and warn for command line, with improved readability, using colours and ability to switch off globally

## Usage
```js
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

## Example
Run the `node _example` to see the example in command-line.