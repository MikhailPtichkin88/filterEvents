import React, {useMemo} from 'react';
import styles from './eventCards.module.scss'
import Card from "./card/Card";
import {useAppSelector, usePagination} from "../../customHooks/hooks";
import {v1} from 'uuid'
import {EventInitStateType} from "../../reducers/eventReducer/eventReducerTypes";
import {FilterInitStateType} from "../../reducers/filterReducer/filterReducerTypes";
import Pagination from "../pagination/Pagination";

const EventCards = () => {

    const events = useAppSelector<EventInitStateType[]>(state => state.events)
    const filters = useAppSelector<FilterInitStateType>(state => state.filters)

    let filteredEvents = useMemo(() => {
        let filteredEvents = events
        if (filters.actualTheme !== "all themes") {
            filteredEvents = events.filter(event => event.type === filters.actualTheme)
        }
        if (filters.showFirst === "oldest") {
            filteredEvents = [...filteredEvents.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))]
        } else {
            filteredEvents = [...filteredEvents.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).reverse()]
        }
        return filteredEvents
    }, [events, filters.actualTheme, filters.showFirst])


    let filterResult = useMemo(() => {
        let filterResult = [...filteredEvents]
        if (filters.searchText.trim().length >= 3) {
            filterResult = filteredEvents.filter(el => {
                return el.title.toLowerCase().includes(filters.searchText.trim().toLowerCase())
                    || el.date.toLowerCase().includes(filters.searchText.trim().toLowerCase())
                    || el.type.toLowerCase().includes(filters.searchText.trim().toLowerCase())
            })
        } else if (filters.searchText.trim().length < 3) {
            filterResult = [...filteredEvents]
        }
        return filterResult
    }, [filteredEvents, filters.searchText])


    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: filters.eventsPerPage,
        count: filterResult.length
    });

    let wrapperClass = filters.isGrid ? `${styles.gridWrapper}` : `${styles.lineWrapper}`
    return (
        <>
            <div className={wrapperClass}>
                {
                    filterResult
                        .slice(firstContentIndex, lastContentIndex)
                        .map(event => {
                            return <Card key={v1()}
                                         type={event.type}
                                         title={event.title}
                                         id={event.id}
                                         date={event.date}
                                         duration={event.duration}/>
                        })
                }
            </div>
            <Pagination totalPages={totalPages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        page={page}
                        setPage={setPage}
            />
        </>
    );
};

export default EventCards;