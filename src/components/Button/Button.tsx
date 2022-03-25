import style from './Button.module.scss';

interface ButtonProps {
    children: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function Button(props: ButtonProps) {

    // function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     e.preventDefault();

    //     if (props.onClick)
    //         props.onClick(e);
    // }

    return (
        <button
            className={style.button}
            type={props.type || 'button'}>
            {props.children}
        </button>
    );
}

export default Button;