<script>

import { store } from '../store.js'
import MovieElement from './MovieElement.vue'
import MovieList from './MovieList.vue';
import TvElement from './TvElement.vue';

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
    components: { MovieElement, TvElement, MovieList }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="not-found" v-if="store.movies.length === 0 && store.tvSeries.length === 0">Nessun risultato trovato
            </div>
            <span class="title" v-if="store.movies.length > 0">Movies</span>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-bind:class="store.noImage(movie)"
                    v-for=" movie  in store.movies">
                    <MovieElement :movie="movie"></MovieElement>
                </div>
            </div>
            <MovieList></MovieList>
        </div>
    </main>
</template>


<style scoped>
main {
    margin-top: 7rem;
}

.not-found {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bo;
}
</style>