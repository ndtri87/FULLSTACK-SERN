import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs parameter!",
        })
    }

    let userData = await userService.handleUserLogin(email, password);
    // Check email có tồn tại hay không
    // So sánh password người dùng nhập
    // return userInfo
    // access_token: JWT json web token

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
        // Nếu user tồn tại trả ra userinfo, nếu không trả ra case sau
    })
}

module.exports = {
    handleLogin: handleLogin
}