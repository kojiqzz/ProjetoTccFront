import './index.scss'
import servicos from '../../assets/images/servicos.webp'
import seta from '../../assets/images/seta-direita.webp'
import { Link } from 'react-router-dom'
import Servico from '../../components/serviços';

export default function Servicos(){
    const Linha = () => {
        return <div className="linha"></div>;
    };

    let servico = [
        {
            'trabalho':'Escova e Prancha',
            'valor':'30,00'
        },{
            'trabalho':'Hidratação + Escova e Prancha',
            'valor':'50,00'
        },{
            'trabalho':'Cronograma capilar',
            'valor':'100,00'
        },{
            'trabalho':'Progressiva sem formol',
            'valor':'70,00'
        },{
            'trabalho':'Progressiva com formol',
            'valor':'90,00'
        },{
            'trabalho':'Botox',
            'valor':'60,00'
        },{
            'trabalho':'Selagem',
            'valor':'120,00'
        },{
            'trabalho':'Linpeza de pele profunda',
            'valor':'50,00'
        },{
            'trabalho':'massagem facial',
            'valor':'45,00'
        },{
            'trabalho':'massagem relaxante corporal',
            'valor':'100,00'
        },
        
    ]

    return(
        <div className='divmae'>
            <div className='imgsev'>
                <img src={servicos} alt="" />
                <h1>serviços</h1>
            </div>
            <div className='sevicos'>
                <div className='voltar'> 
                    <Link to='/inicio'>
                        <img src={seta} alt="" />
                    </Link>                                  
                    <h1>voltar</h1>
                </div>
                <Linha/>
                {servico.map((item,index) => (
                    <Servico
                     key={index}
                     trabalho={item.trabalho}
                     valor={item.valor}
                    />
                ))}
            </div>
        </div>
    )
}