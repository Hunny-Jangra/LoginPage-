const loginModel = require('../Model/LoginModel');

exports.createUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email) {
            res.status(500).send({
                status: false,
                message: 'Please Provide Email'
            })
        }
        if(!password) {
            res.status(500).send({
                status: false,
                message: 'Please Provide password'
            })
        }
        console.log(email, password);
        const createData = await loginModel.create({email, password})
        res.status(201).send({
            status: true,
            data: createData
        })
    }catch(error) {
        console.log('Error :', error);
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}