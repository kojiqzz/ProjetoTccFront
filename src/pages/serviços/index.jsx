import './index.scss';
import servicos from '../../assets/images/servicos.webp';
import seta from '../../assets/images/seta2.jpg';
import seta2 from '../../assets/images/next.png';
import x from '../../assets/images/x.png';
import { Link } from 'react-router-dom';
import Servico from '../../components/serviços';
import { useState } from 'react';

export default function Servicos() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAddServicoModalOpen, setAddServicoModalOpen] = useState(false);
    const [selectedServico, setSelectedServico] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null); 
    const [startDayIndex, setStartDayIndex] = useState(0);
    const [selectedDayIndex, setSelectedDayIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [hourOffset, setHourOffset] = useState(0);
    const hoursPerSet = 6;

    const servicosList = [
        { 'trabalho': 'Escova e Prancha', 'valor': '30,00' },
        { 'trabalho': 'Hidratação + Escova e Prancha', 'valor': '50,00' },
        { 'trabalho': 'Cronograma capilar', 'valor': '100,00' },
        { 'trabalho': 'Progressiva sem formol', 'valor': '70,00' },
        { 'trabalho': 'Progressiva com formol', 'valor': '90,00' },
        { 'trabalho': 'Botox', 'valor': '60,00' },
        { 'trabalho': 'Selagem', 'valor': '120,00' },
        { 'trabalho': 'Limpeza de pele profunda', 'valor': '50,00' },
        { 'trabalho': 'massagem facial', 'valor': '45,00' },
        { 'trabalho': 'massagem relaxante corporal', 'valor': '100,00' },
    ];

    const handleAgendar = (trabalho, valor) => {
        setSelectedServico({ trabalho, valor });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedServico(null);
        setSelectedHour(null);
        setStartDayIndex(0);
        setSelectedDayIndex(null);
        setSelectedPeriod(null);
        setHourOffset(0);
    };

    const openAddServicoModal = () => {
        setAddServicoModalOpen(true);
    };

    const closeAddServicoModal = () => {
        setAddServicoModalOpen(false);
    };

    const getHours = () => {
        const hours = [];
        for (let i = 9; i <= 19; i += 0.5) {
            const hour = i % 1 === 0 ? `${i}:00` : `${i - 0.5}:30`;
            hours.push(hour);
        }
        return hours;
    };

    const getDays = () => {
        const days = [];
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + (startDayIndex + i));
            const dayName = date.toLocaleString('pt-BR', { weekday: 'short' });
            const isDisabled = dayName === 'dom.' || dayName === 'seg.';
            days.push({
                day: dayName,
                date: date.getDate(),
                disabled: isDisabled
            });
        }
        return days;
    };

    const getMonthYear = () => {
        const today = new Date();
        today.setDate(today.getDate() + startDayIndex);
        return today.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
    };

    const handlePrevWeek = () => {
        if (startDayIndex > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setStartDayIndex(startDayIndex - 7);
                setIsAnimating(false);
            }, 300);
        }
    };

    const handleNextWeek = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setStartDayIndex(startDayIndex + 7);
            setIsAnimating(false);
        }, 300);
    };

    const handleDayClick = (index) => {
        setSelectedDayIndex(index);
    };

    const handlePeriodClick = (period) => {
        setSelectedPeriod(period);
        if (period === 'manha') {
            setHourOffset(0);
        } else if (period === 'tarde') {
            setHourOffset(6);
        } else if (period === 'noite') {
            setHourOffset(16);
        }
    };

    const getDisplayedHours = () => {
        const hours = getHours();
        const startIndex = hourOffset;
        return hours.slice(startIndex, startIndex + hoursPerSet);
    };

    const handlePrevHours = () => {
        setHourOffset((prev) => Math.max(prev - hoursPerSet, 0));
    };

    const handleNextHours = () => {
        setHourOffset((prev) => {
            const newOffset = prev + hoursPerSet;
            return newOffset < getHours().length ? newOffset : prev;
        });
    };

    const Linha = () => <div className="linha"></div>;

    return (
        <div className='divmae'>
            <div className='imgsev'>
                <img src={servicos} alt="" />
                <h1>serviços</h1>
            </div>
            <div className='sevicos'>
                <div className='voltar'>
                    <Link to='/inicio'>
                        <img src={seta2} alt="" />
                    </Link>
                    <h1>voltar</h1>
                </div>
                <Linha />
                {servicosList.map((item, index) => (
                    <Servico
                        key={index}
                        trabalho={item.trabalho}
                        valor={item.valor}
                        onAgendar={() => handleAgendar(item.trabalho, item.valor)}
                    />
                ))}
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <img className='x' src={x} alt="" onClick={closeModal} />
                        <h1>{getMonthYear()}</h1>
                        <div className={`dias ${isAnimating ? 'animating' : ''}`}>
                            <a className='setaE' onClick={handlePrevWeek}>
                                <img className='imgE' src={seta} alt="Seta para esquerda" />
                            </a>
                            {getDays().map((dia, index) => (
                                <div
                                    className={`dia ${selectedDayIndex === index ? 'selected' : ''} ${dia.disabled ? 'disabled' : ''}`}
                                    key={index}
                                    onClick={() => !dia.disabled && handleDayClick(index)}
                                >
                                    <p className='d1'>{dia.day}</p>
                                    <p className='d2'>{dia.date}</p>
                                </div>
                            ))}
                            <a className='setaD' onClick={handleNextWeek}>
                                <img className='imgD' src={seta} alt="Seta para direita" style={{ transform: 'rotate(180deg)' }} />
                            </a>
                        </div>
                        <div className='linha-modal'></div>
                        <div className='horario-marcado'>
                            <div className='periodo'>
                                <div
                                    className={`dia ${selectedPeriod === 'manha' ? 'selected' : ''}`}
                                    onClick={() => handlePeriodClick('manha')}
                                >
                                    <p>Manhã</p>
                                </div>
                                <div
                                    className={`tarde ${selectedPeriod === 'tarde' ? 'selected' : ''}`}
                                    onClick={() => handlePeriodClick('tarde')}
                                >
                                    <p>Tarde</p>
                                </div>
                                <div
                                    className={`noite ${selectedPeriod === 'noite' ? 'selected' : ''}`}
                                    onClick={() => handlePeriodClick('noite')}
                                >
                                    <p>Noite</p>
                                </div>
                            </div>
                            <div className='horas'>
                                <a className='setaE' onClick={handlePrevHours}>
                                    <img className='imgE' src={seta} alt="Seta para esquerda" />
                                </a>
                                <div className='tempo'>
                                    {getDisplayedHours().map((hour, index) => (
                                        <div
                                            key={index}
                                            className={`tem ${selectedHour === hour ? 'selected' : ''}`}
                                            onClick={() => setSelectedHour(hour)} 
                                        >
                                            <p>{hour}</p>
                                        </div>
                                    ))}
                                </div>
                                <a className='setaD' onClick={handleNextHours}>
                                    <img className='imgD' src={seta} alt="Seta para direita" style={{ transform: 'rotate(180deg)' }} />
                                </a>
                            </div>
                        </div>
                        <div className='in'>
                        <div className='informacoes'>
                            <div className='detalhes'>
                                <div className='E'>
                                    <p className='trabalho'>{selectedServico?.trabalho}</p>
                                </div>
                                <div className='D'>
                                    <p className='valor'>R$ {selectedServico?.valor}</p>
                                    {selectedHour && <p className='hora'>Horário: {selectedHour}</p>} 
                                </div>
                            </div>
                            <div className='separacao'></div>
                            <p className='remover'>remover serviço</p>
                        </div>
                        </div>
                        <div className='adicionar-serviço'>
                            <p className='adicionar' onClick={openAddServicoModal}>+ adicionar outro serviço</p>
                        </div>
                        <div className='separacao'></div>
                    </div>
                </div>  
            )}
            
            
            {isAddServicoModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h1 className='h1'>Adicionar Novo Serviço</h1>
                        <div className='linha2'></div>
                        <p className='p'>Selecione um serviço:</p>
                        {servicosList.map((item, index) => (
                            <div className='adi-sev' key={index} onClick={() => handleAgendar(item.trabalho, item.valor)}>
                                <div className='check'>
                                    <input 
                                        type='checkbox' 
                                        checked={selectedServico?.trabalho === item.trabalho} 
                                        onChange={() => setSelectedServico(item)} 
                                    /> 
                                    <p>{item.trabalho}</p>
                                </div>
                                <div className='valor'>
                                    <p>{item.valor}</p>
                                </div>
                            </div>
                        ))}
                        <div className='b'>
                        <button className="confirm-button" >Confirmar Seleção</button>
                        </div>
                        <img className='x' src={x} alt="Fechar" onClick={closeAddServicoModal} />
                    </div>
                </div>
            )}
        </div>  
    );
}
