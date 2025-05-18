<script setup>

// local DB
import { SaveTasks } from '@/script/LocalDB';

// pinia import
import { useTodoStore } from '@/stores/Task';
import { onMounted, ref, useTemplateRef } from 'vue';

// toast notification
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const TaskStore = useTodoStore();

const emit = defineEmits(['hide']);

let Title = '';
let title = useTemplateRef('title');

// validation data
let TitleError= ref(false);

const AddTask = () => {
    // validation
    if(Title.length < 5 ) {
        TitleError.value = true;
        const toast = useToast();
        toast.error('Error Credentaials',{
            position: 'top'
        });
    }
    else TitleError.value = false;

    // returns if there is error 
    if(TitleError.value) return; 

    // create new task
    let newtask = {
        id: Math.floor(Math.random()*99999),
        title: Title,
        completed: false
        };
    TaskStore.TaskList.unshift(newtask);

    // save tasks
    SaveTasks(TaskStore.TaskList);

    // hide input box
    TaskStore.ShowInputBox = false;

    const toast = useToast();    
        toast.success('Task Added Succesfully!',{
            duration: 3000,
            position: 'top'
        })
};

// mount
onMounted(() => {
    title.value.focus();
});


</script>


<template>
    <div class="AddNewModal">
        <span>
            <p>New Task</p>
            <img src="./../../images/close.svg" alt="close" @click="emit('hide')">
        </span>
        <input type="text" ref="title" v-model="Title" placeholder="Title" >
        <div v-if="TitleError" class="error">Title must be at least 5 character long.</div>
        <div class="action">
            <button @click="emit('hide')">Cancel</button>
            <button @click="AddTask">Add Task</button>
        </div>
    </div>
    <div class="overlay"></div>
</template>