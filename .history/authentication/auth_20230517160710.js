export default function checkToken(req,res,next){ //next nghia la request se dc di tiep, ko goi next => req ko dc di tiep
    // ko ap dung(bypass) voi login, register
    // debugger
    if (req.url == '/users/login'|| req.url == '/users/register'){
        next()
        return
    }
}