<template>
<button v-bind:style="{backgroundColor: backgrColor}" >{{index}}</button>
</template>

<script>
export default {
  name: "CompButton",
  props:{
    index: String,
    backgrColor: String
  }
}
</script>

<style scoped>

</style>