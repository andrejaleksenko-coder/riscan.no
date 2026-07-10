exports.home = (req, res) => {
    res.json({
        project: "RISCAN",
        version: "0.1",
        status: "running"
    });
};

