import React, {useState} from 'react';
import DropDown from "./dropdown/DropDown";
import styles from './Filters.module.scss';
import ShowPerPage from "./showPerPage/ShowPerPage";
import Search from "./search/Search";
import ChangeView from "./changeView/ChangeView";
import {useAppDispatch, useAppSelector} from "../../customHooks/hooks";
import {useDispatch} from "react-redux";
import {setActualThemeAC, setShowFirstAC} from "../../reducers/filterReducer/filterReducerActions";
import {ShowFirstType} from "../../reducers/filterReducer/filterReducerTypes";


const Filters = () => {
    const themes = useAppSelector(state => state.filters.themes)
    const actualTheme = useAppSelector(state => state.filters.actualTheme)
    const dispatch = useAppDispatch()

    const showFirstArr = useAppSelector(state => state.filters.showFirstArr)
    const showFirst = useAppSelector(state => state.filters.showFirst)
    const onChangeActualThemeHandler = (theme: string) => {
        dispatch(setActualThemeAC(theme))
    }

    const onChangeShowFirstHandler = (showFirst: ShowFirstType) => {
        dispatch(setShowFirstAC(showFirst))
    }


    return (
        <div className={styles.wrapper}>
            <DropDown options={themes}
                      value={actualTheme}
                      onChangeOption={onChangeActualThemeHandler}
                      title="Event category"/>

            <DropDown options={showFirstArr}
                      value={showFirst}
                      onChangeOption={onChangeShowFirstHandler}
                      title="Sort by"/>
            <ShowPerPage/>
            <Search/>
            <ChangeView/>
        </div>
    );
};

export default Filters;