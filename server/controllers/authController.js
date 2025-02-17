const express = require("express");
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");


const test = (req, res) => {

    res.send("Hello from test controller")
}

const registerUser = async (req, res) => {

    const { FirstName, LastName, Email, Password } = req.body;

    try {


        //Check FirstName and LastName

        if (!FirstName) {
            return res.json({
                error: "FirstName is required"
            })
        }

        if (!LastName) {
            return res.json({
                error: "LastName is required"
            })
        }

        //Check Email

        if (!Email) {
            return res.json({
                error: "Email is required"
            })
        }

        // Check Password

        if (!Password || Password.length < 6) {
            return res.json({
                error: "Password is required and must be minimum 6 characters"
            })
        }


        //Check if user email already exist

        const userAlreadyExist = await User.findOne({ Email });



        if (userAlreadyExist) {
            return res.json({
                error: "User already registered , Kindly login"
            })
        }
        else {

            // Genrate hashedpassword
            const hashedpassword = await hashPassword(Password);

            const user = await User.create({ FirstName, LastName, Email, Password: hashedpassword, });

            return res.json(user);

        }



    } catch (error) {
        console.log(error);
    }


}


const loginUser = async (req, res) => {

    try {
        const { Email, Password } = req.body;

        // Check Email 

        if (!Email) {
            return res.json({
                error: "Email is required"
            })
        }

        // Check Password

        if (!Password) {
            return res.json({
                error: "Password is required"
            })
        }

        const user = await User.findOne({ Email });

        if (!user) {
            return res.json({
                error: "The user doesnt exist"
            })
        }
        else {
            const passwordMatch = await comparePassword(Password, user.Password);

            if (passwordMatch) {

                jwt.sign({ FirstName: user.FirstName, LastName: user.LastName, Email: user.Email, id: user._id, Password: user.Password }
                    , process.env.JWT_Secret, {}, (err, token) => {
                        if (err) throw err;
                        res.cookie("token", token , {
                            httpOnly: true,   // Security: Prevents access from JavaScript
                            secure: true,     // Required for HTTPS (Render uses HTTPS)
                            sameSite: 'None', // Required for cross-origin cookies
                          }).json(user);
                    })

            }
            else {
                return res.json({
                    error: "Password does not match"
                })
            }
        }

    } catch (error) {
        console.log(error);
    }


}

const getUser = (req, res) => {

    const { token } = req.cookies;

    if (token) {
        jwt.verify(token, process.env.JWT_Secret, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        })
    }
    else {
        res.json(null);
    }

}

const logoutUser = (req , res) => {
    res.clearCookie('token');
    return res.status(200).json({ message: "Logged out successfully" });
}


module.exports = {
    test,
    registerUser,
    loginUser,
    getUser,
    logoutUser
}
