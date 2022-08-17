import {FilterActionsType, FilterInitStateType, ShowFirstType} from "./filterReducerTypes";

export const filterInitState = {
    isGrid:false,
    themes:["all themes"],
    actualTheme:"all themes",
    showFirstArr:["newest","oldest"] as ShowFirstType[],
    showFirst:"newest" as ShowFirstType,
    eventsPerPage: 9,
    searchText:''
}

export const filterReducer = (state:FilterInitStateType = filterInitState, action:FilterActionsType)=>{
    switch(action.type){
        case "SET-IS-GRID":
            return {...state, isGrid: action.payload.isGrid}
        case "SET-THEMES":
            return {...state, themes: [...state.themes, ...action.payload.themes]}
        case "SET-ACTUAL-THEME":
            return {...state, actualTheme: action.payload.theme}
        case "SET-SHOW-FIRST":
            return {...state, showFirst:action.payload.showFirst}
        case "SET-EVENTS-PER-PAGE":
            return {...state, eventsPerPage:action.payload.events }
        case "SET-SEARCH-TEXT":
            return {...state, searchText:action.payload.text}
        default:
            return state
    }
}