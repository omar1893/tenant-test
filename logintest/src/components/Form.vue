<template lang="">
    <form class="login__form">
            <label class="login__form--label" for="username">Username</label>
            <input @keydown="check" class="login__form--input" name="username" type="text" ref="username">

            <label class="login__form--label" for="password">Password</label>
            <input @keydown="check" class="login__form--input" name="password" type="password" ref="password">
            
            <label class="login__form--label" for="code" v-if="showOtp">Code</label>
            <input class="login__form--input" name="code" type="text" ref="code" v-if="showOtp">

            <Button text="Login" @clicked="submitForm"></Button>
        </form>
</template>

<script lang="ts">
import Button from './Button.vue'

export default {
    components: { Button },
    props: ['showOtp'],
    methods: {
        check() {
            if(this.showOtp) {
                this.$emit('inputChange')
            }
        },
        submitForm() {
            const { value: username } = this.$refs.username as HTMLInputElement
            const { value: password } = this.$refs.password as HTMLInputElement
            let otp = null;
            if (this.showOtp) {
                const { value } = this.$refs.code as HTMLInputElement
                otp = value
            }

            this.$emit('submitted', { username, password, otp })
        }
    },
}
</script>

<style lang="css">
.login__form {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
}

.login__form--label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #8f96a3;
}

.login__form--input {
    height: 2.8rem;
    border: 1px solid #8f96a3;
    border-radius: 0.3rem;
    margin-bottom: 1rem;
}
</style>