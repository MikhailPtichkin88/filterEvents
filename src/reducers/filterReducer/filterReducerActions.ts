import {ShowFirstType} from "./filterReducerTypes";

export const setIsGridAC = (isGrid:boolean)=>{
    return{type:"SET-IS-GRID", payload:{isGrid}}as const
}

export const setThemesAC = (themes:string[])=>{
    return{type:"SET-THEMES", payload:{themes}}as const
}
export const setActualThemeAC = (theme:string)=>{
    return{type:"SET-ACTUAL-THEME", payload:{theme}}as const
}
export const setShowFirstAC = (showFirst:ShowFirstType)=>{
    return{type:"SET-SHOW-FIRST", payload:{showFirst}}as const
}
export const setEventsPerPageAC = (events:number)=>{
    return{type:"SET-EVENTS-PER-PAGE", payload:{events}}as const
}
export const setSearchTextAC=(text:string)=>{
    return{type:"SET-SEARCH-TEXT", payload:{text}}as const
}