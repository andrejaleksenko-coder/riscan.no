exports.list = (req, res) => {
    res.json([
        {
            id: 1,
            name: "Samsung 990 PRO 2TB",
            price: 2499,
            currency: "NOK"
        }
    ]);
};
