import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './Search.module.scss';
import {useAppDispatch, useAppSelector} from "../../../customHooks/hooks";
import {setSearchTextAC} from "../../../reducers/filterReducer/filterReducerActions";


const Search = React.memo(() => {

    const [error, setError] = useState(false)

    const searchText = useAppSelector(state=>state.filters.searchText)
    const dispatch = useAppDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        dispatch(setSearchTextAC(e.currentTarget.value))
    }

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!searchText){
         return  setError(true)
        }
    }

const inputClass = error? `${styles.input} ${styles.inputError}` : `${styles.input}`
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input className={inputClass}
                   type="text"
                   placeholder="Search event..."
                   value={searchText}
                   onChange={onChangeHandler}
            />
            {
                error && <span className={styles.error}>Empty field</span>
            }
            <button className={styles.btn} type="submit"></button>
        </form>
    );
});

export default Search;