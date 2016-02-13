import { Map } from 'immutable';
import uuid from 'node-uuid';

import {
    RECEIVE_EVENT,
    RECEIVE_EVENT_FAILED,
    FETCH_EVENT
} from '../actions/event-actions';

const defaultState = Map({
    events: Map(),
    error: false
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case FETCH_EVENT:
            return state.set('error', false);

        case RECEIVE_EVENT:
            const event = action.payload;
            return state
                .setIn(['events', event.id], event)
                .set('error', false);
            break;

        case RECEIVE_EVENT_FAILED:
            return state.set('error', true);
        default:
            return state;

    }
};
