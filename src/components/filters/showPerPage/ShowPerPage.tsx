import React, {ChangeEvent} from 'react';
import styles from './ShowPerPage.module.scss';
import {useAppDispatch} from "../../../customHooks/useAppDispatch";
import {setEventsPerPageAC} from "../../../reducers/filterReducer/filterReducerActions";
import {useAppSelector} from "../../../customHooks/useAppSelector";


const ShowPerPage = React.memo(() => {

    const eventsPerPage = useAppSelector(state=>state.filters.eventsPerPage)
    const dispatch = useAppDispatch()

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        if(+e.currentTarget.value>2 && +e.currentTarget.value<=29){
            dispatch(setEventsPerPageAC(+e.currentTarget.value))
        }
    }
    const onClickPlusHandler=()=>{
        if(eventsPerPage>2 && eventsPerPage<29){
            dispatch(setEventsPerPageAC(eventsPerPage+1))
        }
    }
    const onClickMinusHandler=()=>{
        if(eventsPerPage>3 && eventsPerPage<30){
            dispatch(setEventsPerPageAC(eventsPerPage-1))
        }
    }

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Show</span>
            <input className={styles.input} type="number" value={eventsPerPage} onChange={onChangeHandler}/>
            <span className={styles.descr}>events per page</span>
           <button className={styles.btnForAdaptive} onClick={onClickPlusHandler} type="button">+</button>
            <button className={styles.btnForAdaptive} onClick={onClickMinusHandler} type="button">-</button>
        </div>
    );
});

export default ShowPerPage;