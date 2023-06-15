import { pool } from '../database/dbConnect'
import { User } from '../types/types';

export const getUserInfo = async (email: string): Promise<User> => {
    const text = 'SELECT email, rol, lenguaje FROM usuarios WHERE email = $1';
    const values = [email];
    const {rows} = await pool.query(text, values);
    if (!rows[0]) {
        throw new Error('User not found');
    }
    return rows[0];
};