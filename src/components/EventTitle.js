import React from 'react';
import styles from './EventTitle.pcss';

export default function EventTitle({ event }) {
    return (
        <div className={styles.root}>
            <h1>{event.title}</h1>
            <h2>{event.originalTitle}</h2>
        </div>
    );
}
