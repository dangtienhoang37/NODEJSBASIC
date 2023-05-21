const login = async(req,res) => {
    
        //email- pass
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {email, password} = req.body
        //validation - su dung expressvalidator
        
        res.send('Post login user')

}