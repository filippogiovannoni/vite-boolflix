<script>

import { store } from '../store.js'
import AppLogo from './AppLogo.vue';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            searchBar: ''
        };
    },
    components: { AppLogo }
}
</script>

<template>
    <header>
        <nav class="container">
            <AppLogo></AppLogo>
            <div class="features">
                <ul>
                    <li><a class="active" href="#">Sfoglia</a></li>
                    <li><a href="#">Kids</a></li>
                </ul>
            </div>
            <div class="search">
                <input type="text" name="searchBox" id="searchBox" placeholder="Digita il nome del film"
                    v-model="this.searchBar">
                <button
                    @click="store.getMovieUrl(store.base_api_movie_url + this.searchBar); store.getMovieUrl(store.base_api_tv_url + this.searchBar)">Cerca</button>
            </div>
        </nav>
    </header>
</template>


<style scoped>
header {
    filter: drop-shadow(0 0 5px var(--bool-primary));
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    background-color: black
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    & ul {
        display: flex;
        list-style: none;
        gap: 1rem;

        & a.active {
            color: var(--bool-primary);
        }

        & a {
            text-decoration: none;
            color: var(--bool-light);
        }
    }

    .search>input,
    button {
        border-radius: 0.25rem;
        border-style: none;
        padding: 0.25rem;
        margin: 0 0.25rem;
    }

}
</style>