<template lang="">
    <div class="search">
        <div class="search_form">
            <input class="search_input" type="text" v-model="search">
            <button :disabled="invalid" @click="searchMovies" class="search_button" type="button">
                Search
            </button>
        </div>
        <p v-if="listLength > 0">Movies found: <span class="lengthCounter">{{listLength}}</span></p>
    </div>
</template>

<script lang="ts">
export default {
    name: "Search",
    props: ['listLength'],
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchMovies() {
            this.$emit('search', this.search)
        }
    },
    computed:{
        invalid(){
            return this.search.length <= 2
        }
    },
    mounted() {
        const lastSearch = localStorage.getItem('lastSearch');
        if(lastSearch) {
            this.search = lastSearch
        }
    }
}
</script>

<style lang="css">
.search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    width: fit-content;
    margin: 2rem auto;
}

.search_input {
    margin-right: 1rem;
    height: 1.6rem;
    width: 20%;
    min-width: 200px;
}

.search_button {
    outline: none;
    border: none;
    background-color: #374df4;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 0.3rem;
    padding: 0.4rem 1rem;
}

.search_button:disabled {
    background-color: #878787;
}

.lengthCounter {
    font-weight: bold;
}
</style>