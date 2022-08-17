import React from 'react';
import Filters from "./filters/Filters";
import EventCards from "./eventCards/EventCards";
import styles from './Events.module.scss'

const Events = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <Filters/>
                <EventCards/>
            </div>
        </div>
    );
};

export default Events;