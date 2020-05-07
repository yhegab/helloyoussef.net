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

    updateData() {
        const URI = 'http://127.0.0.1:5000'

        // Simple POST request with a JSON body using fetch
        const formData  = new FormData();
        formData.append('access_tokens', this.state.tokens.join(','));
        const requestOptions = {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        };
        fetch(`${URI}/get_accounts`, requestOptions)
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json()
                }
                throw new Error('invalid response');
            })
            .then(data => {
                this.setState({ data })
                localStorage.setItem('tokens', JSON.stringify(this.state));

            })
            .catch(e => {
                console.log(e)
            })
    }

    componentDidMount() {
        this.updateData();
    }

    static formattedAmount(amount) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(amount);
    }

    render() {
        
        const cols = [
            {
              Header: 'Account',
              accessor: "name",
              Footer: true && <div/>,
              minWidth: 200

            },
            {
              Header: 'Currency',
              accessor: "currency",
              Footer: true && <div/>,
              
            },
            {
                id: 'amount',
                Header: 'Amount',
                accessor: d => Accounts.formattedAmount(d.amount),
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
                Total net worth: <b>{Accounts.formattedAmount(this.state.data.reduce((a, b) => a + (b['amount'] || 0), 0))}</b>
            </div>
        )
    }
}

export default Accounts;