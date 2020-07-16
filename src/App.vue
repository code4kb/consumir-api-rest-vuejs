<template>
  <div id="app">
    <div class="container">
      <div class="row">      
        <div class="col-xl-4">
          <div class="card bg-light">
            <h3 class="card-header font-weight-bold"><img alt="Vue logo" src="./assets/logo.png" class="imagen"> Vue.js + Axios.js</h3>
            <div class="card-body">
              <h5 class="card-title text-left">Ejemplo sobre como consumir y mostrar datos desde un API REST a través de Vue.js, utilizando Axios.js.
              </h5>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card">
              <div class="card-header">
                <h3 class="font-weight-bold"><img alt="Vue logo" src="./assets/logo.png" class="imagen"> Consumir servicio API REST - Vue.js</h3>

              </div>
              <div class="card-body">
                <Listado />
            </div> 
          </div>
          
        </div>
      </div>  
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
  max-width:32px;
  max-height:32px;
  width:auto;
  height:auto;
}
</style>