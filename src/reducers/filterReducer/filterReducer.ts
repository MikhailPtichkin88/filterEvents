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

export const filterReducer = (state:FilterInitStateType = filterInitState, action:FilterActionsType):FilterInitStateType=>{
    switch(action.type){
        case "FILTER/SET-IS-GRID":
            return {...state, isGrid: action.payload.isGrid}
        case "FILTER/SET-THEMES":
            return {...state, themes: [...state.themes, ...action.payload.themes]}
        case "FILTER/SET-ACTUAL-THEME":
            return {...state, actualTheme: action.payload.theme}
        case "FILTER/SET-SHOW-FIRST":
            return {...state, showFirst:action.payload.showFirst}
        case "FILTER/SET-EVENTS-PER-PAGE":
            return {...state, eventsPerPage:action.payload.events }
        case "FILTER/SET-SEARCH-TEXT":
            return {...state, searchText:action.payload.text}
        default:
            return state
    }
}