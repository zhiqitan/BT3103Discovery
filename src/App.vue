<template>
  <div id="app">
    <header>
    <h1>Zhi Qi's Zi Char</h1>
    </header>
    <nav>
      <ul id="navigate">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/orders" exact>Orders</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c33bd;
  margin-top: 60px;
}

h1 {
  background-color: aqua;
  font-size: 40px;
  padding: 30px;

}
#navigate {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

</style>
 