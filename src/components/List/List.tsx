import style from './List.module.scss';
import Item from './Item/Item';
import { Task } from '../../models/task';

interface ListProps {
    tasks: Task[];
    selectTask: (selectedTask: Task) => void
}

function List(props: ListProps) {

    return (
        <aside className={style.listTasks}>
            <h2>Today studies</h2>
            <ul>
                {props.tasks.map(t => (
                    <Item key={t.id}
                        task={t}
                        selectTask={props.selectTask}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;