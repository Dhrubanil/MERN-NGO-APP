const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) {
            return res.status(401).json({ msg: "No authantication token" });
        }
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        if (!verified) {
            return res.status(401).json({ msg: "token verification failed" });
        }
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(400).send(err);
    }


}
module.exports = auth