<template>
    <table class="table"> 
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Desc</th>
                <th>Do ?</th>
                <th>Delete</th> 
            </tr>
        </thead>
        <transition name="slide-fade">
            <router-view :tasks="tasks" @deletetask="onDeleteTask" @taskchange="onTaskChange"></router-view>
        </transition>
        <AddForm :tasks="tasks" @addtask="onAddTask"></AddForm>
    </table>
</template>

<script>
import AddForm from './AddForm.vue'
export default {
    name: 'List',
    components: {
        'AddForm': AddForm
    },

    data: () => {
        return {
            tasks: [
                { 
                    name: 'Azerty',
                    desc: 'rem sum',
                    done: true
                },
                { 
                    name: 'Azer',
                    desc: 'Lor Ips',
                    done: true
                },
                {
                    name: 'ty',
                    desc: 'Ipsum',
                    done: false
                },
                { 
                    name: 'zer', 
                    desc: 'Ipsum Lorem', 
                    done: false 
                },
                { 
                    name: 'erty', 
                    desc: 'Lorem', 
                    done: false 
                }
            ]
        }
    },
    methods: {
        onTaskChange(task) {
            task.done = !task.done
            return task
        },
        onDeleteTask(taskToRemove) {
            this.tasks = this.tasks.filter(task => task !== taskToRemove)
        },
        onAddTask(taskname, taskdesc) {
            if (taskname && taskdesc) {
                this.tasks.push({
                    name: taskname,
                    desc: taskdesc,
                    done: false
                })
            }
        }
    }
}
</script>

<style>
    tr {
        width: 100%;
    }
    .slide-fade-enter-active {
        transition: all 1s linear;
    }
    .slide-fade-leave-active {
        transition: all 1s linear;
    }
    .slide-fade-enter {
        transform: translateY(20%);
        opacity: 0;
    }
    .slide-fade-leave-to {
        transform: translateY(-40%);
        opacity: 0;
    }
</style>
