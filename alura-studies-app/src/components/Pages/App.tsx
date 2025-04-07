import React, { useState } from 'react';
import Button from '../Botao';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.module.scss';
import Cronometro from '../Cronometro';
import { ITarefa } from '../../types/ITarefa';

function App(){

    const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  
    return(
        // O style virou um módulo, isso vai facilitar a não ter 
        // sobreposição de classes de mesmo nome
        <div className={style.AppStyle}>
            <Formulario setTarefas = {setTarefas}/>
            <Lista tarefas = {tarefas}/>
            <Cronometro/>
        </div>
    );
}

export default App;