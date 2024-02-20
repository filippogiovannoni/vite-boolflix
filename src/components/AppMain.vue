<script>

import { store } from '../store.js'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    mounted() {
        store.getMovieUrl(store.base_api_movie_url)
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="digit" v-if="store.searching && store.films.length === 0">
                <span>Digita il titolo di un film in alto a destra e premi il bottone</span>
            </div>
            <div class="row" v-if="store.searching">
                <div class="col-3" v-for=" film  in  store.films ">
                    <h3>{{ film.title }}</h3>
                    <span><em>{{ film.original_title }}</em></span>
                    <span class="d-block">{{ film.original_language }}</span>
                    <span class="d-block">{{ film.vote_average }}</span>
                </div>
            </div>
            <div v-if="!store.searching && store.films.length === 0">
                nessun risultato
            </div>
        </div>
    </main>
</template>


<style scoped>
.digit {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;

    & span {
        font-size: 1.5rem;
        font-weight: bold;
    }
}

.col-3 {
    height: 200px;
    text-align: center;
    border: 1px solid var(--bool-primary);
}
</style>