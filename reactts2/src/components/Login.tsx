import React from 'react';
import UserService from '../services/user';
import { useDispatch } from 'react-redux';

let usuarioInput: HTMLInputElement | null;
let senhaInput: HTMLInputElement | null;

const Login = () => {

    const dispatch = useDispatch();

    const _onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = await UserService.login({
            usuario: usuarioInput ? usuarioInput.value.trim() : '',
            senha: senhaInput ? senhaInput.value.trim() : ''
        });

        if (data instanceof Error) {
            alert(`${data.message}`);
            return;
        } 

        dispatch({
            type: 'LOGIN',
            payload: {
                user: UserService.processToken(data.token),
                token: data.token
            }
        })

    }

    return(
        <div id="login-form">
            <form onSubmit={_onSubmit}>
                <input type="text" ref={node => usuarioInput = node} required placeholder="Usuário"/>
                <input type="password" ref={node => senhaInput = node} required placeholder="Senha" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login;