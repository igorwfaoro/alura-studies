import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from './Cron.module.scss';

function Cron() {
    return (
        <div className={style.cron}>
            <p className={style.title}>Choice a card and init the cron</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>Init!</Button>
        </div>
    );
}

export default Cron;