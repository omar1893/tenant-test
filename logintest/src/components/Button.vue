<template>
    <button @click="click()" class="button" type="button">{{text}}</button>
</template>
<script lang="ts">
export default {
    props: ['text'],
    methods: {
        click() {
            this.$emit('clicked')
        }
    }
}
</script>
<style lang="css">
.button {
    height: 2.8rem;
    border: 1px solid #8f96a3;
    border-radius: 0.3rem;
    margin-top: 2rem;
    background-color: #374df4;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;
}
</style>