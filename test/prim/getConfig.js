/*
 * loquat-prim test / prim.getConfig
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const SourcePos    = _core.SourcePos;
const ParseError   = _core.ParseError;
const Config       = _core.Config;
const State        = _core.State;
const Result       = _core.Result;
const assertParser = _core.assertParser;

const getConfig = _prim.getConfig;

describe(".getConfig", () => {
    it("should get the current config of parser", () => {
        assertParser(getConfig);
        const initState = new State(
            new Config({ tabWidth: 8 }),
            "input",
            new SourcePos("foobar", 1, 1),
            "none"
        );
        const res = getConfig.run(initState);
        expect(Result.equal(
            res,
            Result.esuc(
                ParseError.unknown(new SourcePos("foobar", 1, 1)),
                initState.config,
                initState
            )
        )).to.be.true;
    });
});
