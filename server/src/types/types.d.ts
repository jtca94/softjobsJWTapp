export interface User {
    email: string,
    password: string,
    rol: string,
    lenguaje: string
};

// user interface but omit the password
export type UserWithoutPassword = Omit<User, 'password'>;
export type Password = Pick<User, 'password'>;
