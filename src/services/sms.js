import config from '../../config.client';
import axios from 'axios';

export default {

    send: (msisdn, eventId, ticketId) => {
        return axios
            .post(
                config.api + '/api/sms',
                {
                    msisdn,
                    eventId,
                    ticketId
                }
            )
            .then(ret => ret.data)
            .catch(e => {
                console.log(e);
                throw e;
            })
    }

};
