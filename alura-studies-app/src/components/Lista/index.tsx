import Item from './Item';
import style from './Lista.module.scss';
import { ITarefa } from '../../types/ITarefa';

interface Props{
  tarefas: ITarefa[],
  //espera uma tarefa e retorna um void
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
      <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa = {selecionaTarefa}
            key = {item.id} // index é responsável por renderizar o item
            {...item}
          />
        ))}
      </ul>
    </aside>
    )
  }

export default Lista;