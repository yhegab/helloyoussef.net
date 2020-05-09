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
            error: false
        }
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillMount() {
        this._mounted = false;
    }

    onSuccess(public_token, metadata) {
        const { cookies } = this.props;

        // Get access_token from API using public token
        const URI = 'https://loonie.itsjafer.com'

        // Simple POST request with a JSON body using fetch
        const formData  = new FormData();
        formData.append('token', public_token);
        const requestOptions = {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        };
        fetch(`${URI}/get_access_token`, requestOptions)
            .then(response => response.json())
            .then(data => {
                // access_token allows us to query balances indefinitely; it does NOT give the ability to make purchases, etc.
                cookies.set('access_tokens', this.state.access_tokens.concat(data), { path: '/', secure: true, sameSite: 'lax'})
                this.setState(state => {
                    const access_tokens = state.access_tokens.concat(data);
                    return { access_tokens }
                })
            })
            .catch(error => {
                this.setState({ error })
                console.log(error)
            })
    }

    removeToken() {
        const { cookies } = this.props;
        cookies.remove('access_tokens')
    }

    render() {
        const tokens = this.state.access_tokens;

        return (
            <div>
                Loonie is a personal finance dashboard I made using <a href='https://plaid.com'>Plaid API</a> that shows your net worth at a glance. Plaid brokers a connection between Loonie and your banks such that no bank information is stored locally or remotely on my website. From beginning to end: 
                <ol>
                    <li>Plaid connects you to your bank and gives me a temporary public token</li>
                    <li>I send the public token to Loonie's <a href='https://github.com/itsjafer/loonie-backend'>backend</a> which, in turn, queries Plaid for a permanent access token</li>
                    <li>Loonie stores the access token as a secure, same site cookie for future queries.</li>
                </ol>
                
                <PlaidLink
                    clientName="Loonie"
                    env="sandbox"
                    product={['auth']}
                    publicKey="0bb843ebf87ff3cdf72ecace20b8ce"
                    countryCodes={['US,CA']}
                    onSuccess={(token,metadata) => this.onSuccess(token,metadata)}>
                    Connect an account
                </PlaidLink>
                {this.state.error && ` Unable to connect to your account (${this.state.error})`}
                {tokens && tokens.length > 0 && 
                <Button onClick={() => this.removeToken()} variant="raised">Clear accounts</Button>}

                {tokens && tokens.length > 0 &&
                // Render a table summarizing our accounts here probably
                <div>
                    <br/>
                    <Accounts tokens={tokens} cookies={this.props.cookies}/>
                    <br/>
                </div>
                }
            </div>
        )
    }
}
 
export default Loonie;