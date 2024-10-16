import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CodigoDeRedefinição() {
    const [code, setCode] = useState(['', '', '', '', '', '']);

    const handleChange = (index, value) => {

        if (!/^\d?$/.test(value)) {
            return; 
        }

        const newCode = [...code];

        if (value === '') {
            if (index > 0) {
                const prevField = document.getElementById(`input-${index - 1}`);
                if (prevField) {
                    prevField.focus();
                }
            }
            newCode[index] = '';
        } else {
            newCode[index] = value.slice(-1);
            if (value && index < 5) {
                const nextField = document.getElementById(`input-${index + 1}`);
                if (nextField) {
                    nextField.focus();
                }
            }
        }

        setCode(newCode);

        if (newCode.every((digit) => digit !== '')) {
            const completeCode = newCode.join('');
            console.log('Código completo:', completeCode);
        }
    };

    return (
        <div className='codigo'>
            <div className='login'>
                <div className='informaçoes'>
                    <h1>Confira seu E-mail</h1>
                    <p>Enviamos o código de redefinição de senha para seu e-mail, insira o código abaixo</p>
                    
                    <div className='codigo-inputs'>
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                id={`input-${index}`}
                                type='text'
                                maxLength='1'
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className='codigo-input'
                            />
                        ))}
                    </div>

                    <div className='botao'> 
                        <Link className='b2'>Confirmar</Link>
                    </div>             
                </div>
            </div>
        </div>
    );
}
