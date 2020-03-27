import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import LogoImg from '../../assets/3129560 1.svg';

import api from '../../services/api';

import './style.css';

export default function Home(){

    const [ devs, setDev ] = useState([]);

    const token = localStorage.getItem('token');

    const user = localStorage.getItem('user');

    const history = useHistory();

    useEffect(
        ()=>{
            api.get('home', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }               
            }).then(response => {
                setDev(response.data);

            })
        }, 
        [token]
    );

    function logout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="home-container">
            <section>                
                <div className="title">
                    <h1>LISTA DE USUARIOS</h1>
                    <h3>Usuario: <span>{ user }</span></h3>
                </div>
                {devs.map(dev => (
                    <div key={ dev._id } className="cards">
                        <h2>Dev: <span>{ dev.email }</span></h2>
                        <h2>Tech: <span>{ dev.tech }</span></h2>
                        <h2>Descrição: <span>{ dev.description }</span></h2>
                    </div>
                ))}
                <button onClick={ logout }>sair</button>
            </section>
            <div className="img">
                <img src={ LogoImg } alt="Logo"/>
            </div>
        </div>
    );
}