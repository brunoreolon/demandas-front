import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

export default function Home(){
    return(
        <div className="body">
            <div className="filtro">
                <p>Pesquisar</p>     
                <input placeholder="pesquisar"></input>     

                <p>Ordenar por</p>
                <p>Mais Recentes</p>
                <p>Mais Antigas</p>
                
            </div>

            <div className="lista">
                <h1>3 Demandas Cadastradas</h1>
                <ul>
                    <li>Site torrent</li>
                    <li>Bruno Reolon</li>
                    <li>criar um site para downloads de jogos torrents</li>
                    <li>20/11/2020</li>
                    <Link className="demanda" to="/demanda">
                        <FiLogIn size={16} color="red"/>
                        Mais informação
                    </Link>  
                </ul>
                <ul>
                    <li>Site torrent2</li>
                    <li>Bruno Reolon</li>
                    <li>criar um site para downloads de jogos torrents</li>
                    <li>20/11/2020</li>
                    <Link className="demanda" to="/demanda">
                        <FiLogIn size={16} color="red"/>
                        Mais informação
                    </Link>      
                </ul>
                <ul>
                    <li>Site torrent3</li>
                    <li>Bruno Reolon</li>
                    <li>criar um site para downloads de jogos torrents</li>
                    <li>20/11/2020</li>
                    <Link className="demanda" to="/demanda">
                    <FiLogIn size={16} color="red"/>
                    Mais informação
                    </Link>     
                </ul>
            </div>
        </div>
            
        );
    }