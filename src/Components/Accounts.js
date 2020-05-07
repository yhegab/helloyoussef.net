import React, { Component } from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
  
class Accounts extends Component {
    constructor(props) {
        super(props)
        const { tokens } = props;
        this.state = {
            tokens: tokens,
            data: []
        }
    }

    componentDidMount() {
        const URI = 'http://loonie.itsjafer.com'

        // Simple POST request with a JSON body using fetch
        const formData  = new FormData();
        formData.append('tokens', this.state.tokens.join(','));
        const requestOptions = {
            method: 'POST',
            body: formData
        };
        fetch(`${URI}/get_accounts`, requestOptions)
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json()
                }
                // it's an error or something
                const { cookies } = this.props;
                cookies.remove('tokens');
                throw new Error('invalid response');
            })
            .then(data => {
                this.setState({ data })
            })
            .catch(e => {
                console.log(e)
            })
    }

    static formattedAmount(data) {
        const formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: data.currency,
        });

        return formatter.format(data.amount);
    }

    render() {
        
        const cols = [
            {
              Header: 'Account',
              accessor: "name",
              Footer: true && <div/>,
              minWidth: 250

            },
            {
              Header: 'Currency',
              accessor: "currency",
              Footer: true && <div/>
            },
            {
                id: 'amount',
                Header: 'Amount',
                accessor: d => Accounts.formattedAmount(d),
                Footer: true && <div/>
            }
        
          ]
        return (
            <div>
                <div className="table">
                    {
                        this.state.data.length === 0 &&
                        'Loading...'
                    }
                    {
                        this.state.data.length > 0 &&
                        <ReactTable
                            data={this.state.data}
                            columns={cols}
                            defaultPageSize={this.state.data.length}
                            showPaginationBottom={false}
                            showPageSizeOptions={false}
                        />
                    }
                    </div>
            </div>
        )
    }
}

export default Accounts;