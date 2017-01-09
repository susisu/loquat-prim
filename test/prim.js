/*
 * loquat-prim test / prim
 */

"use strict";

describe("prim", () => {
    require("./prim/map.js");
    require("./prim/fmap.js");
    require("./prim/pure.js");
    require("./prim/ap.js");
    require("./prim/left.js");
    require("./prim/right.js");
    require("./prim/bind.js");
    require("./prim/then.js");
    require("./prim/fail.js");
    require("./prim/tailRecM.js");
    require("./prim/ftailRecM.js");
    require("./prim/mzero.js");
    require("./prim/mplus.js");
    require("./prim/label.js");
    require("./prim/labels.js");
    require("./prim/hidden.js");
    require("./prim/unexpected.js");
    require("./prim/tryParse.js");
    require("./prim/lookAhead.js");
    require("./prim/reduceMany.js");
    require("./prim/many.js");
    require("./prim/skipMany.js");
    require("./prim/tokens.js");
    require("./prim/token.js");
    require("./prim/tokenPrim.js");
    require("./prim/getParserState.js");
    require("./prim/setParserState.js");
    require("./prim/updateParserState.js");
    require("./prim/getConfig.js");
    require("./prim/setConfig.js");
    require("./prim/getInput.js");
    require("./prim/setInput.js");
    require("./prim/getPosition.js");
    require("./prim/setPosition.js");
    require("./prim/getState.js");
    require("./prim/setState.js");
});
