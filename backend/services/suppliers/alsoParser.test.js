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


console.log("PASS: ALSO product row parsed correctly");





