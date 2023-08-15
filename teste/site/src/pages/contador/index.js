import { useState } from 'react';
import './index.scss';


function Contador() {
  
  const[Counter, setCounter] = useState(0)
  const incrementar = () => setCounter(Counter + 1)
  
  
  return (
    <div className='Contador'>
      
      <h1> Contador </h1>

      <div> {Counter} </div>

      <button onClick={incrementar}> Incrementar </button>

    </div>
    
  );
}

export default Contador;
