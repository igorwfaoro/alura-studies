import { useState } from 'react';
import Button from '../Button/Button';
import style from './Form.module.scss';

function Form() {

    const [text, setText] = useState();
    const [time, setTime] = useState();

    function addTask(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(text, time);
    }

    return (
        <form className={style.newTask} onSubmit={addTask}>

            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new study
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={text}
                    onChange={e => setText(e.target.value as any)}
                    placeholder="What do you want learn?"
                    required />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    value={time}
                    onChange={e => setTime(e.target.value as any)}
                    min="00:00:00"
                    max="01:30:00"
                    required />
            </div>

            <Button type="submit">Add</Button>
        </form>
    );
}

export default Form;