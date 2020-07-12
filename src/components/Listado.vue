<template>

    <section v-if="huboerror">
        <div class="alert alert-danger" role="alert">    
            <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde.</p>
        </div>        
    </section>

    <section v-else>
        <div v-if="cargando">Cargando...</div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Título</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <th scope="row">{{todo.id}}</th>
                    <td>{{todo.userId}}</td>
                    <td>{{todo.title}}</td>
                    <td>{{todo.completed}}</td>
                </tr>
            </tbody>
        </table>
    </section>    
</template>

<script>
import axios from 'axios'

export default {
    name: 'listado',
    data() {
        return {
            todos:null,
            cargando: true,
            huboerror: false,
            urlApi: 'https://jsonplaceholder.typicode.com/todos'
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
                    this.todos = response.data
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

<style>

</style>