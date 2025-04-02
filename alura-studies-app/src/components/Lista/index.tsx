import React from 'react';
import Item from './Item';
import style from './Lista.module.scss';


function Lista() {
    
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }, {
    tarefa: "Typescript",
    tempo: "03:00:00"
  }];
  
  return (
      <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key = {index} // index é responsável por renderizar o item
            tarefa = {item.tarefa}
            tempo  = {item.tempo}
            //ou {... item} se quiser 
            // todos os atributos do 
            // objeto 
            // (tomar cuidado para APIs, 
            // para não pegar 
            // atributos desnecessários)
          />
        ))}
      </ul>
    </aside>
    )
  }

export default Lista;