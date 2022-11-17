<script>
import { state } from '../state.js'
export default {
    name: 'SearchBox',
    data() {
        return {
            state
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="searchbar">
            <input type="text" v-model="state.searchName" @keyup.enter="$emit('searchMovies')">
            <button @click="$emit('searchMovies')">Search</button>
        </div>
    </div>
</template>