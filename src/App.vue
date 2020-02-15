<template>
  <div id="app">
 
    <game/>
 
    <h1 class="adam">Witaj {{user}} na mojej stronie o veu</h1>
  </div>
</template>

<script>
import game from '@/components/game'
export default {
  name: 'App',
  components : {
    game,
  },
  data(){
    return{
    user: "Alan"
  }
  }
}
</script>

<style scoped>
h1{
  font-size:18px;
  text-align: center;
}

</style>
  