import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

export default function Demanda() {
    return (
        <div className="Demanda-container">
            <section className="form">
                <h1>Demanda</h1>

                <Link className="back-link" to="/home">
                    <FiArrowLeft size={16} color="red"/>
                    Voltar
                </Link>    
            </section>

            
                <div className= "DadosDemanda">
                    <h1>Nome da Empresa</h1>
                    <p>Status</p>
                    <p>Segmento</p>

                    <h1>Descrição Demandas</h1>
                    <p>Problema à ser Resolvido</p>

                    <h1>Objetivos</h1>
                    <p>O que se espera do projeto</p>

                    <h1>O que estamos procurando</h1>
                    <p>Solução do Problema</p>

                    <h1>Requisitos para submeter a proposta</h1>
                    <p>Atender a descrição da Demanda</p>

                    <h1>Informações Complementares</h1>
                    <p>Midia:</p>
                    <p>Arquivo:</p>
                </div>

                <div>
                <button className="button" type="submit">Mais Informações</button>
                    <h1>Instituição</h1>
                    <p></p>
                </div>
            
        </div>
    );
        

}