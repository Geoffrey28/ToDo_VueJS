<template>
    <div id="app">
        <h2>My App</h2>
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