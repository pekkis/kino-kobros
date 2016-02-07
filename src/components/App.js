import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from './App.pcss';

export default class App extends React.Component {

    render() {

        return (
            <section className={styles.root}>
                {this.props.children}
            </section>
        );
    }
}
