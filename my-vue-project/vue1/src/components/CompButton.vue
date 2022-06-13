<template>
  <button @click="onclick(i.index, btnId)" :style="{background: i.color}" class="button" v-for="i in sort" >{{i.index}}</button>
</template>

<script>

export default {
  name: "CompButton",
  props: {
    btnId: String
  },
  data(){
    return{
      sort:[
        {index: 'Buy' , color:"green"},
        {index: 'Sell', color: 'red'},
      ]
    }
  },
  methods:{
    onclick(taget){
      if(taget === 'Sell'){
        alert(taget)
      }
      else {
        alert(taget)
      }
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
.button{
  max-height: 2rem;
  color: white;
  width: 3.5rem;
}

</style>