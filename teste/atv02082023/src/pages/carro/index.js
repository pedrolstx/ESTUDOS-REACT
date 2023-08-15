import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

function Carro() {
const [valor, setValor] = useState(0);
const [parcela, setParcela] = useState(0);
const [juros, setJuros] = useState(0);
const [valortotal, setValorTotal] = useState(0);
const [jurosparcelas, setJuroseparcelas] = useState(0);

  function calculo() {
    let y = ''
    
    for (let a = 1; a <= parcela; a++) {
      let b = (valor * juros) / 100;
      y = valor + b
    }

    let x = y / parcela;

    setJuroseparcelas(x)
    setValorTotal(y)

}

  return (
      <div className='home-principal'>
        <header>
          <img className='icon' src='/assets/images/logo.svg'></img>
          <h1>Portifolio.me</h1>  
        </header> 

        <div className='conteudo'>
          <h1>Simulador de Compra de Veículo</h1>

          <div className='conteiner'>
            
                <div className='conteiner-esquerdo'>
                  <img className='carro' src='/assets/images/carro 2.png'></img>
                </div>
                
                <div className='conteiner-direito'>
                  <div className='valortotal'>
                    <h1>Valor Total</h1>
                    <input onChange={}></input>
                  </div>
                
                  <div className='blocodeparcelasejurosmensal'>
                    <div className='bloco-esq'>
                      <h1>Parcelas</h1>
                      <input></input>
                    </div>
                    <div className='bloco-dire'>
                      <h1>Juros Mensal (%)</h1>
                      <input></input>
                    </div>
                  </div>
        
                <div className='botao-calcular'>
                  <button>Calcular</button>
                </div>
                <div className='parcelaevalortotal'>
                  <p>Parcela:</p>
                  <p>Valor total</p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      
  )
}

export default Carro