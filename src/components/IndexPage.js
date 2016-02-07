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
                    Kino Kobros on parempi ja massaostoystävällisempi käyttöliittymä
                    Finnkinon e-lippuihin.
                </p>

                <p>
                    Finnkinon oston numeron löydät esimerkiksi varmistussähköpostin otsikosta.
                </p>

                <p>
                    <strong>OBS! </strong> Kaikkien ostosten tiedot vähintäänkin käyvät
                    palvelimellani, ja niiden tietoja
                    potentiaalisesti säilötään jotta voin kehittää käyttöliittymää paremmaksi.
                    Nähdäkseni käytettyjen ostosten ja lippujen numeroilla ei ole varsinaista
                    arvoa, mutta parempi että tiedät. Jos haluat tarkkaan tietää, mitä koodi tekee, <a target="_blank" href="https://github.com/pekkis/kino-kobros">lue se läpi.</a>
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
