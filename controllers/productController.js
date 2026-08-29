const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "../database/riscan.db");
const db = new Database(dbPath);
exports.list = (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
};

exports.getById = (req, res) => {

    const product = db
    .prepare("SELECT * FROM products WHERE id = ?")
    .get(req.params.id);

    if (!product) {
        return res.status(404).json({
            error: "Product not found"
        });
    }

    res.json(product);
};
