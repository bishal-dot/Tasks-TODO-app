<script setup>

import { ref} from 'vue';

// pinia
import { useTodoStore } from '@/stores/Task';

// components
import EmptyTask from '../EmptyTask.vue';
import Header from '../Header.vue';
import SearchTask from '../SearchTask.vue';
import TaskLists from '../TaskLists.vue';
import AddNewTask from '../internalheader/AddNewTask.vue';
import DeleteModal from '../DeleteModal.vue';
import EditTaskModal from '../EditTaskModal.vue';

// local storage
import { SaveTasks } from '@/script/LocalDB';

// toast-notification
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


// pinia
const TaskStore = useTodoStore();

const ShowDeleteModal = ref(false);
let WantToDelete = ref({});
let WantToEdit= ref({});
const ShowEditModal = ref(false);

const ShowEditBox = (task) => {
    WantToEdit.value = task;
    ShowEditModal.value = true;
}

const ShowDeleteBox = (task) => {
    WantToDelete.value = task;
    ShowDeleteModal.value = true;
}

const DeleteTask = () => {
    // find index
    let index = TaskStore.TaskList.findIndex(element => {
        if(WantToDelete.value.id == element.id) return true;
    });

    // remove task
    TaskStore.TaskList.splice(index, 1);

    // update to local DB
    SaveTasks(TaskStore.TaskList);

    // hide delete modal
    ShowDeleteModal.value = false;

    // Show toast notification
    const toast = useToast();
    toast.success('Task Deleted',{
        position: 'top'
    });

};

const EditTask = (updatedTask) => {
    let index = TaskStore.TaskList.findIndex(element => {
        if(WantToEdit.value.id == element.id) return true;
    });

    // find index of the title to edit
    if(index !== 1){
        TaskStore.TaskList[index].title = updatedTask.title;
    }

    // update to local storage
    SaveTasks(TaskStore.TaskList);

    const toast = useToast();
    toast.success('Task Edited',{
        position: 'top'
    });

    // hide edit modal
    ShowEditModal.value = false;


}


</script>

<template>
    <div class="todoApp">
        <Header />

        <SearchTask/>

        <AddNewTask v-if="TaskStore.ShowInputBox" @hide="TaskStore.ShowInputBox = false"/>

        <TaskLists @delete="ShowDeleteBox"  @edit="ShowEditBox"/>

        <EditTaskModal v-if="ShowEditModal"
                        :task="WantToEdit"
                        @hide="ShowEditModal = false"
                        @edit="EditTask"/>

        <DeleteModal v-if="ShowDeleteModal"
                        :task="WantToDelete"
                        @hide="ShowDeleteModal = false"
                        @delete="DeleteTask" />

        <EmptyTask v-if="TaskStore.TaskList.length == 0"/>

    </div>
</template>