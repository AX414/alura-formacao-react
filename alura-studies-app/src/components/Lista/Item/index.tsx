import { ITarefa } from '../../../types/ITarefa';
import style from './Item.module.scss';

interface Props extends ITarefa { //reaproveitando uma interface de outra
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completo,
        id,
        selecionaTarefa
    }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completo,
            id,
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}