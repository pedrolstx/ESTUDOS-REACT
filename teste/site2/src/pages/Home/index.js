import { useState } from 'react'
import './index.scss'
import Comp1 from '../../components/Comp/Comp1'

export default function Home () {

    const [pessoa, setPessoa] = useState({nome: 'Pedro', cargo:'Rei do Hardware'  })
    
    return (
        <div className="pagina-home">
            <h1>React JS </h1>
            <Comp1 info={pessoa} daora={pessoa} />
        </div>
    )
}