import { useState } from 'react';
import { Task } from '../../models/task';
import Button from '../Button/Button';
import style from './Form.module.scss';
import { v4 as uuidV4 } from 'uuid';

interface FormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function Form(props: FormProps) {

    const [text, setText] = useState<string>();
    const [time, setTime] = useState<string>();

    function addTask(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();

        const task: Task = {
            id: uuidV4(),
            name: text as string,
            time: time as string
        }

        props.setTasks(tasks => [...tasks, task]);

        setText('');
        setTime('');
    }

    return (
        <form
            className={style.newTask}
            onSubmit={addTask}
        >

            <div className={style.inputContainer}>
                <label htmlFor="task">Add a new study</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={text}
                    onChange={e => setText(e.target.value as any)}
                    placeholder="What do you want learn?"
                    required
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    value={time}
                    onChange={e => setTime(e.target.value as any)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>

            <Button type="submit">Add</Button>
        </form>
    );
}

export default Form;