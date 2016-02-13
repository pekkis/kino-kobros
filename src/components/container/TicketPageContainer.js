import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../TicketPage';
import { sendSms } from 'actions/sms-actions';

export default connect(
    state => ({
        events: state.event.get('events'),
        smsSending: state.sms.get('sending'),
        smsStatus: state.sms.get('status'),
        error: state.event.get('error')
    }),
    dispatch => bindActionCreators({
        sendSms
    }, dispatch)
)(Wrapped);
