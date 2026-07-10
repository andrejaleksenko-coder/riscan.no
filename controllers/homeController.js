exports.health = (req, res) => {
    res.json({
        status: "ok",
        service: "RISCAN",
        version: "0.1"
    });
};exports.home = (req, res) => {
    res.json({
        project: "RISCAN",
        version: "0.1",
        status: "running"
    });
};

