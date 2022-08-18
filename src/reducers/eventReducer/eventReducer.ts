import {EventInitStateType, EventsActionType} from "./eventReducerTypes";

const eventsInitState = [] as EventInitStateType[]

export const eventsReducer = (state:EventInitStateType[]=eventsInitState, action:EventsActionType):EventInitStateType[]=>{
    switch (action.type){
        case "EVENTS/FETCH-EVENTS":
            return action.payload.events
        default:
            return state
    }
}