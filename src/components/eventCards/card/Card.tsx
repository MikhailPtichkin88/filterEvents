import React from 'react';
import styles from '../eventCards.module.scss';
import {EventInitStateType} from "../../../reducers/eventReducer/eventReducerTypes";
import {useAppSelector} from "../../../customHooks/useAppSelector";

const Card = React.memo((props: EventInitStateType) => {
    const isGrid = useAppSelector(state => state.filters.isGrid)
    const {type: category, title, date, duration} = props
    const monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const month = isGrid ? monthArr[+date.slice(5, 7)].slice(0, 3) : monthArr[+date.slice(5, 7)]
    const day = date.slice(8, 10)

    const startHours = `${new Date(date).getHours() < 10 ? "0" + new Date(date).getHours() : new Date(date).getHours()}`
    const startMinutes = `${new Date(date).getMinutes() < 10 ? "0" + new Date(date).getMinutes() : new Date(date).getMinutes()}`
    const finishHours = `${new Date(Date.parse(date) + (duration)).getHours() < 10 ? "0" + (new Date(Date.parse(date) + (duration)).getHours()) : new Date(Date.parse(date) + (duration)).getHours()}`
    const finishMinutes = `${new Date(Date.parse(date) + (duration)).getMinutes() < 10 ? "0" + Math.ceil(new Date(Date.parse(date) + (duration)).getMinutes()) : Math.ceil(new Date(Date.parse(date) + (duration)).getMinutes())}`

    return (

        <div className={styles.cardBlock}>
            <div className={styles.dateBlock}>
                <span className={styles.day}>{day}</span>
                <div className={styles.monthTimeBlock}>
                    <span className={styles.month}>{month}</span>
                    <span className={styles.time}>
                        {`${startHours}:${startMinutes} - ${finishHours}:${finishMinutes}`}</span>
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
});

export default Card;