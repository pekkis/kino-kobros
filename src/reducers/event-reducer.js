import { Map } from 'immutable';
import uuid from 'node-uuid';

import {
    RECEIVE_EVENT,
    RECEIVE_EVENT_FAILED,
} from '../actions/event-actions';

const defaultState = Map({
    events: Map()
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case RECEIVE_EVENT:
            const event = action.payload;

            console.log(event);

            return state.setIn(['events', event.id], event);
            break;
        default:
            return state;

    }
};
