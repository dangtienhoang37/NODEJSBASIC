import HttpStatusCode from '../error/HttpStatusCode.js'


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
        
    } catch (exception) {
        res.result()
    }
    debugger
}