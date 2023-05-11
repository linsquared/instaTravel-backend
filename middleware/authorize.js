const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {
    // If there is no auth header provided
    if (!req.headers.authorization) return res.send("PLEASE LOGIN!")
    // Parse the bearer token
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1] // :`Bearer JWT`

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        console.log(authToken);
        if (decoded) {
            req.decoded = decoded;
            console.log(decoded)
            next();
        }
    } catch (error) {
        return res.send(error)
    }
}

module.exports = authorize;