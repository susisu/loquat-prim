/*
 * loquat-prim test / prim.setState()
 * copyright (c) 2016 Susisu
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

const setState = _prim.setState;

describe(".setState(userState)", () => {
    it("should return a parser that sets parser user state to `userState' and empty succeeds", () => {
        let initState = new State(
            new Config({ tabWidth: 8 }),
            "input",
            new SourcePos("foobar", 1, 1),
            "none"
        );
        let parser = setState("some");
        assertParser(parser);
        let res = parser.run(initState);
        expect(Result.equal(
            res,
            Result.esuc(
                ParseError.unknown(new SourcePos("foobar", 1, 1)),
                undefined,
                new State(
                    new Config({ tabWidth: 8 }),
                    "input",
                    new SourcePos("foobar", 1, 1),
                    "some"
                )
            )
        )).to.be.true;
    });
});
