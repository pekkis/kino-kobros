import React from 'react';
import EventTitle from './EventTitle';
import styles from './EventInfo.pcss';

export default function EventInfo({event}) {

    return (

        <section className={styles.root}>

            <EventTitle event={event} />

            <table>
                <tbody>
                    <tr>
                        <th>Aika</th>
                        <td>{event.date}, {event.time}</td>
                    </tr>
                    <tr>
                        <th>Teatteri / sali</th>
                        <td>{event.venue.room}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );

}
