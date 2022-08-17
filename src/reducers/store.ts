import {applyMiddleware, combineReducers, createStore} from "redux";
import {eventsReducer} from "./eventReducer/eventReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {EventsActionType} from "./eventReducer/eventReducerTypes";
import {filterReducer} from "./filterReducer/filterReducer";
import {FilterActionsType} from "./filterReducer/filterReducerTypes";

const rootReducer = combineReducers({
    events:eventsReducer,
    filters:filterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = EventsActionType | FilterActionsType
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>


//@ts-ignore
window.store= store