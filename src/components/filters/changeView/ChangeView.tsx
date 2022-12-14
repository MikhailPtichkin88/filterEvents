import React from 'react';
import sprite from '../../../assets/images/changeViewSprite.svg';
import styles from './ChangeView.module.scss'
import {useAppDispatch} from "../../../customHooks/useAppDispatch";
import {setIsGridAC} from "../../../reducers/filterReducer/filterReducerActions";
import {useAppSelector} from "../../../customHooks/useAppSelector";


const ChangeView = React.memo(() => {

    const isGrid = useAppSelector(state => state.filters.isGrid)
    const dispatch = useAppDispatch()

    const colorStyleGrid = isGrid ? {fill: '#FF3F3A'} : {fill: '#424551'}
    const colorStyleLine = isGrid ? {fill: '#424551'} : {fill: '#FF3F3A'}

    const setLineView = () => {
        dispatch(setIsGridAC(false))
    }
    const setGridView = () => {
        dispatch(setIsGridAC(true))
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={setLineView}>
                <svg className={styles.icon} style={colorStyleLine}>
                    <use xlinkHref={`${sprite}#list`}></use>
                </svg>
            </button>
            <button className={styles.btn} onClick={setGridView}>
                <svg className={styles.icon} style={colorStyleGrid}>
                    <use xlinkHref={`${sprite}#grid`}></use>
                </svg>
            </button>
        </div>
    );
});

export default ChangeView;