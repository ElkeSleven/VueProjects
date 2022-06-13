<template>
  <img alt="" class="logo-school" src='../assets/logo_pxl_hogeschool.png'/>  <!--   <img alt="" class="logo-school" :src='logoPXL'/>-->
<div class="wallet">
  <div class="coinRow" v-for="c in wallet">
    <img class="coin__img" src='../assets/btc.jpg' alt="img ">  <!--   <img v-bind:src='"../assets"+c.logoPath' alt="img "> -->
    <div class="coin__name">{{c.name}}</div>
    <div class="coin__amountOwned"> Coins owned: {{c.amountOwned}}</div>
    <CompInput :inpId=c.code />
    <CompButton :btnId= c.code />
  </div>
</div>




</template>

<script>
import CompButton from "@/components/CompButton";
import CompInput from "@/components/CompInput";
export default {
  name: "CompWallet",
  components:{
    CompInput,
    CompButton
  },
  data(){    //Lange versie:  data: function (){
    return{
      logoPXL : '../assets/logo_pxl_hogeschool.png',
      wallet: [
        {code: 'BTC', name: 'Bitcoin', amountOwned: 1.2, logoPath: '/btc.jpg'},
        {code: 'ETH', name: 'Ethereum', amountOwned: 16, logoPath: '/eth.png'},
        {code: 'DOGE', name: 'DogeCoin', amountOwned: 42069, logoPath: '/doge.png'},
        {code: 'LINK', name: 'Chainlink', amountOwned: 999, logoPath: '/link.png'},
      ]
    }
  },
  computed:{
    computedImgSours(){
      return "../assets"+ this.wallet.logoPath
    }
  },

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wallet{
  margin: 5rem 0 0 0;
}

.coinRow{
  display: grid;
  grid-template-columns: repeat(1 ,max-content 1fr 2fr max-content max-content max-content);
  gap: .5rem;

}
.logo-school{
  width: 15rem;
}

.coin__img{
  max-height: 50%;
  transform: translateY(-45%);
}
</style>