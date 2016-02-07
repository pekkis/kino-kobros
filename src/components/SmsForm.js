import React from 'react';

const message = (status) => {

    const messages = {
        ready: 'Lähetä lippu tekstiviestinä',
        sending: 'Viestiä lähetetään...',
        failure: 'Lähetys epäonnistui :(',
        success: 'Lähetys onnistui! :)',
    };

    return messages[status];
}

export default class SmsForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const { status } = this.props;

        if (status !== 'ready') {
            return;
        }

        const msisdn = this.refs.msisdn.value;
        const { eventId, ticketId, sendSms } = this.props;

        if (!msisdn) {
            return;
        }

        sendSms(msisdn, eventId, ticketId);
    }

    render() {

        const { status } = this.props;

        return (
            <form onSubmit={this.onSubmit} disabled={status !== 'ready'}>
                <input ref="msisdn" type="text" placeholder="Puhelinnumero (358XXXXXXX)" />
                <button type="submit">{message(status)}</button>
            </form>
        );
    }
}
