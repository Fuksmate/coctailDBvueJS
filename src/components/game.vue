<template>
  <div>
    <div class="bc">
      <input name="search" placeholder="Ingredient" v-model='searchValue' @input='Handle' />

    </div>
   
      <div v-if='searchValue.length > 2' class="description">
        {{result}}
      </div>

    <HelloWorld />
  </div>
</template>

<script>
  import axios from 'axios';
  import HelloWorld from '@/components/HelloWorld'

  var dataApi;
  const API = 'https://www.thecocktaildb.com/api/json/v1/1/';

  export default {
    name: 'game',
    data() {
      return {
        searchValue: " ",
        result: "",
      };
    },
    methods: {
      Handle() {
        axios.get(API + 'search.php?i=' + this.searchValue)
          .then(function (response) {
            dataApi = response.data.ingredients[0].strDescription;
          })
          .catch(function (error) {
            console.log(error);
          });
        this.result = dataApi;
      },
    },
    components: {
      HelloWorld,
    },
  }

</script>

<style scoped>
  .bc {
    width: 25vh;
    height: 14vh;
    margin: 0 auto;
    position: relative;
  }

  input {
    text-align: center;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid black;
    margin-top: 20%;
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 0);
  }

  input:focus {
    outline: none;
  }

  .description {
    width: 40vh;
    font-size: 20px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid black;
    transition: 1s;
    margin-bottom: 8vh;
  }

</style>
