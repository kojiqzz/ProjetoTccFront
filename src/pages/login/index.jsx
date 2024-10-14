import './index.scss';
import img2 from '../../assets/images/img2.png';
import olho from '../../assets/images/olho2.png';
import olhofechado from '../../assets/images/olho.png';
import { Link } from 'react-router-dom';
import perfil from '../../assets/images/email.webp';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const navigate = useNavigate()

    async function entrar() {
        const usuario = {
            "email": email,
            "senha": senha
        }

        const url = `http://localhost:5001/entrar/`
        let resp = await axios.post(url, usuario)

        
        if (resp.data.erro != undefined) {
            alert(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/inicio')
        }
    }

    return (
        <div className='div2'>
            <div className='login'>
                <div className='informaçoes'>
                    <h1>Login</h1>
                    <div className='inp'>
                        <div className='in1'>
                            <img className='img' src={perfil} alt="" />
                            <input 
                            type="text" 
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='in2'>
                            <img className='img1' src={img2} alt="" />
                            <input 
                            type={showPassword ? 'text' : 'password'} 
                            placeholder='senha' 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}/>
                            <img 
                                className='password' 
                                src={showPassword ? olho : olhofechado} 
                                alt="" 
                                onClick={() => setShowPassword(!showPassword)} 
                            />
                        </div>
                    </div>    
                    <Link className='senha' to='/redefinicaoSenha'>esqueceu sua senha?</Link>   
                    <div className='botao'> 
                        <Link to='/cadastro' className='b1'>cadastrar-se</Link>
                        <Link  className='b2' onClick={entrar} >entrar</Link>
                    </div>
                </div>
                <div className='bem-vinda'>
                    <h1 className='h1'>Bem-Vinda!</h1>
                    <h1 className='h2'>Pronta para realçar sua beleza?</h1>
                </div>
            </div>
        </div>
    );
}
