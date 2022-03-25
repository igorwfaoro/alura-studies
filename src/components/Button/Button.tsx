import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    text: string;
    onClick?: () => void
}

function Button(props: ButtonProps) {

    return (
        <button
            className={style.button}
            onClick={props?.onClick}
            type="button">
            {props.text}
        </button>
    );
}

export default Button;