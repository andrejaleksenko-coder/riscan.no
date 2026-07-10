const express = require("express");

const app = express();
const PORT = 3000;

const routes = require("./routes");

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`RISCAN Server running on http://localhost:${PORT}`);
});

