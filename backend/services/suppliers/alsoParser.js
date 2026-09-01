function parseAlsoRow(row) {

    const mpn = String(row.ManufacturerPartNumber || "").trim();
    const ean = String(row.EuropeanArticleNumber || "").trim();

    if (!mpn) {
        throw new Error("Invalid ALSO MPN");
    }

    if (!ean) {
        throw new Error("Invalid ALSO EAN");
    }
    const purchasePrice = Number(row.NetPrice);
    const availability = Number(row.AvailableQuantity);

    if (
    !row.NetPrice ||
    !Number.isFinite(purchasePrice) ||
    purchasePrice <= 0
) {
    throw new Error("Invalid ALSO purchase price");
}

    if (
    row.AvailableQuantity === "" ||
    row.AvailableQuantity == null ||
    !Number.isFinite(availability) ||
    availability < 0
) {
    throw new Error("Invalid ALSO availability");
}

    return {
       mpn: mpn,
        ean: ean,
        supplier_sku: row.ProductID,
        purchase_price: purchasePrice,
        availability: availability
    };
}

module.exports = {
    parseAlsoRow
};
