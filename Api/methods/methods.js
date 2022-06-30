import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    console.log(req.body)
    const hash = await bcrypt.hash(req.body.Password, 10);
    const higher_number = 999999999999;
    const lower_number = 111111111111;
    const Aadhar_Number =
      Math.floor(Math.random() * (higher_number - lower_number)) + lower_number;
      const { Email_Address ,isAdmin,First_Name, Last_Name, Phone_number,Home_Address} = req.body
      console.log(Email_Address, First_Name, Last_Name, Phone_number, Home_Address)
    const newUser = new User({
      Email_Address: Email_Address,
      Password: hash,
      isAdmin: isAdmin || false,
      data: {
        First_Name: First_Name,
        Last_Name: Last_Name,
        Phone_number: Phone_number,
        Home_Address: Home_Address,
        Aadhar_Number: Aadhar_Number,
      },
    });
    await newUser.save();
    res.json({message:"user saved successfully",status: 200})
  } catch (err) {
    console.log(err)
     res.json({ message: "user is already there" ,status: 400}).send()
  }
};

export const data = async (req, res, next) => {
  try {
    const user = await User.findOne({
      Email_Address: req.body.Email_Address,
    }).exec();
    console.warn(user);
    if (!user) return res.statusCode(400).json({ message: "User not found"});
    const isPasswordCorrect = await bcrypt.compare(
      req.body.Password,
      user.Password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "username or password incorrect" });
    const { Email_Address, Password, ...otherDetails } = user._doc;
    const isAdmin = user._doc.isAdmin;

    if (isAdmin === false) {
      res.status(200).send({ ...otherDetails });
    } else if (isAdmin === true) {
      const token = jwt.sign(
        { Email_Address: user.Email_Address, isAdmin: user.isAdmin },
        process.env.Secret_key
      );
      res.json({ token: token, isAdmin: true }).send();
    }
  } catch (err) {
    res.json({ message: err }).status(500);
  }
};
