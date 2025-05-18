<script setup lang="ts">
import { useTodoStore } from '@/stores/Task';
import TaskCard from './TaskCard.vue';
import { ref } from 'vue';

const TaskStore = useTodoStore();
let ShowModal = ref(false);
let SelectedTask = ref(null);





</script>

<template>
    <div class="taskLists">
        <span>
            <p>{{ TaskStore.TaskList.filter(task => !task.completed).length }} tasks left</p>
        </span>
        <div class="line"></div>
        <ul>
            <TaskCard v-for="task in TaskStore.TaskList" :key="task.id"
                                    :task="task"
                                    @delete="$emit('delete',task)"
                                    @edit="$emit('edit',task)"        
                            />
        </ul>
    </div>
</template>