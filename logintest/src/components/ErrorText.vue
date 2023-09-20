<template lang="">
    <p class="errorText">{{error}}</p>
</template>

<script lang="ts">
export default {
    props: ['error']
}
</script>

<style lang="css">
    .errorText {
        color: #eb5149;
        text-transform: capitalize;
    }
</style>