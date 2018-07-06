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
            const inputs = document.querySelectorAll('input')
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].type == 'text') {
                    inputs[i].value = ''
                    console.log(inputs[i].value)
                }
            }
        }
    }
}
</script>

<style scoped>

</style>