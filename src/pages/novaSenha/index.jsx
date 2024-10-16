import './index.scss';
import img2 from '../../assets/images/img2.png';
import olho from '../../assets/images/olho2.png';
import olhofechado from '../../assets/images/olho.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function RedefinicaoNovaSenha() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='div2'>
            <div className='login'>
                <div className='informaçoes'>
                    <h1>Redefina sua senha</h1>
                    <div className='inp'>
                        <div className='in1'>
                            <img className='img' src={img2} alt="" />
                            <input 
                            type={showPassword ? 'text' : 'password'} 
                            placeholder='Insira sua nova senha' 
                            />
                            <img 
                                className='password' 
                                src={showPassword ? olho : olhofechado} 
                                alt="" 
                                onClick={() => setShowPassword(!showPassword)} 
                            />
                        </div>
                        <div className='in2'>
                            <img className='img1' src={img2} alt="" />
                            <input 
                            type={showPassword ? 'text' : 'password'} 
                            placeholder='Confirmar a nova senha' 
                            />
                            <img 
                                className='password' 
                                src={showPassword ? olho : olhofechado} 
                                alt="" 
                                onClick={() => setShowPassword(!showPassword)} 
                            />
                        </div>
                    </div>   
                    <div className='botao'> 
                        <button  className='b2'>Redefinir</button>
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
