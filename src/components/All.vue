<template>
    <tbody>
        <tr class="item" v-for="(task, index) in tasks" v-bind:key="index">
            <td>{{ index }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.desc }}</td>
            <td>
                <input v-if="task.done === true" checked type="checkbox" @change="$emit('taskchange', task)">
                <input class="check" v-else type="checkbox" @change="$emit('taskchange', task)">
            </td>
            <td><button class="destroy" @click="$emit('deletetask', task)" type="button">X</button></td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'Item',
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}
</script>