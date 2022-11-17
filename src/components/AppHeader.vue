<script>
import axios from 'axios'
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
    methods: {
        callApi(url) {
            axios.get(url)
                .then(response => {
                    //console.log(response);
                    this.state.movies = response.data.results
                    //console.log(this.state.movies);
                })
                .catch(err => {
                    this.state.error = err.message
                    //console.log(this.state.error);
                })
        },
        searchByName() {
            const query = this.state.searchName;
            console.log(query);
            const url = `https://api.themoviedb.org/3/search/movie?api_key=e48d16052578167c382756ce83bc5c4a&query=${query}`;
            console.log(url);
            this.callApi(url)
        }

    }
}
</script>
<template>
    <header>
        <SearchBox @searchMovies="searchByName" />
    </header>
</template>

<style lang="scss" scoped>

</style>