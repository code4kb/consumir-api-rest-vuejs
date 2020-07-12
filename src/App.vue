<template>
  <div id="app">
    <div class="container">
      <div class="card">
        <h2 class="card-header font-weight-bold"><img alt="Vue logo" src="./assets/logo.png" class="imagen"> Consumir servicio API REST - Vue.js</h2>
        <div class="card-body">
          <h5 class="card-title">Ejemplo sobre como consumir y mostrar datos desde un API REST a través de Vue.js y Axios.js.</h5>
        </div>
      </div><br />
      <Listado />
    </div>
  </div>
</template>

<script>
import Listado from './components/Listado.vue';

export default {
  name: 'App',
  components: {
    Listado
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.imagen {
  max-width:64px;
  max-height:64px;
  width:auto;
  height:auto;
}
</style>