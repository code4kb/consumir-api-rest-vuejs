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

        <table class="table striped text-left mi-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="user in users"
                    :key="user.id"
                >
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>@{{user.username}}</td>
                    <td><a v-bind:href="'mailto:' + user.email">{{user.email}}</a></td>
                    <td>{{user.address.city}}</td>
                    <td>					
                        <a href="#" class="btn btn-light text-info" title="View profile">🔍</a>
                    </td>                    
                </tr>
            </tbody>
        </table>
        <h5 class="text-left total">Total contacts found: {{users.length}} </h5>           

    </section>
</template>

<script>
import axios from 'axios'
import settings from '../settings.json'

export default {
    name: 'listado',
    data() {
        return {
            users:null,
            cargando: true,
            huboerror: false,
            urlApi: `${settings.environments.prod.api.uri}/users`
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
.mi-table {
	border: 2px solid #FAFAFA;
    text-align: left;
}
.table-striped {
	border: 2px solid #FAFAFA;
}
.mi-table thead tr {
	color: #17A2B8;
	border: 2px solid #FAFAFA;
}
.mi-table>tbody>tr:nth-child(odd)>td,
.mi-table>tbody>tr:nth-child(odd)>th {
    background-color: #F9F9F9;
}
.total {
	border-top: 2px solid #F5F5F5;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 13px;
}
.spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    height:100px;
    width:100px;
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