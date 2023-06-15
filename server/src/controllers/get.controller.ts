import * as dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import { getUserInfo } from '../models/userInfo';


const userInfo = async (req: Request, res: Response) => {
    try {
        const { email } = req.body.payload;
        const user = await getUserInfo(email);
        return res.json({ ok: true, user });
    } catch (error: any) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};

export const getControllers = {
    userInfo
};