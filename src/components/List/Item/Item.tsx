import style from '../List.module.scss';

interface ItemProps {
    name: string;
    time: string;
}

function Item(props: ItemProps) {

    return (
        <li className={style.item}>
            <h3>{props.name}</h3>
            <span>{props.time}</span>
        </li>
    );
}

export default Item;