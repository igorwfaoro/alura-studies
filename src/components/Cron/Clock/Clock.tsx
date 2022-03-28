import { useEffect, useState } from 'react';
import { TimeHelper } from '../../../common/helpers/time.helper';
import style from './Clock.module.scss';

interface ClockProps {
    timeSeconds?: number;
}

function Clock(props: ClockProps = { timeSeconds: 0 }) {

    const [hours, minutes, seconds] = TimeHelper.secondsToTime(Number(props.timeSeconds)).split(':').map(Number);
    const minutesArray = Array.from(String(hours * 60 + minutes).padStart(2, '0'));
    const secondsArray = Array.from(String(seconds).padStart(2, '0'));

    return (
        <>
            <span className={style.clockNumber}>{minutesArray[0]}</span>
            <span className={style.clockNumber}>{minutesArray[1]}</span>
            <span className={style.clockSeparator}>:</span>
            <span className={style.clockNumber}>{secondsArray[0]}</span>
            <span className={style.clockNumber}>{secondsArray[1]}</span>
        </>
    );
}

export default Clock;