/*
 * loquat-prim test / prim.mzero
 * copyright (c) 2016 Susisu
 */

"use strict";

const chai = require("chai");
const expect = chai.expect;

const _core = require("loquat-core");
const SourcePos    = _core.SourcePos;
const ParseError   = _core.ParseError;
const Config       = _core.Config;
const State        = _core.State;
const Result       = _core.Result;
const assertParser = _core.assertParser;

const _prim = require("prim.js")(_core);
const mzero = _prim.mzero;

describe(".mzero", () => {
    it("should always empty fails with unknown error", () => {
        assertParser(mzero);
        let initState = new State(
            new Config({ tabWidth: 8 }),
            "input",
            new SourcePos("foobar", 1, 1),
            "none"
        );
        let res = mzero.run(initState);
        expect(Result.equal(
            res,
            Result.eerr(ParseError.unknown(new SourcePos("foobar", 1, 1)))
        )).to.be.true;
    });
});