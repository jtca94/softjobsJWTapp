import { pool } from '../database/dbConnect'
import { User } from '../types/types'

export const generateUser = async (email: string, passwordHashed: string, rol: string, lenguaje: string): Promise<User> => {
    const text = 'INSERT INTO usuarios (email, password, rol, lenguaje) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [email, passwordHashed, rol, lenguaje];
    const {rows} = await pool.query(text, values);
    return rows[0];
};