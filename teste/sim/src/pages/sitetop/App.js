
import './App.scss';

export default function Site() {
  return (
    <div className="principal">
      
      <div className='cabecalho'>
        
        <div className='portifolio'>
        
          <img src='/assets/images/logo.svg' />
          
          <p>Portifolio.me</p>
          <p>Início</p>
          <p>Séries</p>
          <p>Filmes</p>
          <p>Bombando</p>
          <p>Minha Lista</p>
        
        </div>

        <div className='titulos'>
          
          <input></input>
          
          <img className='lupa' src='/assets/images/icon-buscar.svg'/> 
          
          <p>Bruno</p>

          <img src='/assets/images/material-symbols_notifications-outline-sharp.svg'/>
        
          <img src='/assets/images/image 5.png'/>
          
          <img src='/assets/images/bxs_up-arrow.svg'/>

        </div>

      </div>

    </div>
  );
}

