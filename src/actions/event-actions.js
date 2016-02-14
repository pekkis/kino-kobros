import axios from 'axios';
import { List } from 'immutable';
import events from 'services/event';

export const FETCH_EVENT = 'FETCH_EVENT';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_FAILED = 'RECEIVE_EVENT_FAILED';

export function receiveEvent(event) {
    return {
        type: RECEIVE_EVENT,
        payload: event
    };
}

export function receiveEventFailed(error) {
    return {
        type: RECEIVE_EVENT_FAILED,
        payload: event
    };
}

export function fetchEvent(id) {

    return function(dispatch, getState) {

        dispatch({
            type: FETCH_EVENT
        });

        return events
            .getEvent(id)
            .then(event => dispatch(receiveEvent(event)))
            .catch(error => dispatch(receiveEventFailed(error)));
    };
}
