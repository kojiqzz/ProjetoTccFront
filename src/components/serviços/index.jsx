import './index.scss'
import { Link } from 'react-router-dom'

export default function Servico({trabalho,valor}){
    const Linha = () => {
        return <div className="linha"></div>;
    };
    return(
        <div className='informacoes'>
            <div className='info'>
                <h1 className='trabalho'>{trabalho}</h1>
                <h1 className='valor'>R${valor}</h1>
                <Link className='agenda'>AGENDAR</Link>
            </div>
                <Linha/>
        </div>
    )
}