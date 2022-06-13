<template>
  <ul class="coinRow">
    <li><img :src="require(`@/assets/${coin.logoPath}`)" alt="logo coin"></li>
    <li>
      <h2>{{ coin.name }}</h2></li>
    <li>
      <p>Coins owned: {{ coin.amountOwned }}</p>
    </li>
    <li>
      <input v-model="transactionAmount" type="number">
    </li>
    <li>
      <button class="btn green" @click="buyCoins">BUY</button>
    </li>
    <li>
      <button class="btn red" @click="sellCoins">SELL</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "coinRow",
  data() {
    return {
      transactionAmount: Number,

    }
  },
  props: {
    coin: Object
  },
  emits:['sell']

  ,
  methods: {
    buyCoins() {
      this.$emit('amountNotValid', false)
      this.$store.commit('buy', {coin: this.coin, transactionAmount: this.transactionAmount})
    },
    sellCoins()
    {
      if((this.transactionAmount > this.coin.amountOwned))
        this.$emit('amountNotValid',true)
      else {
        this.$store.commit('sell', {coin: this.coin, transactionAmount: this.transactionAmount});
        this.$emit('amountNotValid', false)
      }
    }
  },


}
</script>

<style scoped>
.coinRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  list-style: none;
}

.coinRow li {
  width: calc(100% / 6);
  text-align: left;
}


.coinRow li img {
  width: 80px;
}

.coinRow .btn {
  padding: 10px;
  border: solid gray 2px;

}

.coinRow .green {
  background-color: green;
  color: white;
}

.coinRow .red {
  background-color: darkred;
  color: white;
}


</style>