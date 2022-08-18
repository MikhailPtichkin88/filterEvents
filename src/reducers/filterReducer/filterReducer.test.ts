import {FilterInitStateType, ShowFirstType} from "./filterReducerTypes";
import {
    setActualThemeAC,
    setEventsPerPageAC,
    setIsGridAC,
    setSearchTextAC,
    setShowFirstAC,
    setThemesAC
} from "./filterReducerActions";
import {filterReducer} from "./filterReducer";

let startState:FilterInitStateType


beforeEach(()=> {
    startState = {
        isGrid: false,
        themes: ["all themes"],
        actualTheme: "all themes",
        showFirstArr: ["newest", "oldest"] as ShowFirstType[],
        showFirst: "newest" as ShowFirstType,
        eventsPerPage: 9,
        searchText: ''
    }
})

test('setIsGridAC should work correctly', ()=>{

    const result:FilterInitStateType = filterReducer(startState, setIsGridAC(true))

    expect(result.isGrid).toBeTruthy()
    expect(result.isGrid).not.toEqual(startState.isGrid)
})

test('setThemesAC should work correctly', ()=>{

    const result:FilterInitStateType = filterReducer(startState, setThemesAC(["dog","cat","crocodile"]))

    expect(result.themes[0]).toEqual(startState.themes[0])
    expect(result.themes[2]).toEqual("cat")
    expect(result.themes[3]).toBeTruthy()

})


test('setActualThemeAC should work correctly', ()=>{
startState.themes = ["all themes","dog","cat","crocodile"]
    const result:FilterInitStateType = filterReducer(startState, setActualThemeAC("crocodile"))

    expect(result.actualTheme).not.toEqual(startState.actualTheme)
    expect(result.actualTheme).toEqual("crocodile")
})

test('setShowFirstAC should work correctly', ()=>{

    const result:FilterInitStateType = filterReducer(startState, setShowFirstAC("oldest"))

    expect(result.showFirst).not.toEqual(startState.showFirst)
    expect(result.showFirst).toEqual("oldest")
})

test('setEventsPerPageAC should work correctly', ()=>{

    const result:FilterInitStateType = filterReducer(startState, setEventsPerPageAC(24))

    expect(result.eventsPerPage).not.toEqual(startState.eventsPerPage)
    expect(result.eventsPerPage).toEqual(24)
})

test('setSearchTextAC should work correctly', ()=>{

    const result:FilterInitStateType = filterReducer(startState, setSearchTextAC("12:30"))

    expect(result.searchText).not.toEqual(startState.searchText)
    expect(result.searchText).toEqual("12:30")
})