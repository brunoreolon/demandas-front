import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Logon from './pages/Login'
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroDemanda from './pages/CadastroDemanda';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/cadastro-demanda" component={CadastroDemanda} />
            </Switch>
        </BrowserRouter>
    );
}