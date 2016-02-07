import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../App';

export default connect(
    state => ({}),
    dispatch => bindActionCreators({
    }, dispatch)
)(Wrapped);
