var chalk = require('chalk')
  , _ = require('lodash')

var NS = ""

var testLog = null
  , testWarn = null
  , suppressWarnings = false

// coloured console log
function log() {
  var args = NS ? [chalk.bold.gray(NS)] : []
  for(var i=0; i<arguments.length; i++) {
    var arg = arguments[i];
    args.push(chalk.cyan( typeof arg === "object" ? JSON.stringify(arg) : arg ))

    // adds a separator
    if(i < arguments.length-1) args.push(chalk.gray("|"));
  }
  if(testLog)   testLog(args);
  else          console.log.apply(null, args)
}

// coloured console log, using an array instead of parameters
function logArr(arr) {

  if(arguments.length > 1) {
    console.warn("'logArr' only supports 1 parameter. Converting to regular 'log'.");
    log(Array.prototype.slice.call(arguments));
    return;
  }

  if(! _.isArray(arr)) {
    console.warn("'logArr' used, but first argument was not an array. Converting to regular 'log'.");
    log(arr);
    return;
  }
  log.apply(null, arr)
}

// coloured console warn
function warn() {

  if(suppressWarnings) return

  var args = NS ? [chalk.bold.gray(NS)] : []
  for(var i=0; i<arguments.length; i++) {
    var arg = arguments[i];
    args.push(chalk.bold.yellow.bgRed( typeof arg === "object" ? JSON.stringify(arg) : arg ))
    
    // adds a separator
    if(i < arguments.length-1) args.push(chalk.gray("|"));
  }
  if(testWarn)  testWarn(args);
  else          console.warn.apply(null, args)
}

// coloured console warn, using an array instead of parameters
function warnArr(arr) {
  
  if(arguments.length > 1) {
    console.warn("'warnArr' only supports 1 parameter. Converting to regular 'warn'.");
    warn(Array.prototype.slice.call(arguments));
    return;
  }

  if(! _.isArray(arr)) {
    console.warn("'warnArr' used, but first argument was not an array. Converting to regular 'warn'.");
    warn(arr);
    return;
  }
  warn.apply(null, arr)
}

module.exports = {
    setNameSpace: function(ns) {
        if(!ns) NS = "";
        else    NS = ns + ":";
    }
    , setTestMode: function(_log, _warn) {
      if(typeof _log === "function") testLog = _log;
      else warn("setTestMode", "'_log' value must be a function");

      if(typeof _warn === "function") testWarn = _warn;
      else warn("setTestMode", "'_warn' value must be a function");
    }
    , suppressWarnings: function(val) {
        suppressWarnings = val;
      }
    , log: log
    , logArr: logArr
    , warn: warn
    , warnArr: warnArr
}