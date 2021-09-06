import React, { Component } from 'react';

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
        accts: null
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
      const requestOptions = {
        method: 'POST',
        body: formData
      };
      fetch('https://server-22cbpdc3ea-uc.a.run.app/trade_'+this.state.account, requestOptions)
        .then(response => response.text())
        .then((text) => {
            alert(text)
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
    
    return (
        <div>
      <div className="reverse-split">
        <p>This is a tool to place trades on multiple accounts on either Schwab or Tradestation.</p>
          <div className="schwab">
              <form onSubmit={this.onSubmit}>
              <p>Account Info:</p>
              <input type="text" value={this.state.username} placeholder="username" 
              onChange={(e)=> {this.setState({username: e.target.value }); localStorage.setItem('username', e.target.value)}}/>
              <input type="password" value={this.state.password} placeholder="password" 
              onChange={(e)=> this.setState({password: e.target.value })}/>

              <p>One-time TOTP secret</p>
              <input type="text" value={this.state.totpSchwab} placeholder="Schwab TOTP" 
              onChange={(e)=> {this.setState({totpSchwab: e.target.value }); localStorage.setItem('totpSchwab', e.target.value)}}/>
              <input type="text" value={this.state.totpTS} placeholder="Tradestation TOTP" 
              onChange={(e)=> {this.setState({totpTS: e.target.value }); localStorage.setItem('totpTS', e.target.value)}}/>

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
              <input type="number" value={this.state.accts} placeholder="Number of Accounts" pattern="[0-9]+"
              onChange={(e)=> {this.setState({accts: e.target.value }); localStorage.setItem('accts', e.target.value)}}/>
              <input type="submit" value="Place Trade"/>
              </form>
              {
                this.state.loading && 'Loading...'
              }
          </div>
        
      </div>
      </div>
    );
  }
}

export default ReverseSplit;
