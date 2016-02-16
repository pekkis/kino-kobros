import uuid from 'node-uuid';
import { createServer } from '@dr-kobros/react-broilerplate-server-express/lib/server';
import config from '../config.server';
import webpackConfig from '../webpack.config';
import events from './services/finnkino-event';
import { Map } from 'immutable';
import bodyParser from 'body-parser';

const messagebird = require('messagebird')(config.messagebird);

let eventCache = Map();

createServer(config, webpackConfig, (app) => {

    app.use(bodyParser.json());

    app.get('/api/event/:id', function(req, res, next) {

        const id = parseInt(req.params.id);
        const cached = eventCache.get(id);

        if (cached) {
            console.log('got event from cache');
            res.json(cached);
            return next();
        }

        console.log('fetching from finnkino');

        events.getEvent(id)
            .then(event => {
                eventCache = eventCache.set(event.id, event);
                res.json(event);
            })
            .catch(error => {
                res.status(404).json({ error: 'Event failed!' });
            })

    });

    app.post('/api/sms', function(req, res, next) {

        const body = req.body;

        const params = {
            originator: 'Kino-Kobros',
            recipients: [
                body.msisdn
            ],
            body: `Elokuvalippunne: ${config.server}/event/${body.eventId}/${body.ticketId}`
        };

        messagebird.messages.create(params, function (err, response) {
            if (err) {
                res.status(500).json(['fail'])
            }
            res.json(['ok']);
        });

    });


});

