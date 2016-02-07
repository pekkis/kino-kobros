import React from 'react';
import { Link } from 'react-router';
import styles from './TicketPreview.pcss';
import QRCode from 'qrcode.react';

export default function TicketPreview({ticket}) {

    return (
        <li className={styles.root}>
            <QRCode value={ticket.id} size={300} />
            <br />
            <Link to={`/event/${ticket.eventId}/${encodeURIComponent(ticket.id)}`}>Rivi {ticket.seat.row}, paikka {ticket.seat.seat}</Link>
        </li>
    );

}
