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
    <div class="container mt-5">
        <div class="searchbar">
            <input type="text" v-model="state.params.query" @keyup.enter="$emit('searchMovies')">
            <button @click="$emit('searchMovies')">Search</button>
        </div>
    </div>
</template>