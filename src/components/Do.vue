<template>
    <transition name="fade">
        <tbody>
            <tr class="item" v-for="(task, index) in tasks" v-if="task.done === true" v-bind:key="task.name">
                <td>{{ index }}</td>
                <td>{{ task.name }}</td>
                <td>{{ task.desc }}</td>
                <td><input checked type="checkbox" @change="$emit('taskchange', task)"></td>
                <td><button @click="$emit('deletetask', task)" type="button">X</button></td>
            </tr>
        </tbody>
    </transition>
</template>

<script>
import { Appdata } from '../index'
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