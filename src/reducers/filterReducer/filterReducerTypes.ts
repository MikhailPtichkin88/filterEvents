
import {
    setActualThemeAC,
    setEventsPerPageAC,
    setIsGridAC,
    setSearchTextAC,
    setShowFirstAC,
    setThemesAC
} from "./filterReducerActions";
export type ShowFirstType = "newest" | "oldest"
export type FilterInitStateType = {
    isGrid:boolean,
    themes:string[],
    actualTheme:string,
    showFirstArr:ShowFirstType[],
    showFirst: ShowFirstType,
    eventsPerPage: number
    searchText: string
}

export type FilterActionsType = SetIsGridACType | SetThemesACType | SetActualThemeACType | SetShowFirstACType | SetEventsPerPageACType | SetSearchTextACType

type SetIsGridACType = ReturnType<typeof setIsGridAC>
type SetThemesACType = ReturnType<typeof setThemesAC>
type SetActualThemeACType = ReturnType<typeof setActualThemeAC>
type SetShowFirstACType = ReturnType<typeof setShowFirstAC>
type SetEventsPerPageACType = ReturnType<typeof setEventsPerPageAC>
type SetSearchTextACType =ReturnType<typeof setSearchTextAC>