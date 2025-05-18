<script setup>

import { useTodoStore } from '@/stores/Task';


const TaskStore = useTodoStore();

// props
const props = defineProps({
    task: {
        type: Object,
        default: {}
    }
});

const emit = defineEmits(['delete','edit']);

    

</script>

<template>
    <li :class="[task.completed ? 'completed' : '', task.edit ? 'edit' : '']" v-if="!task.matched">
        <div class="radio" @click="task.completed = !task.completed"></div>
        <div class="content" v-if="!task.edit">
            <p>{{ task.title }}</p>
        </div>
        <div class="actions">
            <img @click="emit('edit',task)" src="./../images/edit.svg" >
            <img @click="emit('delete', task)" src="./../images/delete.svg" >
        </div>
    </li>
</template>