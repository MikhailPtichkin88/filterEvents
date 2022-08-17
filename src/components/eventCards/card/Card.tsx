import React from 'react';
import styles from '../eventCards.module.scss';
import {EventInitStateType} from "../../../reducers/eventReducer/eventReducerTypes";
import {useAppSelector} from "../../../customHooks/hooks";

const Card = (props: EventInitStateType) => {
    const isGrid = useAppSelector(state=>state.filters.isGrid)
    const {type: category, title, date, duration} = props
    let monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let month = isGrid ? monthArr[+date.slice(5, 7)].slice(0,3) : monthArr[+date.slice(5, 7)]
    let day =  date.slice(8, 10)
    let startTimeHours = date.slice(11, 13)
    let startTimeMinutes = date.slice(14, 16)
    let startTimeSeconds = date.slice(17, 19)
    let finishTimeSeconds = ((+startTimeHours * 3600) + (+startTimeMinutes * 60) + +startTimeSeconds) + (Math.round(duration / 1000))
    let finishHoursNum = Math.floor(finishTimeSeconds / 3600)
    let finishHoursStr = finishHoursNum < 10 ? `0${finishHoursNum}` : `${finishHoursNum}`
    let finishMinutesNum = Math.ceil((finishTimeSeconds - (finishHoursNum * 3600)) / 60)
    let finishMinutesStr

    if (finishMinutesNum < 10) {
        finishMinutesStr = `0${finishMinutesNum}`
    } else if (finishMinutesNum === 60) {
        finishHoursNum += 1
        finishMinutesStr = "00"
    }else{
        finishMinutesStr=finishMinutesNum+''
    }

    return (

        <div className={styles.cardBlock}>
            <div className={styles.dateBlock}>
                <span className={styles.day}>{day}</span>
                <div className={styles.monthTimeBlock}>
                    <span className={styles.month}>{month}</span>
                    <span className={styles.time}>
                        {startTimeHours}:{startTimeMinutes} – {finishHoursStr}:{finishMinutesStr}</span>
                </div>
            </div>
            <div className={styles.infoBlock}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.descr}>{category}</p>
            </div>
            <div className={styles.btnBlock}>
                <button className={styles.btn}>View more</button>
            </div>
        </div>

    );
};

export default Card;