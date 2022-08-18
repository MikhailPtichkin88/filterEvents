import {AppThunk} from "../store";
import {eventsAPI} from "../../api/events-api";
import {fetchEventsAC} from "./eventsReducerActions";
import {setThemesAC} from "../filterReducer/filterReducerActions";

export const fetchEventsTC=():AppThunk=>{
    return (dispatch)=>{
        eventsAPI.fetchEvents()
            .then(res=>{
                dispatch(fetchEventsAC(res.data))
                dispatch(setThemesAC(Array.from(new Set(res.data.map(el=>el.type)))))
            })
            .catch(err=>{
                console.warn(err)
            })
    }
}