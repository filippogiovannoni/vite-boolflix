<script>

import { store } from '../store';
export default {
    name: 'AppLogo',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="logo" @click="store.getMovieUrl(store.trending_movies_url)">
        <img src="../assets/img/BOOLFLIX-removebg-preview.png" alt="">
    </div>
</template>


<style scoped>
.logo {
    width: 150px;

    & img {
        max-width: 100%;
    }
}
</style>