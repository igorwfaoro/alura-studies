import { useEffect, useState } from "react";
import { TimeHelper } from "../../common/helpers/time.helper";
import { Task } from "../../models/task";
import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from './Cron.module.scss';

interface CronProps {
    selectedTask?: Task;
    completeTask: () => void
}

function Cron(props: CronProps) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (props.selectedTask)
            setTime(TimeHelper.timeToSeconds(props.selectedTask?.time));
    }, [props.selectedTask]);

    function startCounter(value: number = 0): void {
        setTimeout(() => {
            if (value > 0) {
                setTime(--value);
                return startCounter(value);
            }

            props.completeTask();
        }, 1000);
    }

    return (
        <div className={style.cron}>
            <p className={style.title}>Choice a card and init the cron</p>
            <div className={style.clockWrapper}>
                <Clock timeSeconds={time} />
            </div>
            <Button onClick={() => startCounter(time)}>Init!</Button>
        </div>
    );
}

export default Cron;