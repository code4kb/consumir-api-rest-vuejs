<template>
    <section v-if="huboerror">
        <div class="alert alert-danger" role="alert">    
            <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde.</p>
        </div>        
    </section>

    <section v-else>
        <div v-if="cargando" class="spinner">
            Loading...
        </div>

        <table class="table table-hover striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Título</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="todo in todos"
                    :key="todo.id"
                >
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
            this.cargando = true //the loading begin
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

<style scoped>
.spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    height:160px;
    width:160px;
    margin:0px auto;
    -webkit-animation: rotation .6s infinite linear;
    -moz-animation: rotation .6s infinite linear;
    -o-animation: rotation .6s infinite linear;
    animation: rotation .6s infinite linear;
    border-left:6px solid rgba(0,174,239,.15);
    border-right:6px solid rgba(0,174,239,.15);
    border-bottom:6px solid rgba(0,174,239,.15);
    border-top:6px solid rgba(0,174,239,.8);
    border-radius:100%;
}

@-webkit-keyframes rotation {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(359deg);}
}
@-moz-keyframes rotation {
    from {-moz-transform: rotate(0deg);}
    to {-moz-transform: rotate(359deg);}
}
@-o-keyframes rotation {
    from {-o-transform: rotate(0deg);}
    to {-o-transform: rotate(359deg);}
}
</style>