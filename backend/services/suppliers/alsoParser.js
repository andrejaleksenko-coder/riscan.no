function parseAlsoRow(row) {
    
    return {
    mpn: row.ManufacturerPartNumber,
    ean: row.EuropeanArticleNumber,
    supplier_sku: row.ProductID,
    purchase_price: Number(row.NetPrice),
    availability: Number(row.AvailableQuantity)


};
}

module.exports = {
    parseAlsoRow
};
