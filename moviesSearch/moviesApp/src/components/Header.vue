<template lang="">
    <header class="header">
        <img class="header_logo" src="../assets/te-logo-small.svg" alt="">
        <h2 class="header_title">Tenant Movies Search</h2>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="css">
.header {
    width: 100%;
    background-color: #363040;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header_logo {
    position: absolute;
    left: 2%;
}

.header_title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
}
</style>