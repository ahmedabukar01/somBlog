// registration
const userRegister = (req,res) =>{
    res.status(200).json({message: 'here for registration :) '})
}
// login User
const loginUser = (req,res) =>{
    res.status(200).json({message: 'here for login page /\:) '})
}
// user profile
const userProfile = (req,res) =>{
    res.status(200).json({message: 'here for user profile info :) '})
}

module.exports = {
    userRegister,
    userProfile,
    loginUser
}