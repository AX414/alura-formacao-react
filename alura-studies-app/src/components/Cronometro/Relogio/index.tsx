import React from "react"
import style from "./Relogio.module.scss"

export default function Relogio() {
    return (
        //Finge que tem um elemento pai com 
        // o fragment ou só coloca <> no 
        // início e </> no fim do return.
        <React.Fragment> 
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>

    )
}