import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Logon from './pages/Login'
import CadastroUsuario from './pages/CadastroUsuario';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
            </Switch>
        </BrowserRouter>
    );
}