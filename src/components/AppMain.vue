<script>
import MoviesList from './moviesList.vue';
import { state } from '../state.js'
export default {
    name: 'AppMain',
    components: {
        MoviesList,
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
        <div class="container py-5">
            <MoviesList />
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>