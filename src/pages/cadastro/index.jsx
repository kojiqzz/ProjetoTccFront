import './index.scss';
import img2 from '../../assets/images/img2.png';
import perfil from '../../assets/images/perfil.png';
import telefone from '../../assets/images/telefone.png';
import email from '../../assets/images/email.webp';
import InputMask from 'react-input-mask';
import olho from '../../assets/images/olho2.png';
import olhofechado from '../../assets/images/olho.png';
import { useState } from 'react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='div3'>
            <div className='login'>
                <div className='informaçoes'>
                    <h1> Cadastre-se</h1>
                    <div className='inp'>
                        <div className='in1'>
                            <img src={perfil} alt="" />
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div className='in2'>
                            <img src={telefone} alt="" />
                            <InputMask mask="(99) 99999-9999" placeholder='Telefone' >
                                {(inputProps) => <input {...inputProps} />} 
                            </InputMask>
                        </div>
                        <div className='in3'>
                            <img src={email} alt="" />
                            <input type="text" placeholder='E-mail' />
                        </div>
                        <div className='in4'>
                            <img  src={img2} alt="" />
                            <input type={showPassword ? 'text' : 'password'} placeholder='senha' />
                            <img 
                                className='password' 
                                src={showPassword ? olho : olhofechado} 
                                alt="" 
                                onClick={() => setShowPassword(!showPassword)} 
                            />
                            </div>
                        <div className='in4'>
                        <img  src={img2} alt="" />
                            <input type={showPassword ? 'text' : 'password'} placeholder='confirmar senha' />
                            <img 
                                className='password' 
                                src={showPassword ? olho : olhofechado} 
                                alt="" 
                                onClick={() => setShowPassword(!showPassword)} 
                            />
                        </div>
                    </div>    
                    <div className='botao'> 
                        <button className='b1'>cadastrar</button>
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
