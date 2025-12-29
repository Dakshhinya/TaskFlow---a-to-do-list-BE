const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ error: "No token provided" });
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Invalid token format" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded user:", decoded); // Debugging
        req.user = decoded; 
        next();
    } catch (err) {
            console.log("JWT verification failed:", err.message);
        return res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = authMiddleware;
