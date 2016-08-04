
var logSaviour = require("./index.js")
  , chalk = require('chalk')

logSaviour.suppressWarnings(true);

var regularCheck = function(args) {
    args.forEach(function(arg, i) {
        if(i===0) expect(chalk.stripColor(arg)).toBe("1")
        if(i===1) expect(chalk.stripColor(arg)).toBe("|") // has separator
        if(i===2) expect(chalk.stripColor(arg)).toBe("2") // number converted to a string
        if(i===3) expect(chalk.stripColor(arg)).toBe("|") // has separator
        if(i===4) expect(JSON.parse(chalk.stripColor(arg)).three).toBe(3) // checks stringified object
        if(i===5) expect(chalk.stripColor(arg)).toBe("|") // has separator
        if(i===6) expect(JSON.parse(chalk.stripColor(arg))[0]).toBe("a") // checks stringified array
    })
    expect(args.length).toBe(7) // checks there is no trailing separator
}

var arrayCheck = function(args) {
   args.forEach(function(arg, i) {
        if(i===0) expect(chalk.stripColor(arg)).toBe("a")
        if(i===1) expect(chalk.stripColor(arg)).toBe("|") // has separator
        if(i===2) expect(chalk.stripColor(arg)).toBe("b") // number converted to a string
    })
    expect(args.length).toBe(3) // checks there is no trailing separator
}

var dodgyArrayCheck = function(args) {
    
    expect(args.length).toBe(1) // checks a multi-dimensional array is passed
    
    var combinedArr = JSON.parse(chalk.stripColor(args[0]));
    combinedArr.forEach(function(arg, i) {
        if(i===0) expect(arg[0]).toBe("a")
        if(i===1) expect(arg[1]).toBe("d")
    })
}

var nsCheck = function(args) {
    expect(chalk.stripColor(args[0])).toBe("test:")
}

beforeEach(function() {
    logSaviour.setNameSpace("")
})

describe("log", function() {
	var fun = logSaviour.log

	it("should check a variety of arguments, including strings, numbers, arrays and objects", function(){
		logSaviour.setTestMode(regularCheck);

        fun("1", 2, {three: 3}, ["a","b"])
	})

    it("should check that namespace is added", function() {
        logSaviour.setNameSpace("test")
        logSaviour.setTestMode(nsCheck);

        fun("1")
    })
})


describe("warn", function() {
	var fun = logSaviour.log

	it("should check a variety of arguments, including strings, numbers, arrays and objects", function(){
		logSaviour.setTestMode(null, regularCheck);

        fun("1", 2, {three: 3}, ["a","b"])
	})

    it("should check that namespace is added", function() {
        logSaviour.setNameSpace("test")
        logSaviour.setTestMode(null, nsCheck);

        fun("1")
    })
})


describe("logArr", function() {
	var fun = logSaviour.logArr

    it("should check that correct configuration returns a stringified array", function() {
        logSaviour.setTestMode(arrayCheck);

        fun(["a","b"])
    })

	it("should check mutliple items are handled in a readable manner, despite incorrect configuration", function(){
		logSaviour.setTestMode(dodgyArrayCheck);

        fun(["a","b"], ["c","d"])
	})

    it("should check that namespace is added", function() {
        logSaviour.setNameSpace("test")
        logSaviour.setTestMode(nsCheck);

        fun("1")
    })
})

describe("warnArr", function() {
	var fun = logSaviour.warnArr

    it("should check that correct configuration returns a stringified array", function() {
        logSaviour.setTestMode(null, arrayCheck);

        fun(["a","b"])
    })

	it("should check mutliple items are handled in a readable manner, despite incorrect configuration", function(){
		logSaviour.setTestMode(null, dodgyArrayCheck);

        fun(["a","b"], ["c","d"])
	})

    it("should check that namespace is added", function() {
        logSaviour.setNameSpace("test")
        logSaviour.setTestMode(null, nsCheck);

        fun("1")
    })
})
