import express from 'express'
import User from '../models/user.js'
import tokenverification from '../middleware/tokenverification.js'
import { register } from '../methods/methods.js';
const router = express.Router();


router.post("/",register)



router.get('/',tokenverification,async(req, res)=>{
try{
    const data = await User.find()
     res.send(data).status(200)
}catch(err){
res.json({message:"no user found"}).status(404).send()
}
})

export default router