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
    },
    methods: {
        starVote(number) {
            return Math.round(number / 2)
        },
        getFlag(content) {
            return [store.flag_base + `${content.original_language === 'en' ? 'flag-icon-gb' : 'flag-icon-' + content.original_language}`]
        },
        getImage(content) {
            return store.base_img_url + content.poster_path
        }
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
                    <div class="image">
                        <img :src="getImage(content)" alt="">
                    </div>
                    <h3>{{ content.title }}{{ content.name }}</h3>
                    <span><em>{{ content.original_title }}{{ content.original_name }}</em></span>
                    <div class="flag">
                        <span :class="getFlag(content)"></span>
                    </div>
                    <div class="rating">
                        <i class="fa-solid fa-star" v-for="star in starVote(content.vote_average)" :key="star"
                            style="color: #FFD43B;"></i>
                    </div>
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
    text-align: center;
    border: 1px solid var(--bool-primary);

    & .flag>span {
        text-align: center;
    }

    .image {
        width: 100%;

        & img {
            width: 100%;
        }
    }
}
</style>