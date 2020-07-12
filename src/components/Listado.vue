<template>
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
    <tr>
        <th scope="row">1</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
</table>
</template>

<script>
//import axios from 'axios'

export default {
    name: 'listado',
    data() {
        return {
            all:null
        }
    },
    mounted(){
        console.log(" --- mounted() ---");
        this.getAll();
    },
    methods: {
        getAll(){
            console.log(" --- getAll() ---");
        }
    }
}
</script>

<style>

</style>