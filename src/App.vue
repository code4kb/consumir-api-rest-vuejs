<template>
  <div id="app">
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">Add some information about of site. Then, link them off to some social networking sites or contact information.</p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contact</h4>
              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Follow on Twitter</a></li>
                <li><a href="#" class="text-white">Like on Facebook</a></li>
                <li><a href="#" class="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong>🛠️ Vue.js + Axios</strong>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
  </header>    
  <main role="main">
    <section class="text-left">
      <div class="container">
        <div class="row contacts">
          <div class="col-md-12">
            <h1>💼 Contacts</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-header text-left">
              <h5>Actions</h5>
            </div>
            <div class="card-body text-left">
              <p class="card-text">
                <a href="#" class="btn btn-light text-info">➕ New Contact</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <!-- Component Vue List -->
              <Listado />
        </div>
      </div>
    </div>
  </main>
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
.contacts {
	padding-top: 1rem;
	padding-bottom: 1rem;
}
.contacts h1 {
	padding-top: 1rem;
	padding-bottom: 1rem;
	border-bottom: 2px solid #F5F5F5;
}
.links{
	padding:0px;
	margin:0px;
}
</style>