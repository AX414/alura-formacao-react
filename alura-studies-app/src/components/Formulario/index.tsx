import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Form.module.scss';
import { ITarefa } from '../../types/ITarefa';
import { v4 as uuidv4 } from 'uuid';
import { tempoParaSegundos } from '../../common/utils/time';


interface Props{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props){

  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  //Adicionando a tarefa do form
  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){ //o evento é um evento de formulário de uma tag form do html (mais específico impossível)
    evento.preventDefault(); //previne que a página seja recarregada
    setTarefas( tarefasAntigas => 
      [
        ...tarefasAntigas, 
        { tarefa,
          tempo,
          selecionado: false,
          completo: false,
          id: uuidv4()
        }
      ]
    );

    console.log("Conversão de", tempo, "em segundos: ",tempoParaSegundos(tempo),"segundos.");
    
    setTarefa("");
    setTempo("00:00");//resetando os campos sempre que adicionar
  }


  return(
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            value={tarefa}
            onChange={evento => setTarefa(evento.target.value)}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            value={tempo}
            onChange={evento => setTempo(evento.target.value)}
            required
          />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
  )
}

export default Formulario;