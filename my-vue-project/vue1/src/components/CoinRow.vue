<template>

  <div class="coinRow">
    <div class="img-box" ><img class="coin__img" :src="require(`@/assets/${coin.logoPath}`)" alt="logo coin"></div>
    <div class="coinRow__info">
      <div>{{coin.name}}</div>
      <div>Coins owned: {{coin.amountOwned}}</div>
      <input v-model="inputValue" class="coinRow__input" type="number" oninput="this.value = this.value.replace(/[^0-9.]/, '').replace(/(\..*)\./);"  >
      <div class="btn-group">
        <CompButton @click="onClick('buy')" index="Buy" backgr-color="green" ></CompButton>
        <CompButton @click="onClick('sell')" index="Sell" backgr-color="Red" ></CompButton>
      </div>
    </div>
  </div>
</template>

<script>
import CompButton from "@/components/CompButton";
export default {
  name: "CoinRow",
  components: {CompButton},
  data(){
    return{
      inputValue: String
    }
  },
  props: {
    coin: Object
  },
  methods:{
     onClick(trigger){
       if(!isNaN(parseInt(this.inputValue)))
       {
         if(trigger === 'buy'){
           this.$emit('isValidTranaction', true)
           this.$store.commit('buy', {coin: this.coin, amountForTransaction: parseInt(this.inputValue)})  // voeg een value toe aan de array coin
         }
         if(trigger === 'sell' && parseInt(this.inputValue) < this.coin.amountOwned){
           this.$emit('isValidTranaction', true)
           this.$store.commit('sell', {coin: this.coin, amountForTransaction: parseInt(this.inputValue)})  // voeg een value toe aan de array coin
         }
         else {
           //alert('je hebt niet genoeg ')
           this.$emit('isValidTranaction', false)
         }
       }
       else {
         alert('voer eerst een waarde in')
         this.$emit('isValidTranaction', true)


       }
     }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.coinRow{
  display: flex;
}
.coinRow__info{
  align-self: center;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.img-box{
  display: flex;

}
.coin__img{
  height: auto;
  width: 100px;

}
.coinRow__input,.btn-group button{
  height: 2rem;
  margin-right: 1rem;
}
.btn-group button{
  padding: 0 1rem;


}


</style>