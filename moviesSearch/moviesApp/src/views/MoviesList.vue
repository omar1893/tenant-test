<template lang="">
    <div>
        <Search @search="searchMovies" :listLength="movies.length"></Search>
        <div class="listContainer">
            <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie"></MovieCard>
        </div>
    </div>
</template>

<script lang="ts">
import Search from '../components/Search.vue'
import MovieCard from '../components/MovieCard.vue'
import getList from '../services/MoviesList.service'
export default {
    data() {
        return {
            movies: []
        }
    },
    components: {
        Search,
        MovieCard

    },
    methods: {
        async searchMovies(inputSearch: string) {
            try {
                const response = await getList(inputSearch)
                this.movies = response.data.Search.sort((prevMovie, currentMovie) => currentMovie.Year - prevMovie.Year)
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        const previousList = localStorage.getItem('previousList');
        if (previousList) {
            this.movies = JSON.parse(previousList).sort((prevMovie, currentMovie) => currentMovie.Year - prevMovie.Year)
        }
    }
}
</script>
<style lang="css">
.listContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    column-gap: 2rem;
    row-gap: 2rem;
}

@media (max-width: 1024px) {
    .listContainer {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (max-width: 425px) {
    .listContainer {
        grid-template-columns: repeat(1, 1fr);
    }

}
</style>