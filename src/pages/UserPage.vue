<template>
    <div>
        <!-- Header section -->
        <section class="text-left">
            <div class="container">
                <div class="row contacts">
                <div class="col-md-12">
                    <h1>👤 {{ user.name }}</h1>
                </div>
                </div>
            </div>
        </section>
        <!-- Content section -->
        <section>
            <div class="container">
                <div class="row">
                    <!-- Item information -->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body text-left">
                                <p class="font-weight-bold">Username:<span class="font-weight-normal ml-2">{{ user.username }}</span></p>
                                <p class="font-weight-bold">Email:<span class="font-weight-normal ml-2">{{ user.email }}</span></p>
                                <p class="font-weight-bold">Phone:<span class="font-weight-normal ml-2">{{ user.phone }}</span></p>
                                <p class="font-weight-bold">Website:<span class="font-weight-normal ml-2">{{ user.website }}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'userpage',
    props: ['user']
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
