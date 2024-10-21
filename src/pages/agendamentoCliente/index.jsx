import './index.scss'

export default function AgendamentosCliente(){
    return(
        <div className='div-mae'>
            <div className='agenda'>
                <div className='agenda1'>
                    <h1 className='my-agenda'>meus agendamentos</h1>
                <div className='card-info'>
                    <div className='esq'>
                        <p className='confirma'>confirmada</p>
                        <p className='serviço'>Escova e prancha</p>
                        <div className='butao'>
                            <button className='b1'>desmarcar</button>
                            <button className='b2'>remarcar</button>
                        </div>
                    </div>
                    <div className='divisao2'></div>
                    <div className='dir'>
                        <div className='linha-'></div>
                        <div className='ps'>
                            <p className='p1'>outubro</p>
                            <p className='p2'>19</p>
                            <p className='p3'>15:00</p>
                        </div>
                    </div>
                 </div>
                </div>
                <div className='divisao'></div>
            </div>   
        </div>
    )
}