import style from './List.module.scss';
import Item from './Item/Item';
import { useState } from 'react';

function List() {

    const [tasks, setTasks] = useState([
        {
            name: 'React',
            time: '02:00:00'
        },
        {
            name: 'Javascript',
            time: '01:00:00'
        }
    ]);

    return (
        <aside className={style.listTasks}>
            <h2 onClick={() => setTasks([...tasks, {name: 'Test', time: '10:00:00'}])}>Today studies</h2>
            <ul>
                {tasks.map((t, i) => (
                    <Item
                        key={i}
                        {...t}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;