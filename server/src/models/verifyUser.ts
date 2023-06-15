import { pool } from '../database/dbConnect'
import { Password } from '../types/types';

export const verifyUser = async (email: string): Promise<Password> => {
    const text = 'SELECT password FROM usuarios WHERE email = $1';
    const values = [email];
    const {rows} = await pool.query(text, values);
    if (!rows[0]) {
        throw new Error('User not found');
    };
    return rows[0];
};