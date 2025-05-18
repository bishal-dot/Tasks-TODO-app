<script setup>
import { useTodoStore } from '@/stores/Task';


const theme = () => {
    document.body.classList.toggle('dark-mode');
}

const TaskStore = useTodoStore();
</script>

<template>
    <div class="heading">
        <h1>My Tasks</h1>
        <div class="actions">
            <img src="./../images/darktheme.svg" alt="theme" @click="theme">
            <img src="./../images/add.svg" @click="TaskStore.ShowInputBox = true">
        </div>
    </div>
</template>