import style from './Button.module.scss';

interface ButtonProps {
    children: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function Button(props: ButtonProps) {

    return (
        <button
            className={style.button}
            type={props.type || 'button'}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;