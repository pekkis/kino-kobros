import React from 'react';
import { fetchEvent } from 'actions/event-actions';
import Icon from 'react-fa';
import Ticket from './Ticket';
import { Link } from 'react-router';
import SmsForm from './SmsForm';
import styles from './TicketPage.pcss';

class TicketPage extends React.Component {

    render() {

        const eventId = parseInt(this.props.params.id);
        const ticketId = this.props.params.ticketId;

        const { events, sendSms, smsSending, smsStatus } = this.props;
        const event = events.get(eventId);

        if (!event) {
            return (
                <section>
                    <Icon name="cog" spin={true} size="4x" /> Kino Kobros lataileepi...
                </section>
            );
        }

        const ticket = event.tickets.find(t => t.id === ticketId);

        console.log(ticketId);
        console.log(ticket);

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
