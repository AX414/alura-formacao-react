import React from 'react';
import Button from '../Botao';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.module.scss';
import Cronometro from '../Cronometro';

function App(){
    return(
        // O style virou um módulo, isso vai facilitar a não ter 
        // sobreposição de classes de mesmo nome
        <div className={style.AppStyle}>
            <Formulario/>
            <Lista/>
            <Cronometro/>
        </div>
    );
}

export default App;