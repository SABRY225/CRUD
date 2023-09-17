const User = require('../model/user');


insertUser = async (req, res) => {
    let userNew = new User({
        userName: req.body.username,
        userEmail: req.body.useremail
    })
    try {
        const livrosResultado = await userNew.save();
        console.log(livrosResultado);
        res.redirect('/getusers');
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }

}
getUser = async (req, res) => {

    try {
        const livrosResultado = await User.find();
        // res.status(200).json(livrosResultado)
        // console.log(livrosResultado);
        res.render('index', { items: livrosResultado });
    } catch (err) {
        // res.status(500).json(err);
        console.log(err);
        // res.redirect('/');
    }

}
updateUser = async (req, res) => {
    const ID = req.body.id;
    const updateNew = {
        userName: req.body.username,
        userEmail: req.body.useremail
    }
    try {
        const livrosResultado = await User.updateOne({ _id: ID }, { $set: updateNew });
        console.log(livrosResultado);
        res.redirect('/getusers');
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }

}

deleteUser = async (req, res) => {
    const ID = req.body.id;
    try {
        const livrosResultado = await User.deleteOne({ _id: ID });
        console.log(livrosResultado);
        res.redirect('/getusers');
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }

}

module.exports = {
    insertUser : insertUser,
    getUser    :    getUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}