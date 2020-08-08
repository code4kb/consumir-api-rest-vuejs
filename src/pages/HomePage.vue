<template>
    <div>
        <!-- Header section -->
        <section class="text-left">
            <div class="container">
                <div class="row contacts">
                <div class="col-md-12">
                    <h1>💼 Contacts</h1>
                </div>
                </div>
            </div>
        </section>
        <!-- Content section -->
        <section>
            <div class="container">
                <div class="row">
                    <!-- Sidebar -->
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
                    <!-- Component Vue List -->
                    <div class="col-md-9">
                        <Listado v-bind:users="users" 
                        v-bind:huboerror="huboerror" 
                        v-bind:cargando="cargando"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import settings from '../settings.json'
import Listado from '../components/Listado';

export default {
    name: 'homepage',
    components: {
        Listado
    },
    data() {
        // Initializing properties
        return {
            users:[],
            urlApi: `${settings.environments.prod.api.uri}/users`,
            huboerror: false,
            cargando: true
        }
    },
    mounted(){
        this.getAll();
    },
    methods: {
        getAll(){
            axios
                .get(this.urlApi)   
                .then(response => {
                    this.users = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.huboerror = true
                })
                .finally(() => this.cargando = false)
        }
    }
}
</script>

<style scoped>
.contacts {
	padding-top: 1rem;
	padding-bottom: 1rem;
}
.contacts h1 {
	padding-top: 1rem;
	padding-bottom: 1rem;
	border-bottom: 2px solid #F5F5F5;
}
</style>
