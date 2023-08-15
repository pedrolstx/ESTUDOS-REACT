import './index.scss';
import Cc from '../../components/cabecalho';
import { useState } from 'react';

export default function Sorvete () {

const [nomes, setNomes] = useState ('')


    return (
        <div className='pagina-sorvete'>
           <Cc/>
            <div className='centro-sorvete'>
                <div className='quadrado'>
                    <div className='imagem'>
                        <img src='/assets/images/carro 1.png'></img>
                        <p>Sorveteria</p>
                    </div>
                    <div className='quadrado-conteudo'>
                        <div className='linha-01'>
                            <p>Novo Item</p>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    
    )
}

