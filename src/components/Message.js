import React from 'react';
import Icon from 'react-fa';
import styles from './Message.pcss';
import cx from 'classnames';

const icons = {
    error: {
        spin: false,
        name: 'ambulance'
    },
    loading: {
        spin: true,
        name: 'cog'
    }
}

export default function Message({type, message}) {

    const icon = icons[type];
    const classes = cx(styles.icon, styles[type])

    return (
        <section class={styles.root}>
            <Icon className={classes} name={icon.name} spin={icon.spin} size="4x" /> {message}
        </section>
    )
}
