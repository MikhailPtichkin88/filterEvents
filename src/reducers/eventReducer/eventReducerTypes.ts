import {fetchEventsAC} from "./eventsReducerActions";

export type EventInitStateType = {
    date:string
    title: string
    type: string
    duration: number
    id: string
}

export type EventsActionType = FetchEventsACType

export type FetchEventsACType = ReturnType<typeof fetchEventsAC>