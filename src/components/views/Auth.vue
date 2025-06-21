<script setup>
import { onMounted, ref } from 'vue';

import Login from '../Auth/Login.vue';
import Signup from '../Auth/Signup.vue';
import { useRouter } from 'vue-router';

let LoginPage = ref(true);
let router = useRouter();

const ShowSignupPage = () => {
    LoginPage.value = false;
}

</script>

<template>
    <Login v-if="LoginPage" @signup="LoginPage = false" />
    <Signup v-else @login="LoginPage = true" />
</template>