import apiClient from './api-client';
import User from '../models/user';
import jwtDecode from 'jwt-decode';

type JwtToken = {
    aud: string
    email: string
    exp: number
    iat: number
    iss: string
    name: string
    scopes: string[] | number[]
    sub: number
    username: string,
    [propName: string]: any
}

export type LoginData = {
    usuario:string, 
    senha: string
}

export type LoginResponse = {
    token: string;
}

const UserService = {
    login: async (data:LoginData):Promise<LoginResponse | Error> => {
        try { 
            const res = await apiClient.post<LoginResponse>('/login', data);
            return res.data;
        } catch (e) {
            return new Error(`Erro ao fazer login: ${e.toString()}`)
        }
    },

    list: async (): Promise<User[] | Error> => {
        try {  
            const res = await apiClient.get<User[]>('/users');
            return res.data;
        } catch (e) {
            return new Error(`Erro ao listar usuários: ${e.toString()}`)
        }
    },

    processToken: (token: string): User => {
        const tokenData:JwtToken = jwtDecode(token);

        const user: User = {
            "id": tokenData.sub,
            "name": tokenData.name,
            "username": tokenData.username,
            "email": tokenData.email,
            "scopeId": tokenData.scopes[0] as string
        }
        return user;
    }


};

export default UserService;