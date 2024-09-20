const homeRoute = (req, res) => {
    res.send(`Hello home`)
};

const testRoute = (req, res) => {
    res.send('Hello TEST')
};

module.exports = {
    homeRoute, testRoute
};