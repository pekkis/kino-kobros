import React from 'react';
import { fetchEvent } from 'actions/event-actions';
import Icon from 'react-fa';
import EventInfo from './EventInfo'
import TicketPreviews from './TicketPreviews';

class EventPage extends React.Component {

    render() {

        const id = parseInt(this.props.params.id);
        const { events } = this.props;
        const event = events.get(id);

        if (!event) {
            return (
                <section>
                    <Icon name="cog" spin={true} size="4x" /> Kino Kobros lataileepi...
                </section>
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
