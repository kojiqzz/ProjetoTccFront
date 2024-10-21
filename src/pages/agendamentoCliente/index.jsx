import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AgendamentosCliente() {
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        const clienteId = localStorage.getItem('USUARIO_ID'); 

        const fetchAgendamentos = async () => {
            try {
                const url = `http://localhost:5001/agendamento?cliente_id=${clienteId}`;
                const resp = await axios.get(url);
                setAgendamentos(resp.data);
            } catch (error) {
                console.error('Erro ao carregar agendamentos:', error);
            }
        };

        fetchAgendamentos();
    }, []);

    return (
        <div className='div-mae'>
            <div className='agenda'>
                <div className='esq2'> 
                <h1 className='my-agenda'>Meus Agendamentos</h1>
                {agendamentos.map((agendamento) => (
                    <div className='card-info' key={agendamento.id}>
                        <div className='esq'>
                            <p className='confirma'>Confirmada</p>
                            <p className='serviço'>{agendamento.trabalho}</p>
                            <div className='butao'>
                                <button className='b1'>Desmarcar</button>
                                <button className='b2'>Remarcar</button>
                            </div>
                        </div>
                        <div className='divisao2'></div>
                        <div className='dir'>
                            <div className='linha-'></div>
                            <div className='ps'>
                                <p className='p1'>{new Date(agendamento.dia).toLocaleString('pt-BR', { month: 'long' })}</p>
                                <p className='p2'>{new Date(agendamento.dia).getDate()}</p>
                                <p className='p3'>{agendamento.hora}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='divisao'></div>
                <div className='dir'>

                </div>
            </div>
        </div>
    );
}
