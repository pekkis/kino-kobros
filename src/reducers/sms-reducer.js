import { Map } from 'immutable';
import uuid from 'node-uuid';

import {
    SEND_SMS,
    SEND_SMS_SUCCESS,
    SEND_SMS_FAILED,
    SEND_SMS_READY
} from '../actions/sms-actions';

const defaultState = Map({
    sending: false,
    status: 'ready'
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case SEND_SMS:
            return state
                .set('sending', true)
                .set('status', 'sending');

        case SEND_SMS_SUCCESS:
            return state
                .set('sending', false)
                .set('status', 'success');

        case SEND_SMS_FAILED:
            return state
                .set('sending', false)
                .set('status', 'failure');

        case SEND_SMS_READY:
            return state
                .set('status', 'ready');

        default:
            return state;

    }
};
