const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const routes = require("./routes");

// Отдаём файлы сайта из папки public
app.use(express.static(path.join(__dirname, "public")));

// API-маршруты
app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`RISCAN Server running on http://localhost:${PORT}`);
});

