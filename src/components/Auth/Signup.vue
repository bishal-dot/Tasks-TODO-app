<script setup>

let emits = defineEmits(['login']);

</script>

<template>
    <section class="wrapper">
        <div class="loginImageSection">
            <img src="./../../images/signupImage.svg" alt="">
        </div>
        <div class="loginSection">
            <h1>Sign up</h1>
            <p></p>
            <div class="i_field">
                <label >Username</label>
                <input type="text" name="" id="" placeholder="Username">
            </div>
            <div class="i_field">
                <label >Email</label>
                <input type="email" placeholder="Email">
            </div>
            <div class="i_field">
                <label for="">Password</label>
                <input type="password" name="" id="" placeholder="Password">
            </div>
            <div class="i_field">
                <label for="">Confirm password</label>
                <input type="password" name="" id="" placeholder="Confirm password">
            </div>
            <div class="i_btn">
                <button @click="emits('login')">Create an account</button>
            </div>
            <div class="sup_action">
                <p>Already have an account?</p>
                <a href="#" @click="emits('login')">Sign In</a>
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
        font-size: 10pt;
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
        font-size: 11pt;
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