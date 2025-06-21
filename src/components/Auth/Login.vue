<script setup>
import { useRouter } from 'vue-router';


let emits = defineEmits(['signup']);
let router = useRouter();

const UserLogin = () => {
    router.push({ path: '/'});
}

</script>
<template>
    <section class="wrapper">
        <div class="loginImageSection">
            <img src="./../../images/loginImage.svg" alt="">
        </div>
        <div class="loginSection">
            <h1>welcome back</h1>
            <p></p>
            <div class="i_field">
                <label >Username / Email</label>
                <input type="text" name="" id="" placeholder="Username / Email">
            </div>
            <div class="i_field">
                <label for="">Password</label>
                <input type="password" name="" id="" placeholder="Password">
            </div>
            <div class="i_actions">
                <div class="c_rmbrme">
                    <input type="checkbox" name="" id="">
                    <p>Remember Me</p>
                </div>
                <p>Forgot Password?</p>
            </div>
            <div class="i_btn">
                <button @click="UserLogin">Login</button>
            </div>
            <div class="sup_action">
                <p>Don't have an account?</p>
                <a href="#" @click="emits('signup')">Sign Up</a>
            </div>
            <div class="policy">
                <p>This site is protected by reCAPTCHA and the Google</p>
                <p><a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply</p>
            </div>
        </div>
    </section>
</template>
<style scoped>
    section{
        display: flex;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: 20px;
        background-color: rgb(214, 239, 247);
        justify-content: space-between;
        padding: 20px;
        box-shadow: 0px 0px 8px 0px lightblue;
    }
    .loginImageSection{
        width: 300px;
    }
    .loginImageSection img{
        width: 100%;
        height: 100%;
    }
    .loginSection{
        width: 280px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 20px;
    }
    .loginSection h1{
        text-align: center;
        font-size: 20pt;
        color: var(--primary);
        text-transform: capitalize;
    }
    .loginSection .i_field{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        gap: 5px;
    }
    .loginSection .i_field label{
        font-size: 11.5pt;
    }
    .loginSection .i_field input{
        width: 94%;
        padding: 8px 8px;
        border-radius: 10px;
        border: 1px solid black;
        background-color: var(--site-background);
        font-size: 11pt;
    }
    .loginSection .i_actions{
        display: flex;
        justify-content: space-between;
    }
    .loginSection .i_actions p{
        font-size: 11pt;
    }
    .loginSection .i_actions .c_rmbrme{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .i_btn{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .i_btn button{
        width: 100%;
        padding: 8px 12px;
        border-radius: 10px;
        border: none;
        background-color: black;
        color: white;
        font-size: 12pt;
        cursor: pointer;
    }
    .i_btn button:hover{
        background-color: var(--primary);
        color: white;
        border: none;
    }
    .sup_action{
        display: flex;  
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .sup_action p, a{
        font-size: 11pt;
     }
     .sup_action a:hover{
        color: var(--primary);
     }
     .policy{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     }
     .policy p, .policy a{
        font-size: 8pt;
     }
</style>