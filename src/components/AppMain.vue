<script>
import moviesList from './moviesList.vue';
import { state } from '../state.js'
export default {
    name: 'AppMain',
    components: {
        moviesList,
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
            <moviesList />
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>