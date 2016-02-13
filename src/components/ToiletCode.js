import React from 'react';
import styles from './ToiletCode.pcss';

export default function ToiletCode({ ticket }) {

    const stylez = {
        'backgroundImage': `url(https://www.finnkino.fi${ticket.img})`
    };

    return (
        <div className={styles.root} style={stylez}>

        </div>

    );

}
