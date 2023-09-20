<template lang="">
    <button class="backButton" @click="goBack">Go back</button>
    <div class="movieContainer">
        <img :src="movieDetail.Poster" alt="">
        <div class="movieContainer_info">
            <h3 class="movieContainer_info--title">{{movieDetail.Title}}</h3>
            <span class="movieContainer_info--year">{{movieDetail.Year}}</span>
            <p class="movieContainer_subtitle">Plot</p>
            <span class="movieContainer_info--plot">{{movieDetail.Plot}}</span>
            <p class="movieContainer_subtitle">Genre</p>
            <span class="movieContainer_info--genre">{{movieDetail.Genre}}</span>
            <p class="movieContainer_subtitle">Director</p>
            <span class="movieContainer_info--director">{{movieDetail.Director}}</span>
            <p class="movieContainer_subtitle">Runtime</p>
            <span class="movieContainer_info--runtime">{{movieDetail.Runtime}}</span>
            <p class="movieContainer_subtitle">Ratings</p>
            <div class="movieContainer_info--ratings">
                <ul>
                    <li v-for="rating in movieDetail.Ratings">{{rating.Source}}: {{rating.Value}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import getMovieDetail from '../services/MovieDetail.service'
export default {
    data() {
        return {
            movieId: '',
            movieDetail: {}
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    },
    beforeRouteEnter(to, _from, next) {
        const param = to.params.id;

        next(vm => {
            vm.movieId = param;
        });
    },
    async mounted() {
        try {
            const response = await getMovieDetail(this.movieId)
            this.movieDetail = response.data
        } catch (error) {
            console.error(error)
        }

    }
}
</script>
<style lang="css">
.movieContainer {
    display: flex;
    margin-top: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.movieContainer_info {
    margin-left: 2rem;
}

.movieContainer_info--title {
    font-size: 1.5rem;
}

.movieContainer_info--year {
    font-size: 1.2rem;
}

.movieContainer_info--plot {
    font-size: 1.1rem;
}

.movieContainer_info--ratings ul {
    list-style: none;
    padding: 0;
}

.movieContainer_subtitle {
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}

@media (max-width: 1024px) {
    .listContainer {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (max-width: 566px) {
    .movieContainer {
        flex-direction: column;
    }

    .movieContainer_info {
        margin-left: 0;
    }

}

.backButton {
    outline: none;
    border: none;
    background-color: #374df4;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 0.3rem;
    padding: 0.4rem 1rem;
    margin-left: 1.5rem;
    margin-top: 1.5rem;
}
</style>