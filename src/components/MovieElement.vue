<script>

import { store } from '../store'

export default {
    name: 'MovieElement',
    data() {
        return {
            store
        }
    },
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="card">
        <div class="image">
            <img :src="store.getImage(movie)" alt="movie_image">
        </div>
        <div class="card-info">
            <h3>Titolo: {{ movie.title }}</h3>
            <span :class="store.hideTitle(movie)">Titolo originale: {{ movie.original_title }}</span>
            <p :class="store.getOverview(movie)">Overview: {{ movie.overview }}</p>
            <div class="flag">
                <span>Lingua:</span><span :class="store.getFlag(movie)"></span>
            </div>
            <div class="rating">
                <span>Voto: </span><i class="fa-solid fa-star" v-for="  star   in   store.starVote(movie.vote_average)  "
                    :key="star" style="color: #FFD43B;"></i>
            </div>
        </div>
    </div>
</template>


<style scoped>
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

.flag>span {
    text-align: center;

}

.image {
    width: 100%;

    & img {
        width: 100%;
    }
}
</style>