import React, { Component } from 'react';

class ReverseSplit extends Component {
  constructor(props) {
    super(props)
    this.state = {
        stock: '',
        qty: 1,
        side: "Buy",
        loading: false,
        account: "schwab"
    }
  }


  onSubmit = (event) => {
      event.preventDefault()
      this.setState({ loading: true });

      const formData = new FormData();
      formData.append("ticker", this.state.stock)
      formData.append("qty", this.state.qty)
      formData.append("side", this.state.side)
      const requestOptions = {
        method: 'POST',
        body: formData
      };
      fetch('https://server-22cbpdc3ea-uc.a.run.app/trade_'+this.state.account, requestOptions)
        .then((response) => {
            alert(response.text())
            this.setState({ loading: false })
        })
  }
  render() {
    
    return (
      <div className="reverse-split">
          <div className="schwab">
              <form onSubmit={this.onSubmit}>
              <p>Reverse Stock Split Arbitrage:</p>
              <input type="text" value={this.state.stock} placeholder="stock ticker" 
              onChange={(e)=> this.setState({stock: e.target.value })}/>
              <input type="text" value={this.state.qty} placeholder="0" pattern="[0-9]+"
              onChange={(e)=> this.setState({qty: e.target.value })}/>
              <select value={this.state.side} onChange={(e)=> this.setState({side: e.target.value })}>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
              <select value={this.state.account} onChange={(e)=> this.setState({account: e.target.value })}>
                <option value="ts">TradeStation</option>
                <option value="schwab">Schwab</option>
              </select>
              <input type="submit"/>
              </form>
              {
                this.state.loading && 'Loading...'
              }
          </div>
        
      </div>
    );
  }
}

export default ReverseSplit;
