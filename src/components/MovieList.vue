<script>

import { store } from '../store';
import TvElement from './TvElement.vue';

export default {
    name: 'MovieList',
    data() {
        return {
            store
        }
    },
    components: { TvElement }
}
</script>

<template>
    <span class="title" v-if="store.tvSeries.length > 0">Tv Series</span>
    <div class="row" v-if="store.tvSeries.length > 0">
        <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-bind:class="store.noImage(tv)"
            v-for=" tv  in     store.tvSeries    ">
            <TvElement :tv="tv"></TvElement>
        </div>
    </div>
</template>


<style scoped></style>