import { Task } from '../../../models/task';
import style from './Item.module.scss';

interface ItemProps {
    task: Task;
    selectTask: (selectedTask: Task) => void
}

function Item(props: ItemProps) {

    return (
        <li
            className={`${style.item} ${props.task.selected ? style.selectedItem : ''} ${props.task.completed ? style.completedItem : ''}`}
            onClick={() => !props.task.completed && props.selectTask(props.task)}
        >
            <h3>{props.task.name}</h3>
            <span>{props.task.time}</span>
            {props.task.completed && <span className={style.completed} aria-label="tarefa completada"></span>}
        </li>
    );
}

export default Item;