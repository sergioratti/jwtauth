import { Router, Request, Response} from 'express'
import UserDao from '@daos/User/UserDao.mock';
import {sign} from 'jsonwebtoken'

const router = Router();
const userDao = new UserDao();


/******************************************************************************
 *                      Login - "POST /api/login"
 ******************************************************************************/

router.post('/login', async (req:Request, res:Response)=>{
    let {username, password} = req.body;
    
    let user = await userDao.getOne(username);
    if(!user || user === null)
        return res.sendStatus(404)

    if(user.password !== password)
        return res.sendStatus(401)

    let token = sign({userId:user.id,exp: Math.floor(Date.now() / 1000) + (60*60)},process.env.JWTSECRET||'');

    return res.json({status:0, token:token});
})

router.post('/logout', async (req:Request, res:Response)=>{

    res.cookie("SESSIONID", '', {httpOnly:true, expires:new Date()});
    return res.json({status:0});
})



/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;