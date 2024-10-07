import './index.scss';

export default function Servico({ trabalho, valor, onAgendar }) {
    return (
        <div className='informacoes'>
            <div className='info'>
                <h1 className='trabalho'>{trabalho}</h1>
                <h1 className='valor'>R${valor}</h1>
                <button className='agenda' onClick={onAgendar}>AGENDAR</button>
            </div>
            <div className='linha'></div>
        </div>
    );
}
