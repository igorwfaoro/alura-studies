import React from 'react';
import Button from '../Button/Button';
import './Form.scss';

function Form() {

    return (
        <form className="newTask">

            <div className="inputContainer">
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

            <div className="inputContainer">
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

            <Button />
        </form>
    );
}

export default Form;