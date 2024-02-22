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
        store.getMovieUrl(store.trending_movies_url)
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div v-if="store.films.length === 0">Nessun risultato trovato</div>
            <div class="trending" v-if="store.films.length > 0">
                Film
            </div>
            <div class="row">
                <div class="col-3" v-for=" film  in   store.films  ">
                    <h3>{{ film.title }}</h3>
                    <span><em>{{ film.original_title }}</em></span>
                    <div class="flag">
                        <span
                            :class="[store.flag_base + film.original_language, { 'flag-icon-gb': film.original_language === 'en' }]"></span>
                    </div>
                    <span class="d-block">{{ film.vote_average }}</span>
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
.trending {
    padding: 1rem 0;
    font-weight: bold;
}

.col-3 {
    height: 200px;
    text-align: center;
    border: 1px solid var(--bool-primary);

    & .flag>span {
        text-align: center;
    }
}
</style>