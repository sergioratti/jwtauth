import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';



let checkjwt = async (req: Request, res: Response, next: NextFunction) => {

    if (/login/g.test(req.url))
        return next();

    // else i have to check if token is valid

    const token = req.get('Authorization');
    
    if (!token)
        return res.sendStatus(401);

    try {
        let decoded: any = verify(token, process.env.JWTSECRET || '');

        if (decoded.userId !== undefined)
            return next();
        else
            return res.sendStatus(401);
    }
    catch (err) {
        return res.sendStatus(401);
    }


}

export default checkjwt