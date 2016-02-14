import axios from 'axios';
import config from '../../config.server';
import jsdom from 'jsdom';

export default {

    getEvent: (id) => {

        return new Promise((resolve, reject) => {

            axios
                .get(
                    config.api + '/eTicket/' + id
                )
                .then(
                    ret => ret.data
                )
                .then(ret => {

                    jsdom.env(
                        ret,
                        ["http://code.jquery.com/jquery.js"],
                        function (err, window) {

                            if (err) {
                                return reject(err);
                            }

                            const tickets = [];

                            const $tickets = window.$('.ticket-block');

                            if ($tickets.length === 0) {
                                return reject("Tickets not found");
                            }


                            $tickets.each((k, tb) => {

                                const $tb = window.$(tb);

                                const t = {
                                    img: $tb.find('img[alt=Ticket]').attr('src'),
                                    seat: {
                                        row: $tb.find('.showLocation').find('span:first-child b').text(),
                                        seat: $tb.find('.showLocation').find('span:last-child b').text(),
                                    }
                                };

                                const match = t.img.match(/barcode=(.+)$/);
                                t.id = decodeURIComponent(match[1]);
                                t.eventId = id;
                                tickets.push(t);
                            });

                            const $time = window.$('.showTime');

                            const $location = window.$('.showLocation').first();

                            const _theater = $location
                                .text()
                                .trim()
                                .split(',')
                                .map(s => s.trim());

                            // Hi-res poster image
                            const poster = window.$('.eventHeader img').attr('src')
                                .replace('portrait_small', 'portrait_medium');

                            const ret = {
                                id,
                                title: window.$('h1').text().trim(),
                                originalTitle: window.$('h2.originalTitle').text().trim(),
                                time: $time.contents().get(0).nodeValue.trim(),
                                date: $time.find('.showTimeDate').text().trim(),
                                venue: {
                                    theater: _theater[0],
                                    room: _theater[1],
                                },
                                poster,
                                tickets
                            };

                            ret.time = ret.time.trim();

                            return resolve(ret);
                        }
                    );

                });


        });


    }



}
