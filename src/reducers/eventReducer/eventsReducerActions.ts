import {EventInitStateType} from "./eventReducerTypes";

export const fetchEventsAC = (events: EventInitStateType[]) => {
    return {type: "FETCH-EVENTS", payload: {events}} as const
}