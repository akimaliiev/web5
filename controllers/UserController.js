const UserModel = require('../models/UserModel')
// Create and Save a new user
exports.create = async (req, res,) => {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone) {
        //res.status(400).send({ message: "Content can not be empty!" });
        res.status(400).render('index', {mydata: "Content can not be empty!"})
    }

    const user = new UserModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    await user.save().then(data => {
        /*res.send({
            message:"User created successfully!!",
            user:data
        });*/
        res.render('index', {mydata: "user "+ data.firstName +" created succesfully!"})
    }).catch(err => {
        /*res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });*/
        res.render('index', {mydata: err.message || "Some error occurred while creating user"})
    });
};

