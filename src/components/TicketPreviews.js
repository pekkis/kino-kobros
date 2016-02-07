import React from 'react';
import TicketPreview from './TicketPreview';
import styles from './TicketPreviews.pcss';

export default function TicketPreviews({event}) {

    return (
        <ul className={styles.root}>
            {event.tickets.map((ticket, index) => {
                return (
                    <TicketPreview key={ticket.id} ticket={ticket} />
                );
            })}
        </ul>
    );
}
