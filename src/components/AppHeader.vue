<script>

import SearchBox from './SearchBox.vue';
import { state } from '../state.js'
export default {
    name: 'AppHeader',
    components: {
        SearchBox,
    },
    data() {
        return {
            state
        }
    },
}
</script>
<template>
    <header>
        <div class="d-flex justify-content-between align-items-center p-5">
            <img src="../assets/img/logo.png" alt="">
            <SearchBox @searchMovies="state.callApi" />
        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>