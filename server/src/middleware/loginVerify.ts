import {Request , Response , NextFunction} from 'express';

export const checkCredentials = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Missing fields')
        };
        next();
    } catch (error: any) {
        return res.status(500).json({ok: false, error: error.message});
    }
   
};