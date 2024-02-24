<script>

import { store } from '../store';

export default {
    name: 'TvElement',
    data() {
        return {
            store
        }
    },
    props: {
        tv: Object
    }
}
</script>

<template>
    <div class="card">
        <div class="image">
            <img :src="store.getImage(tv)" alt="tv_image">
        </div>
        <div class="card-info">
            <h3>Titolo Serie Tv: {{ tv.name }}</h3>
            <span :class="store.hideTitle(tv)">Titolo originale: {{ tv.original_name }}</span>
            <p :class="store.getOverview(tv)">Overview: {{ tv.overview }}</p>
            <div class="flag">
                <span>Lingua:</span><span :class="store.getFlag(tv)"></span>
            </div>
            <div class="rating">
                <span>Voto: </span><i class="fa-solid fa-star" v-for="  star   in   store.starVote(tv.vote_average)  "
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