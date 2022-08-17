import axios, {AxiosResponse} from "axios";
import {EventInitStateType} from "../reducers/eventReducer/eventReducerTypes";

export const eventsAPI = {
    fetchEvents(){
       return axios.get<EventInitStateType[], AxiosResponse<EventInitStateType[]>>('https://62f22f4225d9e8a2e7d8cae5.mockapi.io/api/events')
    }
}