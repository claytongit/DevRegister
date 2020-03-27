import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import LogoImg from '../../assets/18907 1.svg'

import './style.css';

export default function Login(){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const history = useHistory();

    async function handleLogin(event){
        event.preventDefault();

        if(email === '' || password === ''){
            alert('Preencha todos os campos para logar')
        }else{
            try {
                const response = await api.post('/', { email, password });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', email);
                history.push('/home');
            } catch (error) {
                alert('Usuario ou senha incorretos, tente novamente');
            }
        }
    }

    return(
        <div className="login-container">            
            <div className="contante">
                <form onSubmit={ handleLogin }>
                    <input 
                    type="text" 
                    placeholder="Informe seu email" 
                    value={ email }
                    onChange={ event => setEmail(event.target.value) }
                    />
                    <input 
                    type="password" 
                    placeholder="Insira a sua Senha" 
                    value={ password }
                    onChange={ event => setPassword(event.target.value) }
                    />

                    <button type="submit">ENTRAR</button>
                </form>
                <div className="link">
                    <span>Não é cadastrado?</span>
                    <Link to="/register">Cadastra-se</Link>
                </div>                
            </div>            
            <section>
                <img src={ LogoImg } alt="Logo" />
            </section>
        </div>
    );
}