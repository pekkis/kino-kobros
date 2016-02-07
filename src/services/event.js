import config from '../../config.client';
import axios from 'axios';

export default {

    getEvent: (id) => {
        return axios
            .get(
                config.api + '/api/event/' + id
            )
            .then(ret => ret.data);
    }

};
