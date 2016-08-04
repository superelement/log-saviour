var sav = require('./index.js')

const NS = "myProject"

sav.setNameSpace(NS)
warn = sav.warn
warnArr = sav.warnArr
log = sav.log
logArr = sav.logArr

log("Example ", "log ", { a: "that has an object " }, ["and ", "an ", "array."]);

logArr(["Pass ", "an ", "array ", "which will be converted to individual parameters when logged."]);

warn("Example ", "log ", { a: "that has an object " }, ["and ", "an ", "array."]);

warnArr(["Pass ", "an ", "array ", "which will be converted to individual parameters when logged."]);