import axios from 'axios';
import { List } from 'immutable';
import smss from 'services/sms';

export const SEND_SMS = 'SEND_SMS';
export const SEND_SMS_SUCCESS = 'SEND_SMS_SUCCESS';
export const SEND_SMS_FAILED = 'SEND_SMS_FAILED';
export const SEND_SMS_READY = 'SEND_SMS_READY';

function sendSmsReady() {
    return function(dispatch) {

        setTimeout(function() {
            dispatch({
                type: SEND_SMS_READY
            });
        }, 5000);
    };
}

function sendSmsSuccess(msisdn) {

    return function(dispatch) {

        dispatch(sendSmsReady());

        return dispatch({
            type: SEND_SMS_SUCCESS,
            payload: msisdn
        });
    };
}

function sendSmsFailed(error) {

    return function(dispatch) {

        dispatch(sendSmsReady());

        return dispatch({
            type: SEND_SMS_FAILED,
            payload: error
        });
    };

}

export function sendSms(msisdn, eventId, ticketId) {

    return function(dispatch, getState) {

        dispatch({
            type: SEND_SMS
        });

        return smss
            .send(msisdn, eventId, ticketId)
            .then(msisdn => dispatch(sendSmsSuccess(msisdn)))
            .catch(error => dispatch(sendSmsFailed(error)));
    };
}
