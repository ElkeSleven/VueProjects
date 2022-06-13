<template>
<div v-for="c in wallet">{{c.code}}</div>
</template>

<script>
export default {
  name: "CompWallet",
  data(){    //LangeVercie:  data: function (){
    return{
      wallet: [
        {code: 'BTC', name: 'Bitcoin', amountOwned: 1.2, logoPath: 'assets/btc.jpg'},
        {code: 'ETH', name: 'Ethereum', amountOwned: 16, logoPath: 'eth.png'},
        {code: 'DOGE', name: 'DogeCoin', amountOwned: 42069, logoPath: 'doge.png'},
        {code: 'LINK', name: 'Chainlink', amountOwned: 999, logoPath: 'link.png'},
      ]
    }
  },
}





</script>

<style scoped>

</style>