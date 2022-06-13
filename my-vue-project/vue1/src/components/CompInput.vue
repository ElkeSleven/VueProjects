<template>
  <input id='{{inpId}}' type="number" class="coin__toSell" oninput="this.value = this.value.replace(/[^0-9.]/, '').replace(/(\..*)\./);"/>
</template>

<script>
export default {
  name: "CompInput",
  props: {
    inpId: String
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.coin__toSell{
  height: 2rem;

}
</style>