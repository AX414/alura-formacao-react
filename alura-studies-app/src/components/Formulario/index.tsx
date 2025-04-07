import React from 'react';
import Botao from '../Botao';
import style from './Form.module.scss';
import { ITarefa } from '../../types/ITarefa';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>
{
  
  //Campos que deverá ter
  state = {
    tarefa: "",
    tempo: "00:00:00"
  }
  
  //Adicionando a tarefa do form
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){ //o evento é um evento de formulário de uma tag form do html (mais específico impossível)
    evento.preventDefault(); //previne que a página seja recarregada
    this.props.setTarefas( tarefasAntigas => [...tarefasAntigas, {...this.state}]);
    console.log('stado: ', this.state);
  }


  render(){
    return(
        <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa:evento.target.value}) }
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
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo:evento.target.value}) }
            required
          />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
    )
}
}

export default Formulario;