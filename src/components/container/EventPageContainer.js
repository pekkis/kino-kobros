import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../EventPage';

export default connect(
    state => ({
        events: state.event.get('events'),
        error: state.event.get('error')
    }),
    dispatch => bindActionCreators({
    }, dispatch)
)(Wrapped);
