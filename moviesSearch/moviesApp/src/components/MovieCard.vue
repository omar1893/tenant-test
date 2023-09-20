<template lang="">
    <div class="movieCard" @click="selectMovie(movie.imdbID)">
                <h2 class="movieCard--title">{{ movie.Title }}</h2>
                <span class="movieCard--year">{{movie.Year}}</span>
                <img class="movieCard--img" :src="movie.Poster" alt="">
            </div>
</template>

<script lang="ts">
export default {
    props: ['movie'],
    methods: {
        selectMovie(movieID: string) {
            this.$router.push({ path: `/detail/${movieID}` })
        }
    }
}
</script>
<style lang="css">
.movieCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;
}

.movieCard:hover {
    transform: scale(1.1);
}

.movieCard--img {
    width: 100%;
    height: 100%;
    max-height: 500px;
}

.movieCard--title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
}

.movieCard--year {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
}
</style>