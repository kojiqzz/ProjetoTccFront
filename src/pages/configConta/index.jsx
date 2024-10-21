import './index.scss'
import { Link } from 'react-router-dom'
import perfil from '../../assets/images/perfil2.webp'

export default function ConfigurarConta(){
    return(
        <div className='config'>
            <h1>configuração de conta</h1>



            <div className='foto-cliente'>
                <div className='texto-foto'>
                    <h1 className='alterar'>Alterar foto do perfil</h1> 
                    <p className='carregar-text'>Carregue uma nova foto para alterar sua foto de perfil.</p>

                    
                </div>
                <div className='icone'>
                        <img src={perfil} alt="" />
                </div>

                    <div className='botaoes'>

                </div>
            </div>
            
        </div>
    )
}