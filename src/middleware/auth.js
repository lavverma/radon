const jwt = require("jsonwebtoken");

let tokenVerification = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];//token store data from headers of req

    if (!token) return res.send({ status: false, msg: "token must be present" });
    res.setHeader("x-auth-token", token);


    let decodedToken = jwt.verify(token, "functionup-radon");//verfiying token
    if (!decodedToken)
        return res.status(401).send({ status: false, msg: "token is invalid" });
        
    next()
}
module.exports.tokenVerification = tokenVerification



let authoriseUser = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
 
    let decodedToken = jwt.verify(token, "functionup-radon");
    
    let userLoggedIn = decodedToken.userId;
    let userToBeModified = req.params.userId;
    if (userLoggedIn != userToBeModified) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify in other user data' })

    next()
}
module.exports.authoriseUser = authoriseUser
