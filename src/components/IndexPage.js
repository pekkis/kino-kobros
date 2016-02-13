import React from 'react';
import Header from './Header';
import Footer from './Footer';

class IndexPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const { push } = this.props;

        const id = this.refs.id.value;
        push(`/event/${id}`);
    }

    render() {

        return (
            <section>

                <Header />

                <p>
                    Kino Kobros on parempi ja massaostoystävällinen käyttöliittymä
                    Finnkinon e-lippuihin.
                </p>

                <p>
                    Finnkinon oston numeron löydät esimerkiksi varmistussähköpostin otsikosta.
                </p>

                <p>
                    <strong>OBS! </strong> Kaikkien ostosten tiedot vähintään käyvät
                    palvelimellani, ja niiden tietoja
                    potentiaalisesti säilötään jotta voin kehittää käyttöliittymää paremmaksi.
                    Nähdäkseni käytettyjen ostosten ja lippujen numeroilla ei ole varsinaista
                    arvoa, mutta parempi että joka tapauksessa tiedostat asian.
                </p>

                <p>
                    Jos haluat tarkkaan tietää, mitä koodi tekee, <a target="_blank" href="https://github.com/pekkis/kino-kobros">lue se läpi.</a>
                    {' '}Jos et usko että palvelimellani pyörivä koodi on sama, ota ihmeessä forkki ja hostaa oma versiosi!
                </p>

                <form onSubmit={this.onSubmit}>
                    <label>Oston numero</label>
                    <input ref="id" type="text" placeholder="Finnkinon oston numero" />
                    <button type="submit">Lähetä</button>
                </form>

                <Footer />

            </section>
        );
    }
};

export default IndexPage;
