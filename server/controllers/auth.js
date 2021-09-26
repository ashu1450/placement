const User = require('../models/User');
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.register = async (req,res, next) => {
   const {name, email, password} = req.body; // extracting all from body with the help of middlleware used in server.js

   // creating new user for registration
   try {
      const user = await User.create({
        name,email,password
      });
      
    //   res.status(201).json({
    //       success: true,
    //       token: "hdfiowhjsbn37438"
    //   });
    sendToken(user, 201, res);
   } catch (error) {
    //    res.status(500).json({
    //        success: false,
    //        error: error.message,   
    //    });
    next(error); // instead of above we can use middleware for error like this
   }


};

// Creating login of user
exports.login = async(req,res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        // return res.status(400).json({success: false, error: "Please provide email and password"});
        return next(new ErrorResponse("Please provide an email and password",400));          //middleware error
    }

    // this is checking user email if exist or not 
    try {
       const user = await User.findOne({email}).select("+password") ;
       if(!user){
          //return res.status(400).json({success: flase, error: "Invalid Credentials"});
          return next(new ErrorResponse("Invalid Credentials",401));      
       }
       const isMatch = await  user.matchPasswords(password);  // this is matching user password breforing login from database
       if(!isMatch){
          //return res.status(404).json({success: false , error: "Invalid Crendentials"});
          return next(new ErrorResponse("Invalid Credentials",401));
       }

    //    res.status(200).json({
    //     success: true,
    //     token: "iefy98rifjsxhiozxhjhrio",
    // });
    sendToken(user, 200, res);

    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
    // res.send("Login Route");
};

exports.forgotpassword = async(req,res, next) => {
    
      // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();
     // Create reset url to email to provided email
     const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

     // HTML Message
     const message = `
       <h1>You have requested a password reset</h1>
       <p>Please make a put request to the following link:</p>
       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
     `;

    try {
        await sendEmail({
            to: user.email,
            subject: "Password Reset Request",
            text: message,
          });
          res.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
        console.log(err);

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
  
        await user.save();
  
        return next(new ErrorResponse("Email could not be sent", 500));
        
    } 
}catch(error){
    next(err);
}
};

exports.resetpassword = async(req,res, next) => {
   // Compare token in URL params to hashed token
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
     // token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }

};

const sendToken = (user, statusCode, res) =>{
    const token = user.getSignedToken();
    res.status(statusCode).json({success: true, token});
}