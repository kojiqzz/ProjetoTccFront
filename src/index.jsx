import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/inicial'
import LoginPage from './pages/login';
import RegisterPage from './pages/cadastro';
import RedefinicaoSenha from './pages/redefinicaoSenha';
import Servicos from './pages/serviços';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/inicio' element={<HomePage />} />
          <Route path='/cadastro' element={<RegisterPage/>} />
          <Route path='/redefinicaoSenha' element={<RedefinicaoSenha/>} />
          <Route path='/servicos' element={<Servicos/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
