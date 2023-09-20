<template lang="">
    <div class="login">
        <h1 class="login__title">Login</h1>
        <ErrorText :error="error" v-if="showError"></ErrorText>
        <Form @inputChange="showOtp = false" @submitted="submitForm" :showOtp="showOtp"></Form>
    </div>
</template>

<script lang="ts">
import {AxiosError} from 'axios'
import login from '../services/login.service'
import Button from '../components/Button.vue'
import Form from '../components/Form.vue'
import ErrorText from '../components/ErrorText.vue'
import FormValue from '../interface/'

const OTP_MESSAGE = "otp required";
const SUCCESS = "success";

export default {
    name: 'Login',
    data() {
        return {
            showOtp: false,
            error: '',
            showError: false
        }
    },
    components: {
        Button,
        Form,
        ErrorText
    },
    methods: {
        async submitForm(formData: FormValue) {
            try {
                const response = await login(formData);
                if (response.data.message === OTP_MESSAGE) {
                    this.showOtp = true
                } else if (response.data.message === SUCCESS) {
                    window.localStorage.setItem('token', response.data.token)
                    this.$router.push('/')
                }
            } catch (error: AxiosError) {
                this.error = error.message
                
                this.showError = true
                setTimeout(() => {
                    this.showError = false
                }, 3000);
            }
        }
    }
}

</script>
<style lang="css" scoped>
.login {
    text-align: center;
    padding: 2rem 1rem 0rem 1rem;
}

.login__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-transform: uppercase;
}
</style>