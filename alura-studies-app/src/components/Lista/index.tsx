import Item from './Item';
import style from './Lista.module.scss';
import { ITarefa } from '../../types/ITarefa';

function Lista({ tarefas }: { tarefas: ITarefa[]}) {
  return (
      <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key = {index} // index é responsável por renderizar o item
            {...item}
          />
        ))}
      </ul>
    </aside>
    )
  }

export default Lista;