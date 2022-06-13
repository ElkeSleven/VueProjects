<template>
  <h3 v-if="!isValid">niet genoeg coins in je wallet!</h3>
  <div class="wallet">
    <CoinRow :coin="coin" v-for="(coin) in wallet"
             :key="coin.code"
             @isValidTranaction="setBool"/>
  </div>

</template>

<script>
import CoinRow from "@/components/CoinRow";
export default {
  name: "vue1",
  components: {
    CoinRow
  },
  computed:{
    wallet()
    {return this.$store.state.wallet}
  },
  data(){
    return{
      isValid: true

    }},
  methods:{
    setBool(boolvalue)
    {
      this.isValid = boolvalue;
    }
  },

}
</script>

<style scoped>
.wallet{
  display: grid;
  grid-auto-rows: 1fr;
}


</style>