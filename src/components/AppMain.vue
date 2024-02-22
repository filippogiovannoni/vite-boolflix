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
            <div v-if="store.contents.length === 0">Nessun risultato trovato</div>
            <div class="trending" v-if="store.contents.length > 0">
                Film & Tv Series
            </div>
            <div class="row">
                <div class="col-3" v-for=" content  in   store.contents  ">
                    <h3>{{ content.title }}{{ content.name }}</h3>
                    <span><em>{{ content.original_title }}{{ content.original_name }}</em></span>
                    <div class="flag">
                        <span
                            :class="[store.flag_base + content.original_language, { 'flag-icon-gb': content.original_language === 'en' }]"></span>
                    </div>
                    <span class="d-block">{{ content.vote_average }}</span>
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