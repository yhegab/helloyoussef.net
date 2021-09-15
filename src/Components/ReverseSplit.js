import React, { Component } from 'react';
import 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactTable from 'react-table';

class ReverseSplit extends Component {
  constructor(props) {
    super(props)
    this.state = {
        stock: '',
        qty: 1,
        side: "Buy",
        loading: false,
        account: "schwab",
        totpSchwab: "",
        totpTS: "",
        isDryRun: false,
        data: null,
        messages: null
    }
  }


  onSubmit = (event) => {
      event.preventDefault()
      this.setState({ loading: true });

      const formData = new FormData();
      formData.append("ticker", this.state.stock)
      formData.append("qty", this.state.qty)
      formData.append("side", this.state.side)
      formData.append("username", this.state.username)
      formData.append("password", this.state.password)
      formData.append("totp", this.state.account == "schwab" ? this.state.totpSchwab : this.state.totpTS)
      formData.append("accounts", this.state.accts)
      formData.append("dry_run", this.state.isDryRun)
      const requestOptions = {
        method: 'POST',
        body: formData
      };
      fetch('https://server-22cbpdc3ea-uc.a.run.app/trade_'+this.state.account, requestOptions)
        .then(response => response.json())
        .then((data) => {
            if (data.hasOwnProperty("messages")) {
              this.setState({ messages: data })
            } else {
              this.setState({ data: data})
            }
            this.setState({ loading: false })
        })
  }

  responseGoogle = (response) => {
    console.log(response);
  }

  handleLogin = (googleData) => {
      console.log(googleData.tokenId)
  }

  componentDidMount() {
    this.setState({
      totpSchwab: localStorage.getItem('totpSchwab'),
      totpTS: localStorage.getItem('totpTS'),
      accts: localStorage.getItem('accts'),
      username: localStorage.getItem('username')
    })
  }

  render() {

    const onSuccess = (res) => {
        console.log(res.profileObj)
        this.setState({ accessToken: res.tokenId })
    }
    var JSONPrettyMon = require('react-json-pretty/dist/monikai');
    const columns = [{
      Header: 'Symbol',
      accessor: 'symbol' // String-based value accessors!
    }, {
      Header: 'Description',
      accessor: 'description',
    }, {
      Header: 'Total Cost',
      accessor: 'cost',
    }, {
      Header: 'Quantity Owned',
      accessor: 'quantity',
    }, {
      Header: 'Total Value',
      accessor: 'market_value',
    }]

    return (
        <div>
      <div className="reverse-split">
        <p>This is a tool to place bulk trades on either Schwab or Tradestation for anyone with multiple accounts. You can find the source code for the backend <a href="https://github.com/itsjafer/trade-server/">here.</a></p>
          <div className="schwab">
              <form onSubmit={this.onSubmit}>
              <p>Account Info:</p>
              <input type="text" value={this.state.username} placeholder="username" 
              onChange={(e)=> {this.setState({username: e.target.value }); localStorage.setItem('username', e.target.value)}}/>
              <input type="password" value={this.state.password} placeholder="password" 
              onChange={(e)=> this.setState({password: e.target.value })}/>

              <p><a href="https://www.reddit.com/r/personalfinance/comments/hvvuwl/using_google_auth_or_your_totp_app_of_choice_for/">TOTP secret:</a></p>
              {
                this.state.account == "schwab" &&
              <input type="text" value={this.state.totpSchwab} placeholder="Schwab TOTP" 
              onChange={(e)=> {this.setState({totpSchwab: e.target.value }); localStorage.setItem('totpSchwab', e.target.value)}}/>
              }
              {
                this.state.account == "ts" &&
              <input type="text" value={this.state.totpTS} placeholder="Tradestation TOTP" 
              onChange={(e)=> {this.setState({totpTS: e.target.value }); localStorage.setItem('totpTS', e.target.value)}}/>
              }

              <p>Trade:</p>
              <input type="text" value={this.state.stock} placeholder="stock ticker" 
              onChange={(e)=> this.setState({stock: e.target.value })}/>
              <input type="number" value={this.state.qty} placeholder="Number of shares" pattern="[0-9]+"
              onChange={(e)=> this.setState({qty: e.target.value })}/>
              <select value={this.state.side} onChange={(e)=> this.setState({side: e.target.value })}>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
              <select value={this.state.account} onChange={(e)=> this.setState({account: e.target.value })}>
                <option value="ts">TradeStation</option>
                <option value="schwab">Schwab</option>
              </select>
              {
                this.state.account == "ts" &&
              <input type="number" value={this.state.accts} placeholder="Number of Accounts" pattern="[0-9]+"
              onChange={(e)=> {this.setState({accts: e.target.value }); localStorage.setItem('accts', e.target.value)}}/>
              }
              <input type="submit" value={this.state.stock ? "Place Trade (on all accounts)" : "Get Account Info"}/>
              </form>
              {
                this.state.loading && <span>Loading... (this will take up to {this.state.account == "schwab" ? "1" : "5"} minute(s))</span>
              }
              {
                this.state.data && 
                (
                  <div>
                    <Tabs>
                      <TabList>
                          {Object.keys(this.state.data).map(account => <Tab>{account}</Tab>)}
                      </TabList>

                      {
                        Object.keys(this.state.data).map(account => 
                          <TabPanel>
                            <p><b>Account ID:</b> {this.state.data[account]["account_id"]}</p>
                            <p><b>Account Value:</b> ${this.state.data[account]["account_value"]}</p>
                            <p><b>Market Value:</b> ${this.state.data[account]["market_value"]}</p>
                            <p><b>Available Cash:</b> ${this.state.data[account]["available_cash"]}</p>
                            <p><b>Cost Basis:</b> ${this.state.data[account]["cost_basis"]}</p>
                            <ReactTable
                              data={this.state.data[account]["positions"]}
                              columns={columns}
                              showPaginationBottom={false}
                              showPageSizeOptions={false}
                            />
                          </TabPanel>)
                      }
                  </Tabs>
                  </div>
                )
              }
              {
                (this.state.messages || this.state.data) && (
                  <div>
                  <p>Raw JSON Output:</p>
                  <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={this.state.data ? this.state.data : this.state.messages}></JSONPretty>
                  </div>
                )
              }
          </div>
        
      </div>
      </div>
    );
  }
}

export default ReverseSplit;
