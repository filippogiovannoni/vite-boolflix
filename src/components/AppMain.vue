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
            return content.poster_path === null ? store.base_img_url + content.backdrop_path : store.base_img_url + content.poster_path
        },
        hideTitle(content) {
            return content.title === content.original_title ? 'd-none' : 'd-block'
        },
        getOverview(content) {
            return content.overview === '' ? 'd-none' : 'd-block'
        },
        noImage(content) {
            return content.poster_path === null ? 'card d-none' : 'card d-block'
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="not-found" v-if="store.contents.length === 0">Nessun risultato trovato</div>
            <div class="trending" v-if="store.contents.length > 0">
                Film & Tv Series
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 col-12 " v-for=" content  in     store.contents    ">
                    <div :class="noImage(content)">
                        <div class="image">
                            <img :src="getImage(content)" alt="content_image">
                        </div>
                        <div class="card-info">
                            <h3>Titolo: {{ content.title }}{{ content.name }}</h3>
                            <!-- <span>Titolo originale: <em>{{ content.original_title }}{{ content.original_name }}</em></span> -->
                            <span :class="hideTitle(content)">Titolo originale: {{ content.original_title }}{{
                                content.original_name }}</span>
                            <p :class="getOverview(content)">Overview: {{ content.overview }}</p>
                            <div class="flag">
                                <span>Lingua:</span><span :class="getFlag(content)"></span>
                            </div>
                            <div class="rating">
                                <span>Voto: </span><i class="fa-solid fa-star"
                                    v-for="  star   in   starVote(content.vote_average)  " :key="star"
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
    margin-top: 6rem;
}

.trending {
    padding: 1rem 0;
    font-weight: bold;
}

.col-12 {
    text-align: center;
    /* border: 1px solid var(--bool-primary); */

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

.card:hover img {
    opacity: 0.2;
    transition: opacity 500ms;
}

.card:hover .card-info {
    opacity: 1;
    transition: opacity 500ms;
}

.card {
    position: relative;
    overflow-y: auto;
}

.card-info {
    position: absolute;
    top: 0;
    opacity: 0;
    text-align: start;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & p {
        font-size: 14px;
    }
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