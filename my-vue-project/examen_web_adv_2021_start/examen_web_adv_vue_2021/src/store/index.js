import { createStore } from 'vuex'

export default createStore({
  state: {
    wallet: [
      {code: 'BTC', name: 'Bitcoin', amountOwned: 1.2, logoPath: 'btc.jpg'},
      {code: 'ETH', name: 'Ethereum', amountOwned: 16, logoPath: 'eth.png'},
      {code: 'DOGE', name: 'DogeCoin', amountOwned: 42069, logoPath: 'doge.png'},
      {code: 'LINK', name: 'Chainlink', amountOwned: 999, logoPath: 'link.png'},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
