import React from 'react';
import { fetchEvent } from 'actions/event-actions';
import Icon from 'react-fa';
import EventInfo from './EventInfo'
import TicketPreviews from './TicketPreviews';
import Message from './Message';

class EventPage extends React.Component {

    render() {

        const id = parseInt(this.props.params.id);
        const { events, error } = this.props;
        const event = events.get(id);

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

        return (
            <section>

                <EventInfo event={event} />

                <TicketPreviews event={event} />

            </section>
        );
    }
};


EventPage.fetch = ({dispatch}, nextState) => {

    const { id } = nextState.params;
    return dispatch(fetchEvent(id));
};

export default EventPage;
