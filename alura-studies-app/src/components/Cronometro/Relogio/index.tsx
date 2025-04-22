import React, { useState } from "react"
import style from "./Relogio.module.scss"

interface Props{
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props) {
    
    // Truncando os minutos
    const minutos = Math.floor(tempo/60);
    // o resto da divisão são os segundos
    const segundos = tempo%60; 

    // PadStart permite uma cadeia de caracteres padrão
    // Se não tem o mínimo, transforma em alguns caracteres padrões
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');;

    return (
        // Finge que tem um elemento pai com 
        // o fragment ou só coloca <> no 
        // início e </> no fim do return.
        <React.Fragment> 
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>

    )
}