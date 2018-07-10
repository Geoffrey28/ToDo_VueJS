<template>
    <form @submit.prevent="$emit('addtask', inputname, inputdesc) + clearForm()">
        <label>Name :</label>
        <input v-model="inputname" class="form-control" type="text" placeholder="Task Name">
        <label>Description :</label>
        <input v-model="inputdesc" class="form-control" type="text" placeholder="Description">
        <button class="btn btn-primary" type="submit">+</button>
    </form>
</template>

<script>
export default {
    name: 'AddForm',
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },

    data: () => {
        return {
            inputname: '',
            inputdesc: ''
        }
    },
    
    methods: {
        clearForm() {
            this.inputname = ''
            this.inputdesc = ''
            console.log(this.inputname, this.inputdesc)
        }
    }
}
</script>

<style scoped>

</style>