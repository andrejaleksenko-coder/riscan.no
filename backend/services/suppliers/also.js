require("dotenv").config();

const Database = require("better-sqlite3");
const path = require("path");
const ALSO_SFTP_HOST = process.env.ALSO_SFTP_HOST;
const ALSO_SFTP_USER = process.env.ALSO_SFTP_USER;
const ALSO_SFTP_PASSWORD = process.env.ALSO_SFTP_PASSWORD;
const ALSO_SFTP_PATH = process.env.ALSO_SFTP_PATH;
const ALSO_CONFIGURED = Boolean(
    ALSO_SFTP_HOST &&
    ALSO_SFTP_USER &&
    ALSO_SFTP_PASSWORD &&
    ALSO_SFTP_PATH
);
console.log("ALSO SFTP configured:", ALSO_CONFIGURED);
if (!ALSO_CONFIGURED) {
    console.log("ALSO SFTP credentials are not configured yet.");
}
const dbPath = path.join(__dirname, "../../../database/riscan.db");
const db = new Database(dbPath);
const supplier = db
    .prepare("SELECT * FROM suppliers WHERE id = ?")
    .get(1);

console.log(supplier);
const product = db
    .prepare("SELECT * FROM products WHERE mpn = ?")
    .get("MZ-V9P2T0BW");

console.log(product);
async function fetchAlsoOffer(product) {

}
async function fetchAlsoOffer(product) {
    console.log("Fetching ALSO offer for:", product.mpn);
}
fetchAlsoOffer(product);