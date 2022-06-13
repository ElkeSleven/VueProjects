import { createStore } from 'vuex'


export default createStore({
  state: {
    wallet: [
      {code: 'BTC', name: 'Bitcoin', amountOwned: 1.2, logoPath: 'btc.jpg'},
      {code: 'ETH', name: 'Ethereum', amountOwned: 16, logoPath: 'eth.png'},
      {code: 'DOGE', name: 'DogeCoin', amountOwned: 42069, logoPath: 'doge.png'},
      {code: 'LINK', name: 'Chainlink', amountOwned: 999, logoPath: 'link.png'},
      {code: 'pony', name: 'microsoft', amountOwned: 2, logoPath: 'link.png'},
    ],

  },
  mutations: {
    buy(state,payload)
    {
      let coinToBuy = state.wallet.find(coin =>
      {return coin === payload.coin})

      coinToBuy.amountOwned += payload.transactionAmount;
    },
    sell(state,payload)
    {
      let coinToBuy = state.wallet.find(coin =>
      {return coin === payload.coin})

      coinToBuy.amountOwned -= payload.transactionAmount;


    }
  },
  actions: {
  },
  modules: {
  }
})
