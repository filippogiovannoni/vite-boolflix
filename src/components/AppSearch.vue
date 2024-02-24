<script>

import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            searchBar: ''
        }
    }
}
</script>

<template>
    <div class="search">
        <input type="text" name="searchBox" id="searchBox" placeholder="Digita il nome del film" v-model="this.searchBar">
        <button
            @click="store.getMovieUrl(store.base_api_movie_url + this.searchBar); store.getMovieUrl(store.base_api_tv_url + this.searchBar)">Cerca</button>
    </div>
</template>


<style scoped>
.search>input,
button {
    border-radius: 0.25rem;
    border-style: none;
    padding: 0.25rem;
    margin: 0 0.25rem;
}
</style>