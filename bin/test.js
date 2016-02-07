import e from '../src/services/finnkino-event.js';

e.getEvent(4645340831).then(purchase => {

    console.log(purchase);

    console.log(purchase.tickets);

}).catch(e => {
    console.log(e);


})



