import {EventInitStateType} from "./eventReducerTypes";

export const fetchEventsAC = (events: EventInitStateType[]) => {
    return {type: "EVENTS/FETCH-EVENTS", payload: {events}} as const
}