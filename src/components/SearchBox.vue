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
    <div class="searchbar d-flex gap-3">
        <input type="text" v-model="state.params.query" @keyup.enter="$emit('searchMovies')"
            class="form-control b w-75">
        <button @click="$emit('searchMovies')" class="btn btn-danger">Search</button>
    </div>
</template>