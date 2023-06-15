import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { generateUser } from '../models/generateUser';
import { verifyUser } from '../models/verifyUser';
import bcrypt from 'bcryptjs';

const createUser = async (req: Request, res: Response) => {
    try {
        const { email, passwordHashed, rol, lenguaje } = req.body;
        const user = await generateUser(email, passwordHashed, rol, lenguaje);
        return res.json({ok: true, user});
    } catch (error: any) {
        return res.status(500).json({ok: false, error: error.message});
    }
};

const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await verifyUser(email);
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid password');
        };
        const token = jwt.sign({email}, `${process.env.SECRET_KEY}` as string, {expiresIn: '1h'});
        console.log(token)
        return res.json({ok: true, token});
    } catch (error: any) {
        return res.status(500).json({ok: false, error: error.message});
    }
};

export const postControllers = {
    createUser,
    loginUser
};