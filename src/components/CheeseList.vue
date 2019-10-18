
<template>
  <article class="cheese">
    <h1>{{ cheese.name }}</h1>
    <p>{{ cheese.origin }}</p>
    <small>
      {{ shortTastingNotes }}...
      <a href="#">see more</a>
    </small>
    <br>
    <img :src="cheese.image" />
  </article>
</template>

<script>

export default {
  name: 'CheeseList',
  props: {
    cheese: Object
  },
  data: function () {
    return {
      shortTastingNotes: this.cheese.tastingNotes.slice(0,40)
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
article{
  border: 2px solid orange;
  margin: 5px;
  background: linear-gradient(45deg, orange, yellow);
}
img{
  width: 60px;
}
</style>
