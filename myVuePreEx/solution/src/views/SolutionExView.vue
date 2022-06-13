<template>
<h1>OK</h1>
  <h2 v-if="validAmount">Not enough coins in your wallet !</h2>
  <div v-for="(coin) in wallet" :key="coin.code">
    <CoinRow :coin="coin" @amountNotValid="showElement"/>
  </div>
</template>

<script>
import CoinRow from "@/components/CoinRow";
export default {
  name: "solution",

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

<style scoped>

</style>