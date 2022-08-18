import {ShowFirstType} from "./filterReducerTypes";

export const setIsGridAC = (isGrid:boolean)=>{
    return{type:"FILTER/SET-IS-GRID", payload:{isGrid}}as const
}

export const setThemesAC = (themes:string[])=>{
    return{type:"FILTER/SET-THEMES", payload:{themes}}as const
}
export const setActualThemeAC = (theme:string)=>{
    return{type:"FILTER/SET-ACTUAL-THEME", payload:{theme}}as const
}
export const setShowFirstAC = (showFirst:ShowFirstType)=>{
    return{type:"FILTER/SET-SHOW-FIRST", payload:{showFirst}}as const
}
export const setEventsPerPageAC = (events:number)=>{
    return{type:"FILTER/SET-EVENTS-PER-PAGE", payload:{events}}as const
}
export const setSearchTextAC=(text:string)=>{
    return{type:"FILTER/SET-SEARCH-TEXT", payload:{text}}as const
}