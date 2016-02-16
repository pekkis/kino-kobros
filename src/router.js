import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { fetchEvent } from './actions/event-actions';
import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';
import EventPage from './components/container/EventPageContainer';
import TicketPage from './components/container/TicketPageContainer';
import createFetchers from '@dr-kobros/react-broilerplate/lib/universal';

export function createRouter({ store, history }) {

    const { fetcher, prefetcher } = createFetchers(store);

    function initApp(nextState, replaceState, callback) {


        //store.dispatch(receiveTodos()).then(() => {
            callback();
        // });
    }

    /*
    function requiresLogin(nextState, replaceState) {
        const user = store.getState().user.get('user');

        if (user.anonymous) {
            replaceState(
                {
                    'next': nextState.location.pathname,
                },
                '/login'
            );
        }
    }
    */

    return (
        <Router history={history}>
            <Route path="/" component={App} onEnter={initApp}>
                <IndexRoute component={IndexPage} onEnter={fetcher}/>
                <Route path="event/:id" component={EventPage} onEnter={fetcher} />
                <Route path="event/:id/:ticketId" component={TicketPage} onEnter={fetcher}/>
            </Route>
        </Router>
    );
}

