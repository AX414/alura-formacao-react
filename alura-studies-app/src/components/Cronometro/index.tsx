import Botao from "../Botao"
import Relogio from "./Relogio"
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/ITarefa"
import { useEffect, useState } from "react"
interface Props{
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado}: Props){
    
    const[tempo, setTempo] = useState<number>();

    useEffect(() => {
        // Ação que irá ocorrer se houver alguma mudança 
        // na condição
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },
    // Array de dependências(variáveis que o useEffect 
    // usa de base para executar a função)
    [selecionado]);

    // Função recursiva para decrementar o contador
    function contagemRegressiva(contador: number = 0){
        // param1: o que que ocorrerá
        // param2: tempo em milisegundos que será o 
        // intervalo para ocorrer a ação
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return contagemRegressiva(contador - 1);
            }
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={()=>contagemRegressiva(tempo)}>
                Começar!    
            </Botao>
        </div>
    )
}