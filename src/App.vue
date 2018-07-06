<template>
    <div id="app">
        <h1>To do List</h1>
        <div class="container">
            <router-link to="/">All</router-link>
            <router-link to="/Do">Do</router-link>
            <router-link to="/Todo">To do</router-link>
        </div>
        <List></List>
    </div>
</template>

<script>
import List from './components/List.vue'

export default {
    name: 'App',
    components: {
        'List': List
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
}
</style>
