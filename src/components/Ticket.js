import React from 'react';
import styles from './Ticket.pcss';
import TicketInfo from './TicketInfo';
import ToiletCode from './ToiletCode';
import QRCode from './QRCode';

export default function Ticket({event, ticket, sendSms}) {

    return (
        <section className={styles.root}>

            <TicketInfo event={event} ticket={ticket} />

            <div className={styles.qrContainer}>
                <QRCode value={ticket.id} />
            </div>

            <ToiletCode ticket={ticket} />

        </section>
    );

}
