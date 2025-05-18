<script setup>

import { onMounted, ref, useTemplateRef } from 'vue';

// toast notification
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


    // const TaskStore = useTodoStore();

    const props = defineProps({
        task: {
            type : Object,
            default: {}
        }
    });

    const emit = defineEmits(['edit','hide']);

    let title = props.task.title;

    const TitleError = ref(false);


    const EditTask = () => {
        // validation
        if(title.length < 5 ){
         TitleError.value = true;
         const toast = useToast();
            toast.error('Error Credentaials',{
            position: 'top'
        });
        }  
        else TitleError.value = false;

        // returns if there is error 
        if(TitleError.value) return; 

        if(!TitleError.value){
            let CurrentTask ={
                id: props.task.id,
                title: title
            };
            emit('edit', CurrentTask);
        }
        
    }


</script>


<template>
    <div class="editBox">
        <span>
            <h6>Edit Task</h6>
            <img src="./../images/close.svg" alt="close" @click="emit('hide')">
        </span>
            <input type="text"  v-model="title">
            <div v-if="TitleError" class="error">Title must be at least 5 character long.</div>
        <div class="action">
            <button @click="emit('hide')">Cancel</button>
            <button @click="EditTask">Confirm</button>
        </div>
    </div>
    <div class="overlay"></div>
</template>