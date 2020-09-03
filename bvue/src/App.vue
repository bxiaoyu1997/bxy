<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="nav">
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
 * {
	margin: 0;
	padding: 0;   
}
html{
		height: 100%;
		background-color: #f4f8fb;
	}
body {
  max-width: 100%;
	background-color: #f4f8fb;
	font-size: 1rem;
  background-image: linear-gradient(to top right, #FFF , #ffd3ec);
  min-height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
