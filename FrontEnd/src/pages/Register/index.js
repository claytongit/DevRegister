import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import LogoImg from '../../assets/3411109 1.svg';

import './style.css';

export default function Register(){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ tech, setTech ] = useState('');
    const [ description, setDescription ] = useState('');

    const history = useHistory();

    async function handleRegister(event){
        event.preventDefault();

        const data = {
            email,
            password,
            tech,
            description
        };

        if(email === '' || password === '' || tech === '' || description === ''){
            alert('Preecha todos os campos');
        }else{
            try {

                await api.post('register', data);
    
                alert(`Seu email foi cadastrado com sucesso`);
    
                history.push('/');
    
            } catch (error) {
                alert('Erro ao cadastrar, tente novamente');
            }
        }

    }

    return(
        <div className="register-container">
            <section>
                <img src={ LogoImg } alt="Logo"/>
            </section>
            <div className="contante">
            <form onSubmit={ handleRegister }>
                <input 
                type="text" 
                placeholder="Email" 
                value={ email }
                onChange={ event => setEmail(event.target.value) }
                />
                <input 
                type="password" 
                placeholder="Senha" 
                value={ password }
                onChange={ event => setPassword(event.target.value) }
                />
                <input 
                type="text" 
                placeholder="Tecnologia" 
                value={ tech }
                onChange={ event => setTech(event.target.value) }
                />
                <textarea 
                placeholder="Informe sua descrição" 
                rows="2"
                value={ description }
                onChange={ event => setDescription(event.target.value) }
                ></textarea>
                <button type="submit">CADASTRAR</button>                
            </form>
            <div className="link">
                <Link to="/">Voltar a logar</Link>
            </div>
            </div>
        </div>
    );
}