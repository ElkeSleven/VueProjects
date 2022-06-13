<template>
  <h2 v-if="validAmount">Not enough coins in your wallet !</h2>
  <div v-for="(coin) in wallet" :key="coin.code">
    <coinRow :coin="coin" @amountNotValid="showElement"/>
  </div>
</template>

<script>

import CoinRow from "@/components/coinRow";
export default {
  name: 'Home',
  components: {CoinRow},
  data(){
    return{
      validAmount: false

    }},
  methods:{
    showElement(boolvalue)
    {
      this.validAmount = boolvalue;
    }
  },
  computed:{
    wallet()
    {return this.$store.state.wallet}
  },
}
</script>

<style>

</style>