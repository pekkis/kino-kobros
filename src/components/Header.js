import React from 'react';
import styles from './Header.pcss';

export default function Header() {

    return (
        <header className={styles.root}>
            <h1>
                <img src={require('images/dr-kobros.png')} />
                <img src={require('images/finnkino.png')} />
                <br />
                Kino Kobros
            </h1>
        </header>

    )

}
