<template>
  <div id="app">
    <nav>
      <router-link to="/posts">Posts list</router-link>
      <router-link to="/add">Add post</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  font-size: 2rem;
}
</style>
