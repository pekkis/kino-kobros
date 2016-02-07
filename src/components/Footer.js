import React from 'react';
import styles from './Footer.pcss';

export default function Footer() {

    return (
        <footer className={styles.root}>
            <p>
                &copy; <a href="mailto:pekkisx@gmail.com">Mikko Forsström</a>. Käytä ihan miten tykkäät. Vastuu on itselläsi.
            </p>
        </footer>
    );

}
