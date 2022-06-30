import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
function tokenVerification(req, res, next) {
    const token = req.headers.authorization
    if(!token)
    res.status(403).json({message:"you are not allowed"})
    else if(token){
      
            const data = jwt.decode(token,process.env.Secret_key)
            const isAdmin = data.isAdmin
            if(isAdmin===true){
               return next()
            }
            else{
                console.log("error")
                res.json({message:"you are not allowed "})
            }
        }
    }



export default tokenVerification