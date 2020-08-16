<template>
  <div id="app">
    <!-- Shared Navbar -->
    <header>
        <Navbar/>
    </header>
    <!-- Entry point page -->
    <main role="main">
        <router-view></router-view>
    </main>
    <!-- TODO: Implement footer-->
  </div>

</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  padding: 0px;
}
.links{
	padding:0px;
	margin:0px;
}
</style>
