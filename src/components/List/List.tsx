import React from 'react';
import style from './List.module.scss';

function List() {

    const tasks = [
        {
            name: 'React',
            time: '02:00:00'
        },
        {
            name: 'Javascript',
            time: '01:00:00'
        }
    ]

    return (
        <aside className={style.listTasks}>
            <h2>Today studies</h2>
            <ul>
                {tasks.map((t, i) => (
                    <li key={i} className={style.item}>
                        <h3>{t.name}</h3>
                        <span>{t.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default List;