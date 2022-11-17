<script>
import MoviesList from './moviesList.vue';
import { state } from '../state.js';
import SeriesList from './SeriesList.vue';
export default {
    name: 'AppMain',
    components: {
        MoviesList,
        SeriesList
    },
    data() {
        return {
            state
        }
    },

}
</script>
<template>
    <main>
        <div class="container d-flex justify-content-between py-5">
            <MoviesList />
            <SeriesList />
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>