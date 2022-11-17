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
        <SearchBox @searchMovies="state.callApi" />
    </header>
</template>

<style lang="scss" scoped>

</style>