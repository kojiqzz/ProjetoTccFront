import './index.scss'
import img2 from '../../assets/images/img2.png'
import { Link } from 'react-router-dom'
import email from '../../assets/images/email.webp'

export default function RedefinicaoSenha(){
    return(
        <div className='div2'>

            <div className='login'>
                <div className='informaçoes'>
                    <h1>Redefinição de senha </h1>
                    <p>Insira seu email para redefiniçao de senha </p>
                    <div className='inp'>
                        <div className='in1'>
                            <img  src={email} alt="" />
                            <input  type="text" placeholder='E-mail' />
                        </div>
                    </div>    
 
                    <div className='botao'> 
                        <Link to='/inicio' className='b2'>Enviar</Link>
                    </div>
                </div>
                <div className='bem-vinda'>
                    <h1 className='h1'>Esqueceu sua senha ?</h1>
                </div>
            </div>
        </div>
    )
}
