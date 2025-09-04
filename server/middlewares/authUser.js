import jwt from 'jsonwebtoken';


const authUser = async (req, res, next) => {
    const {userToken} = req.cookies;
    if(!userToken)
        return res.json({success: false, message: "Not Authorized"});
    try {
        const tokenDecode = jwt.verify(userToken, process.env.JWT_SECRET);
        if(tokenDecode.id){
            req.userId = tokenDecode.id;
        }else{
            return res.json({success: false, message: "Not Authorized"});
        }
        next();
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export default authUser;