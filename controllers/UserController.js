const UserModel = require('../models/UserModel')
exports.create = async (req, res,) => {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.gpa) {
        res.status(400).render('index', {mydata: "Content can not be empty!"})
    }
    const user = new UserModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gpa: req.body.gpa
    });
    await user.save().then(data => {
        res.render('results', {mydata: "user "+ data.firstName +" created succesfully!"})
    }).catch(err => {
        res.render('results', {mydata: err.message || "Some error occurred while creating user"})
    });
};
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).render('results', {mydata: user})
    } catch(error) {
        res.status(404).render('results', {mydata: error.message})
    }
};
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.query.email}).exec(); //change params to query

        res.status(200).render('results', {mydata: "user :"+ user.firstName +" "
                + user.lastName +" "+ user.email +" "+ user.gpa
        })
    } catch(error) {
        res.status(404).render('results', {mydata: error.message})
    }
};
exports.destroy = async (req, res) => {

    let useremail=req.body.email
    await UserModel.deleteOne({email: useremail}).then(data => {

        if (data.deletedCount===0) {
            res.status(404).render('results', {mydata: "User not found"})

        } else {
            res.status(200).render('results', {mydata: "user "+useremail+" deleted succesfully!"})
        }
    }).catch(err => {
        res.status(500).render('results', {mydata: err.message})
    });
};



