<script setup>

    const props = defineProps({
        task: {
            type: Object,
            default: {}
        }
    });

    const emit  = defineEmits(['hide','delete'])

</script>



<template>
    <div class="deleteBox">
        <span>
            <h6>Delete</h6>
            <img src="./../images/close.svg" @click="emit('hide')">
        </span>
        <p>Are you sure you want to delete `{{ task.title }}` ?</p>
        <div class="action">
            <button @click="emit('hide')">Cancel</button>
            <button @click="emit('delete')">Delete</button>
        </div>
    </div>
    <div class="overlay"></div>
</template>