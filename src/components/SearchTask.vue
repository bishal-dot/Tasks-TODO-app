<script setup>

    import { ref } from 'vue';
    import { useTodoStore } from '@/stores/Task';

    const TaskStore = useTodoStore();

    let keyword = ref('');

    const SearchTask = () => {
        TaskStore.TaskList.map(element =>{
            let title = element.title.toLowerCase();
            let match = keyword.value.toLowerCase();

            if(title.includes(match)) element.matched = false;
            else element.matched = true;
        })
        
    };
</script>

<template>
    <div class="SearchTask">
        <img src="./../images/search.svg" @click="SearchTask">
        <input type="text" placeholder="Search in task" v-model="keyword" @keyup="SearchTask">
        <button @click="SearchTask" >Search</button>
    </div>
</template>