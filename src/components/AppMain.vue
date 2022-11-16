<script>
import axios from 'axios'
import { store as state } from '../store.js'
export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    methods: {
        callApi(urll) {
            axios.get(urll)
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
    <main>
        <div class="container py-5">
            <div class="searchbar">
                <input type="text" v-model="state.searchName" @keyup.enter="searchByName">
                <button @click="searchByName">Search</button>
            </div>
            <div class="movies mt-5">
                <div class="movie " v-for="(movie, i) in state.movies">
                    <ul>
                        <li>
                            <p>
                                <strong>{{ i + 1 }}) Titolo:</strong> {{ movie.title }}
                            </p>
                            <p>
                                <strong>Titolo Originale:</strong> {{ movie.original_title }}
                            </p>
                            <p>
                                <strong>Lingua:</strong> {{ movie.original_language }}
                            </p>
                            <p>
                                <strong>Voto:</strong> {{ movie.vote_average }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>