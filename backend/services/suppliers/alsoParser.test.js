const assert = require("node:assert");
const { parseAlsoRow } = require("./alsoParser");

const testRow = {
    ManufacturerPartNumber: "MZ-V9P2T0BW",
    EuropeanArticleNumber: "8806094215038",
    ProductID: "TEST-ALSO-001",
    NetPrice: "149.90",
    AvailableQuantity: "17"
};
const result = parseAlsoRow(testRow);

assert.strictEqual(result.mpn, "MZ-V9P2T0BW");
assert.strictEqual(result.ean, "8806094215038");
assert.strictEqual(result.supplier_sku, "TEST-ALSO-001");
assert.strictEqual(result.purchase_price, 149.9);
assert.strictEqual(result.availability, 17);
const badPriceRow = {
    ...testRow,
    NetPrice: ""
};
assert.throws(
    () => parseAlsoRow(badPriceRow),
    /Invalid ALSO purchase price/
);
const badAvailabilityRow = {
    ...testRow,
    AvailableQuantity: ""
};

assert.throws(
    () => parseAlsoRow(badAvailabilityRow),
    /Invalid ALSO availability/
);
const zeroAvailabilityRow = {
    ...testRow,
    AvailableQuantity: "0"
};

const zeroResult = parseAlsoRow(zeroAvailabilityRow);

assert.strictEqual(zeroResult.availability, 0);
const negativeAvailabilityRow = {
    ...testRow,
    AvailableQuantity: "-3"
};

assert.throws(
    () => parseAlsoRow(negativeAvailabilityRow),
    /Invalid ALSO availability/
);
const zeroPriceRow = {
    ...testRow,
    NetPrice: "0"
};

assert.throws(
    () => parseAlsoRow(zeroPriceRow),
    /Invalid ALSO purchase price/
);
const negativePriceRow = {
    ...testRow,
    NetPrice: "-50"
};

assert.throws(
    () => parseAlsoRow(negativePriceRow),
    /Invalid ALSO purchase price/
);
const emptyMpnRow = {
    ...testRow,
    ManufacturerPartNumber: ""
};

assert.throws(
    () => parseAlsoRow(emptyMpnRow),
    /Invalid ALSO MPN/
);
const emptyEanRow = {
    ...testRow,
    EuropeanArticleNumber: ""
};

assert.throws(
    () => parseAlsoRow(emptyEanRow),
    /Invalid ALSO EAN/
);



console.log("PASS: ALSO product row parsed correctly");





