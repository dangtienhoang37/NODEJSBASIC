import HttpStatusCode from '../error/HttpStatusCode.js'
import jwt from 'jsonwebtoken'

export default function checkToken(req,res,next){ //next nghia la request se dc di tiep, ko goi next => req ko dc di tiep
    // ko ap dung(bypass) voi login, register
    if (req.url.toLowerCase().trim() == '/users/login'.toLowerCase().trim()|| req.url.toLowerCase().trim() == '/users/register'.toLowerCase().trim()){
        next()
        return
    }
    //other request
    //get and validate token
    const token = req.headers.authorization.split(" ")[1]
    try {
        const jwtObject = jwt.verify(token,process.env.JWT_SECRET)
        debugger
    } catch (exception) {
        res.result(HttpStatusCode.BAD_REQUEST).json({
            message: error.message
        })
    }
    debugger
}