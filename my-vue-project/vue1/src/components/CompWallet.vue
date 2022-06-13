<template>
  <img alt="" class="logo-school" src="../assets/logo_pxl_hogeschool.png"/>

  <div class="coinRow" v-for="c in wallet">
    <div class="img-box"><img src="../assets/link.png" alt=""/></div>
    <div class="coin__name">{{c.name}}</div>
    <div class="coin__amountOwned">{{c.amountOwned}}</div>
    <input class="coin__toSell"/>

  </div>



</template>

<script>
export default {
  name: "CompWallet",
  data(){    //LangeVercie:  data: function (){
    return{
      wallet: [
        {code: 'BTC', name: 'Bitcoin', amountOwned: 1.2, logoPath: '../assets/btc.jpg'},
        {code: 'ETH', name: 'Ethereum', amountOwned: 16, logoPath: '../assets/eth.png'},
        {code: 'DOGE', name: 'DogeCoin', amountOwned: 42069, logoPath: '../assets/doge.png'},
        {code: 'LINK', name: 'Chainlink', amountOwned: 999, logoPath: '../assets/link.png'},
      ]
    }
  },
}
</script>

<style scoped>
.coinRow{
  display: grid;
  gr
}
.logo-school{
  width: 15rem;
}
.coin__toSell{
  max-height: 2rem;
}
</style>