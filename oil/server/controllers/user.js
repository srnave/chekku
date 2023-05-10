const User = require('../model/UserModel')
const Counter = require('../model/counterModel')
const jwt = require('jsonwebtoken');
exports.SignUp = async (req, res) => {
    let userid;
    const value = await Counter.findOneAndUpdate(
        { id: "autoval" },
        { "$inc": { "seq": 1 } },
        { new: true })


    if (value == null) {
        const newval = new Counter({ id: "autoval", seq: 1 })
        newval.save();
        userid = 1;

    } else {
        userid = value.seq;
        console.log(value.seq);
    }
    console.log(req.body)
    const { name, email, oil, quantity, phoneno, tquantity,streetname, city, state, pincode,price } = req.body;

    const user = new User({

        name,
        email,
        oil,
        quantity,
        phoneno,
        tquantity,
        streetname,
        city,
        state,
        pincode,
        price
    })
    user.save();
    res.send({ message: "Successfull Register" })

}


exports.Login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    // jwt.sign({id},"jwtwebtoken",{expiresIn: 300})
    const data = await User.findOne({ email: email });
    if (data) {
            if (password == data.password) {
                console.log(data.id)
                res.status(201).json({
                    status: 'success',
                    data: data,
                });
            }
            else {
                res.status(400).json({
                    status:'error',
                    message: `Password didn't match`
                });
            }
        }
    else {
        res.status(400).json({
            status:'error',
            message: `This email id is not register`
        });
    }

}