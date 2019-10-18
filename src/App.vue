<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>{{message}}</h2>
    <CheeseList v-for="cheese in cheeses" :cheese="cheese"/>
  </div>
</template>

<script>
import axios from 'axios'
import CheeseList from './components/CheeseList.vue'


export default {
  name: 'app',
  components: { CheeseList },
  data: function () {
    return {
      message: 'All cheeses known to man',
      cheeses: []
    }
  },
  created: function () {
    axios.get('http://cheesebored.herokuapp.com/cheeses')
      .then(res => {
        this.cheeses = res.data
        console.log(this.cheeses)
      })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
