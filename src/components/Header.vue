<script setup>
import { useTodoStore } from '@/stores/Task';

import { ref } from 'vue';

const isDarkMode = ref(false);

const theme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.value);
};

if(localStorage.getItem('darkMode') === 'true'){
    isDarkMode.value = true;
    document.body.classList.add('dark-mode');
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