import {FilterInitStateType} from "../reducers/filterReducer/filterReducerTypes";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('filters');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state:{filters:FilterInitStateType}) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('filters', serializedState);
    } catch {
       console.warn("Error occurred")
    }
};

