import * as dotenv from 'dotenv';
dotenv.config();
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const tokenVerify = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new Error('No token provided');
        };
        const payload = jwt.verify(token, `${process.env.SECRET_KEY}` as string);
        req.body.payload = payload;
        next();
    } catch (error: any) {
        return res.status(500).json({ok: false, error: error.message});
    }
   
};
