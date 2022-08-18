import axios, {AxiosResponse} from "axios";
import {EventInitStateType} from "../reducers/eventReducer/eventReducerTypes";

const instance = axios.create({
    baseURL: 'https://62f22f4225d9e8a2e7d8cae5.mockapi.io/api/',

})

export const eventsAPI = {
    fetchEvents() {
        return instance.get<EventInitStateType[], AxiosResponse<EventInitStateType[]>>('events')
    }
}