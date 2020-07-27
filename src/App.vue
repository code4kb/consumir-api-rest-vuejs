<template>
  <div id="app">
    <div class="container small">
      <div class="row">
        <div class="col-12">
          <div class="box">
            <h5><img src="https://vuejs.org/images/logo.png" alt="vue logo" class="imagen" >Consumir API REST</h5>
            <p>Ejemplo sobre como consumir y mostrar datos desde un API REST a través de Vue.js, utilizando Axios.js.</p>			
          </div><br>
          <div class="card">
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding: 15px;
}
.box {
	background-color: #f8f8f8;
	border-left: 4px solid #41B883;
	padding: 12px;
	margin-bottom: 15px;
}
.space {
	padding: 30px;
}
.imagen {
    vertical-align: middle;
    margin-right: 5px;
	max-width:32px;
	max-height:32px;
	width:auto;
	height:auto;	
}
.small {
  max-width: 720px;
}
</style>