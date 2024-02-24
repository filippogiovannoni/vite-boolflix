<script>

import { store } from '../store.js'
import MovieElement from './MovieElement.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        };
    },
    mounted() {
        store.getMovieUrl(store.trending_movies_url);
    },
    methods: {
        noImage(content) {
            return content.poster_path === null && content.backdrop_path === null ? 'd-none' : 'd-block';
        }
    },
    components: { MovieElement }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="not-found" v-if="store.movies.length === 0 && store.tvSeries.length === 0">Nessun risultato trovato
            </div>
            <span class="title" v-if="store.movies.length > 0">Movies</span>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-bind:class="noImage(movie)"
                    v-for=" movie  in store.movies">
                    <MovieElement :movie="movie"></MovieElement>
                </div>
            </div>
            <span class="title" v-if="store.tvSeries.length > 0">Tv Series</span>
            <div class="row" v-if="store.tvSeries.length > 0">
                <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-bind:class="noImage(tv)"
                    v-for=" tv  in     store.tvSeries    ">
                    <div class="card">
                        <div class="image">
                            <img :src="getImage(tv)" alt="tv_image">
                        </div>
                        <div class="card-info">
                            <h3>Titolo Serie Tv: {{ tv.name }}</h3>
                            <span :class="hideTitle(tv)">Titolo originale: {{ tv.original_name }}</span>
                            <p :class="getOverview(tv)">Overview: {{ tv.overview }}</p>
                            <div class="flag">
                                <span>Lingua:</span><span :class="getFlag(tv)"></span>
                            </div>
                            <div class="rating">
                                <span>Voto: </span><i class="fa-solid fa-star"
                                    v-for="  star   in   starVote(tv.vote_average)  " :key="star"
                                    style="color: #FFD43B;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
main {
    margin-top: 7rem;
}

.col-12 {
    text-align: center;
}

.not-found {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bo;
}

.title {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>