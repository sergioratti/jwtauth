import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';



let checkjwt = async (req: Request, res: Response, next: NextFunction) => {

    if (/login/g.test(req.url))
        return next();

    // else i have to check if token is valid

    const token = req.get('Authorization')?.replace('Bearer ','');

    if (!token)
        return res.status(401).json({ status: 401, message: 'jwt missing' });

    verify(token, process.env.JWTSECRET || '', (err, decoded) => {
        if (err){
            console.log(err);
            return res.status(401).json({ status: 401, message: err.message });
        }
        else if (!decoded)
            return res.status(401).json({ status: 401, message: 'jwt missing' });
        else
            return next();


    });




}

export default checkjwt