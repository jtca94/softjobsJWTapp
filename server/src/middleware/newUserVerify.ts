import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
export const validUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        const { email, password, rol, lenguaje } = req.body;
        if (!email || !password || !rol || !lenguaje) {
            throw new Error('Missing fields')
        };
        // VALIDATE E MAIL AND PASSWORD FORMAT
        // hash the password so it wont be publicly available on the db
        const hashPassword = await bcrypt.hash(password, 10);
        req.body.passwordHashed = hashPassword;
        next();
    } catch (error: any) {
        return res.status(500).json({ok: false, error: error.message});
    }
   
};
