import React, {ChangeEvent, useState} from 'react';
import styles from './ShowPerPage.module.scss';
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../../customHooks/hooks";
import {setEventsPerPageAC} from "../../../reducers/filterReducer/filterReducerActions";


const ShowPerPage = () => {

    const eventsPerPage = useAppSelector(state=>state.filters.eventsPerPage)
    const dispatch = useAppDispatch()

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        if(+e.currentTarget.value>2 && +e.currentTarget.value<=29){
            dispatch(setEventsPerPageAC(+e.currentTarget.value))
        }
    }

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Show</span>
            <input className={styles.input} type="number" value={eventsPerPage} onChange={onChangeHandler}/>
            <span className={styles.descr}>events per page</span>
        </div>
    );
};

export default ShowPerPage;