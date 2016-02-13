import React from 'react';
import { fetchEvent } from 'actions/event-actions';
import Ticket from './Ticket';
import { Link } from 'react-router';
import SmsForm from './SmsForm';
import styles from './TicketPage.pcss';
import Message from './Message';

class TicketPage extends React.Component {

    render() {

        const eventId = parseInt(this.props.params.id);
        const ticketId = this.props.params.ticketId;

        const { error, events, sendSms, smsSending, smsStatus } = this.props;
        const event = events.get(eventId);

        if (error) {
            return (
                <Message type="error" message="Kino Kobros kaatui omaan mahdottomuuteensa." />
            );
        }

        if (!event) {
            return (
                <Message type="loading" message="Kino Kobros lataa.." />
            );
        }

        const ticket = event.tickets.find(t => t.id === ticketId);

        if (!ticket) {
            return false;
        }

        return (
            <section>
                <Ticket event={event} ticket={ticket} />

                <div className={styles.controls}>
                    <SmsForm
                        eventId={event.id}
                        ticketId={ticket.id}
                        sendSms={sendSms}
                        sending={smsSending}
                        status={smsStatus}
                    />
                    <Link to={`/event/${event.id}`}>Takaisin</Link>
                </div>

            </section>
        );
    }
};


TicketPage.fetch = ({dispatch}, nextState) => {
    const { id } = nextState.params;
    return dispatch(fetchEvent(id));
};

export default TicketPage;
