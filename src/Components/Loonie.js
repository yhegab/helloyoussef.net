import React, { Component } from "react";
import { PlaidLink } from 'react-plaid-link';
import Button from 'muicss/lib/react/button';
import Accounts from './Accounts'


class Loonie extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;
        const tokens = cookies.get('tokens') || []
        this.state = {
            tokens
        }
    }

    onSuccess(token, metadata) {
        console.log(metadata)
        const { cookies } = this.props;
        this.setState(state => {
            const tokens = state.tokens.concat(token);
            return { tokens }
        })
        cookies.set('tokens', this.state.tokens, { path: '/'})
    }

    removeToken() {
        const { cookies } = this.props;
        cookies.remove('tokens')
    }

    render() {
        const tokens = this.state.tokens;

        return (
            <div>
                Loonie is a work-in-progress personal finance manager that seeks to show your net worth at a glance.
                <br/>
                For now, actual bank credentials will not work; instead, use 'user_good' and 'user_pass' as username and password respectively.
                <br/>
                <br/>
                
                <PlaidLink
                    clientName="Loonie"
                    env="sandbox"
                    product={['transactions']}
                    publicKey="0bb843ebf87ff3cdf72ecace20b8ce"
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