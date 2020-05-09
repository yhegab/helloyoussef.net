import React, { Component } from 'react';
import { PlaidLink } from 'react-plaid-link';
import Button from 'muicss/lib/react/button';
import Accounts from './Accounts';

class Loonie extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    const accessTokens = cookies.get('accessTokens') || [];

    this.state = {
      accessTokens,
      error: false,
    };
  }

  onSuccess(publicToken) {
    const { cookies } = this.props;

    // Get access_token from API using public token
    const URI = 'https://loonie.itsjafer.com';

    // Simple POST request with a JSON body using fetch
    const formData = new FormData();
    formData.append('token', publicToken);
    const requestOptions = {
      method: 'POST',
      body: formData,
      credentials: 'same-origin',
    };
    fetch(`${URI}/get_access_token`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // access_token allows us to query balances indefinitely; it does NOT give the ability to make purchases, etc.
        const { accessTokens } = this.state;
        cookies.set('accessTokens', accessTokens.concat(data), { path: '/', secure: true, sameSite: 'lax' });
        this.setState({ accessTokens: accessTokens.concat(data) });
      })
      .catch((error) => {
        this.setState({ error });
        console.log(error);
      });
  }

  removeToken() {
    const { cookies } = this.props;
    cookies.remove('accessTokens');
  }

  render() {
    const { accessTokens, error } = this.state;
    const { cookies } = this.props;

    return (
      <div>
        <a href="https://github.com/itsjafer/itsjafer.github.io/tree/dev/src/Components/Loonie"> Loonie</a>
        {' '}
        is a personal finance dashboard I made using
        {' '}
        <a href="https://plaid.com"> Plaid API</a>
        {' '}
        that shows your net worth at a glance. Plaid brokers a connection between Loonie and your banks such that no bank information is stored locally or remotely on my website. From beginning to end:
        <ol>
          <li>Plaid connects you to your bank and gives me a temporary public token</li>
          <li>
            I send the public token to Loonie&apos;s
            <a href="https://github.com/itsjafer/loonie-backend"> backend</a>
            {' '}
            which, in turn, queries Plaid for a permanent access token
          </li>
          <li>Loonie stores the access token as a secure, same site cookie for future queries.</li>
        </ol>

        <PlaidLink
          clientName="Loonie"
          env="development"
          product={['auth']}
          publicKey="0bb843ebf87ff3cdf72ecace20b8ce"
          countryCodes={['US,CA']}
          onSuccess={(token, metadata) => this.onSuccess(token, metadata)}
        >
          Connect an account
        </PlaidLink>
        {error && ` Unable to connect to your account (${error})`}
        {accessTokens && accessTokens.length > 0
                && <Button onClick={() => this.removeToken()} variant="raised">Clear accounts</Button>}

        {accessTokens && accessTokens.length > 0
                // Render a table summarizing our accounts here probably
                && (
                <div>
                  <br />
                  <Accounts tokens={accessTokens} cookies={cookies} />
                  <br />
                </div>
                )}
      </div>
    );
  }
}

export default Loonie;
