import {EventInitStateType, EventsActionType} from "./eventReducerTypes";

const eventsInitState = [] as EventInitStateType[]

export const eventsReducer = (state:EventInitStateType[]=eventsInitState, action:EventsActionType)=>{
    switch (action.type){
        case "FETCH-EVENTS":
            return action.payload.events
        default:
            return state
    }
}