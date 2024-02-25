<script>

import { store } from '../store';
import MovieElement from './MovieElement.vue';

export default {
    name: 'MovieList',
    data() {
        return {
            store
        }
    },
    components: { MovieElement }
}
</script>

<template>
    <span class="title" v-if="store.movies.length > 0">Movies</span>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-bind:class="store.noImage(movie)" v-for=" movie  in store.movies">
            <MovieElement :movie="movie"></MovieElement>
        </div>
    </div>
</template>


<style scoped></style>