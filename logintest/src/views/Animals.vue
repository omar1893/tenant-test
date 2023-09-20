<template lang="">
    <div class="animalContainer">
        <Button text="randon animal" @clicked="fetchAnimal"></Button>
        <span class="animalContainer__name">{{animalInfo.name}}</span>
        <img class="animalContainer__image" :src="animalInfo.img" alt="">
        <LogoutButton></LogoutButton>
    </div>
</template>

<script lang="ts">
import Button from '../components/Button.vue';
import LogoutButton from '../components/LogoutButton.vue';
import getAnimal from '../services/getAnimal.service'

export default {
    data() {
        return {
            animalInfo: {}
        }
    },
    methods: {
        async fetchAnimal() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    const response = await getAnimal(token);
                    this.animalInfo = response.data.animal
                } catch (error) {
                    console.error(error)
                }
            }
        },
    },
    components: {
        Button,
        LogoutButton
    },

}
</script>

<style lang="css">
.animalContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem 0rem 1rem;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
}

.animalContainer__name {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    text-transform: uppercase;
}

.animalContainer__image {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: -2px 10px 12px -10px rgba(0, 0, 0, 0.75);
}
</style>