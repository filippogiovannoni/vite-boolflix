<script>

import { store } from '../store.js'
import AppLogo from './AppLogo.vue';
import AppFeatures from './AppFeatures.vue'
import AppSearch from './AppSearch.vue'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        };
    },
    components: { AppLogo, AppFeatures, AppSearch }
}
</script>

<template>
    <header>
        <nav class="container">
            <AppLogo></AppLogo>
            <AppFeatures></AppFeatures>
            <AppSearch></AppSearch>
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
}
</style>