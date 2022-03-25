import React from 'react';
import Button from '../Button/Button';
import style from './Form.module.scss';

function Form() {

    function test() {
        console.log('ddada');
    }

    return (
        <form className={style.newTask}>

            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new study
                </label>
                <input 
                    type="text"
                    name="task"
                    id="task"
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
                    min="00:00:00"
                    max="01:30:00"
                    required />
            </div>

            <Button
                text="Add"
                onClick={() => test()}
            />
        </form>
    );
}

export default Form;