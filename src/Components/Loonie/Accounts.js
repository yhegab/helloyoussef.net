import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Accounts extends Component {
  static formattedAmount(amount) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(amount);
  }

  constructor(props) {
    super(props);
    const { tokens } = props;
    this.state = {
      tokens,
      data: [],
      error: false,
    };
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    const URI = 'https://loonie.itsjafer.com';

    const formData = new FormData();
    const { tokens } = this.state;
    formData.append('access_tokens', tokens.join(','));
    const requestOptions = {
      method: 'POST',
      body: formData,
      credentials: 'same-origin',
    };
    fetch(`${URI}/get_accounts`, requestOptions)
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          return response.json();
        }
        throw new Error('invalid response');
      })
      .then((data) => {
        this.setState({ data });
        localStorage.setItem('tokens', JSON.stringify(this.state));
      })
      .catch((e) => {
        console.log(e);
        this.error = true;
      });
  }


  render() {
    const cols = [
      {
        Header: 'Account',
        accessor: 'name',
        Footer: true && <div />,
        minWidth: 200,

      },
      {
        Header: 'Currency',
        accessor: 'currency',
        Footer: true && <div />,

      },
      {
        id: 'amount',
        Header: 'Amount',
        accessor: (d) => Accounts.formattedAmount(d.amount),
        Footer: true && <div />,
      },

    ];

    const { error, data } = this.state;
    return (
      <div>
        <div className="table">
          {
            data.length === 0 && !error
                        && 'Loading your account balances...'
          }
          {
            error
                        && 'Unable to load account information'
          }
          {
            data.length > 0
                        && (
                        <ReactTable
                          data={data}
                          columns={cols}
                          defaultPageSize={data.length}
                          showPaginationBottom={false}
                          showPageSizeOptions={false}
                        />
                        )
          }
        </div>
        Total net worth (USD):
        {' '}
        <b>{Accounts.formattedAmount(data.reduce((a, b) => a + (b.usd_amount || 0), 0))}</b>
        <br />
        Total net worth (CAD):
        {' '}
        <b>{Accounts.formattedAmount(data.reduce((a, b) => a + (b.cad_amount || 0), 0))}</b>
      </div>
    );
  }
}

export default Accounts;
