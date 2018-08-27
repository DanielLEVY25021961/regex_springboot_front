// Page d'accueil de l'application.
import axios from 'axios';
import * as React from 'react';
import { Button, Form, Header, InputOnChangeData, TextArea, TextAreaProps } from 'semantic-ui-react';

interface IAccueilProps {
    message: string
}

interface IAccueilState {
    motif: string;
    texte: string;
}

export default class Accueil extends React.Component<IAccueilProps, IAccueilState> {

    constructor(props: IAccueilProps) {
        super(props);

        this.state = {
            motif: '',
            texte: ''
        };

        this.handleMotifChange = this.handleMotifChange.bind(this);
        this.handleTexteChange = this.handleTexteChange.bind(this);
        this.valider = this.valider.bind(this);
    }

    public render() {
        return (
          <div className="Accueil">
          <Header as='h1'>{this.props.message}</Header>
          <Form>
            <Form.Field>
                <Header>Texte</Header>
                <TextArea placeholder='Tell us more'
                          onChange={this.handleTexteChange}
                          value={this.state.texte}/>
            </Form.Field>
            <Form.Field>
                <Form.Input fluid={true}
                            label='motif'
                            value={this.state.motif}
                            onChange={this.handleMotifChange}
                            placeholder='saisir le motif' />
            </Form.Field>
                <Button onClick={this.valider}>Valider</Button>
            </Form>
          </div>);
    }

    private handleTexteChange(event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) {
        if (typeof data.value === 'string') {
            this.setState({texte: data.value}); // this.setState({texte: data.value as string});
        }
    }

    private handleMotifChange(event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
        this.setState({motif: data.value});
    }

    private valider() {
        axios.post('http://localhost:8080/regex/valider',
                    {
                        motifJava: this.state.motif,
                        texte: this.state.texte
                    }).then(response => {
                        console.log("motifJava : " + this.state.motif);
                        console.log(response);
                    });
    }
}