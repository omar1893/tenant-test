<template lang="">
    <button @click="logout()" class="logoutButton">
        <LogoutIcon></LogoutIcon>
    </button>
</template>
<script lang="ts">
import LogoutIcon from './LogoutIcon.vue'

export default {
    data() {

    },
    components: {
        LogoutIcon
    },
    methods: {
        logout() {
            window.localStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
};
</script>
<style lang="css">
.logoutButton {
    background-color: #374df4;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 10%;
    bottom: 10%;
    cursor: pointer;
}
</style>