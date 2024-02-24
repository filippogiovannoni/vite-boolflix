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
            return content.poster_path === null && content.backdrop_path === null ? 'd-none' : 'd-block'
        }
    }
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
                    v-for=" movie  in     store.movies    ">
                    <div class="card">
                        <div class="image">
                            <img :src="getImage(movie)" alt="movie_image">
                        </div>
                        <div class="card-info">
                            <h3>Titolo: {{ movie.title }}</h3>
                            <span :class="hideTitle(movie)">Titolo originale: {{ movie.original_title }}</span>
                            <p :class="getOverview(movie)">Overview: {{ movie.overview }}</p>
                            <div class="flag">
                                <span>Lingua:</span><span :class="getFlag(movie)"></span>
                            </div>
                            <div class="rating">
                                <span>Voto: </span><i class="fa-solid fa-star"
                                    v-for="  star   in   starVote(movie.vote_average)  " :key="star"
                                    style="color: #FFD43B;"></i>
                            </div>
                        </div>
                    </div>
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

.title {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>