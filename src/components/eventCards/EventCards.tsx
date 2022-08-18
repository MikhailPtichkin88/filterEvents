import React, {useMemo} from 'react';
import styles from './eventCards.module.scss'
import Card from "./card/Card";
import {v1} from 'uuid'
import Pagination from "../pagination/Pagination";
import {usePagination} from "../../customHooks/usePagination";
import {useAppSelector} from "../../customHooks/useAppSelector";

const EventCards = () => {

    const events = useAppSelector(state => state.events)
    const filters = useAppSelector(state => state.filters)

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
                // Here we take a date prop which is actually a Date type string, we parse it and calculate it to have result like "12:30" this will be start time of exact event. Then we calculate finish time adding duration prop to date prop, so the final result will looks like: "12:30-12:35". Having this string we can easily search through it using filter method.
                return el.title.toLowerCase().includes(filters.searchText.trim().toLowerCase())
                    || el.type.toLowerCase().includes(filters.searchText.trim().toLowerCase())
                    || (`${new Date(el.date).getHours() < 10 ? "0" + new Date(el.date).getHours() : new Date(el.date).getHours()}:${new Date(el.date).getMinutes() < 10 ? "0" + new Date(el.date).getMinutes() : new Date(el.date).getMinutes()}-${new Date(Date.parse(el.date) + (el.duration)).getHours() < 10 ? "0" + (new Date(Date.parse(el.date) + (el.duration)).getHours()) : new Date(Date.parse(el.date) + (el.duration)).getHours()}:${new Date(Date.parse(el.date) + (el.duration)).getMinutes() < 10 ? "0" + Math.ceil((new Date(Date.parse(el.date) + (el.duration)).getMinutes())) : Math.ceil(new Date(Date.parse(el.date) + (el.duration)).getMinutes())}`)
                        .includes(filters.searchText.toLowerCase())
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