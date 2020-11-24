import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

import DashBoard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound';

import RelProdutos from '../pages/Relatorio/RelProdutos';
import RelVendas from '../pages/Relatorio/RelVendas';


import CadProdutos from '../pages/Cadastro/CadProdutos';
import ListaUser from '../pages/Usuario/Perfil/ListaDeUsuarios';
import cadUsuarios from '../pages/Cadastro/CadUsuarios';
import CadCategorias from '../pages/Cadastro/CadCategorias';


import Forgout from '../pages/Forgout/Forgout';
import Perfil from '../pages/Usuario/Perfil/Perfil.js';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp}/>
    <Route path="/forgout" component={Forgout}/>



    {/* Rotas que só podem ser acessadas se estiver logado */}
    <Route path="/dashboard" component={DashBoard} isPrivate/>


       {/* Aqui em baixo começa as rotas de Cadastro */}
    <Route path="/cadastro/produtos" component={CadProdutos} isPrivate/>
    <Route path="/cadastro/pessoas" component={cadUsuarios} isPrivate/>
    <Route path="/cadastro/pessoas/editar/:idUsuario" component={ListaUser} isPrivate/>



    <Route path="/cadastro/categorias" component={CadCategorias} isPrivate/>


            {/* Aqui em baixo começa as rotas de relatorios */}
    <Route path="/relatorio/produtos" component={RelProdutos} isPrivate/>
    <Route path="/relatorio/vendas" component={RelVendas} isPrivate/>



    <Route path="/recuperar" component={Forgout} isPrivate/>
    <Route path="/perfil/:idUsuario" component={Perfil} isPrivate/>
    <Route path="/usuarios/lista" component={ListaUser} isPrivate/>



    <Route path="*" component={NotFound}/>
  </Switch>
)

export default Routes;
