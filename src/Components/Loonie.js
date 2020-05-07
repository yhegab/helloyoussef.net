import React, { Component } from "react";
import { PlaidLink } from 'react-plaid-link';
import Button from 'muicss/lib/react/button';
import Accounts from './Accounts'


class Loonie extends Component {


    constructor(props) {
        super(props);
        const { cookies } = props;
        const access_tokens = cookies.get('access_tokens') || []
        const public_tokens = cookies.get('public_tokens') || []
        this._mounted = false;

        this.state = {
            access_tokens,
            public_tokens,
        }
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillMount() {
        this._mounted = false;
    }

    onSuccess(public_token, metadata) {
        console.log(public_token)
        const { cookies } = this.props;

        // Get access_token from API using public token
        const URI = 'https://loonie.itsjafer.com'

        // Simple POST request with a JSON body using fetch
        const formData  = new FormData();
        formData.append('token', public_token);
        const requestOptions = {
            method: 'POST',
            body: formData
        };
        fetch(`${URI}/get_access_token`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                cookies.set('access_tokens', this.state.access_tokens.concat(data), { path: '/'})
                this.setState(state => {
                    const access_tokens = state.access_tokens.concat(data);
                    return { access_tokens }
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    removeToken() {
        const { cookies } = this.props;
        cookies.remove('access_tokens')
    }

    render() {
        const tokens = this.state.access_tokens;
        console.log(tokens)

        return (
            <div>
                Loonie is a personal finance dashboard that seeks to show your net worth at a glance.
                <br/>
                <br/>
                
                <PlaidLink
                    clientName="Loonie"
                    env="development"
                    product={['auth']}
                    publicKey="0bb843ebf87ff3cdf72ecace20b8ce"
                    countryCodes={['US,CA']}
                    onSuccess={(token,metadata) => this.onSuccess(token,metadata)}>
                    Connect an account
                </PlaidLink>
                {tokens && tokens.length > 0 && 
                <Button onClick={() => this.removeToken()} variant="raised">Clear accounts</Button>}

                {tokens && tokens.length > 0 &&
                // Render a table summarizing our accounts here probably
                <div>
                    <Accounts tokens={tokens} cookies={this.props.cookies}/>
                    <br/>
                </div>
                }
            </div>
        )
    }
}
 
export default Loonie;