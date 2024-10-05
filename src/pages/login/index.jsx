import './index.scss';
import img2 from '../../assets/images/img2.png';
import olho from '../../assets/images/olho2.png';
import olhofechado from '../../assets/images/olho.png';
import { Link } from 'react-router-dom';
import email from '../../assets/images/email.webp';
import { useState } from 'react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='div2'>
            <div className='login'>
                <div className='informaçoes'>
                    <h1>Login</h1>
                    <div className='inp'>
                        <div className='in1'>
                            <img src={email} alt="" />
                            <input type="text" placeholder='E-mail' />
                        </div>
                        <div className='in2'>
                            <img className='img1' src={img2} alt="" />
                            <input type={showPassword ? 'text' : 'password'} placeholder='senha' />
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
                        <Link to='/inicio' className='b2'>entrar</Link>
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
