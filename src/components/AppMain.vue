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
        callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.state.characters = response.data.results
                    console.log(this.state.characters);
                })
                .catch(err => {
                    this.state.error = err.message
                    console.log(this.state.error);

                })
        }
    },
    mounted() {
        if (this.state.searchName !== '') {
            const config = {
                method: 'get',
                url: `https://api.themoviedb.org/3/search/movie?api_key=e48d16052578167c382756ce83bc5c4a&query=${this.state.searchName}`
            }
            this.callApi(config.url)
            //console.log(this.callApi(config.url));
        }
    }
}
</script>
<template>
    <main>
        <div class="container py-5">
            <div class="searchbar">
                <input type="text" v-model="state.searchName" @keyup="searchByName">
                <button>Search</button>
            </div>
            <div class="movies mt-5">
                <div class="movie " v-for="(character, i) in state.characters">
                    <ul>
                        <li>
                            <p>
                                <strong>{{ i + 1 }}) Titolo:</strong> {{ character.title }}
                            </p>
                            <p>
                                <strong>Titolo Originale:</strong> {{ character.original_title }}
                            </p>
                            <p>
                                <strong>Lingua:</strong> {{ character.original_language }}
                            </p>
                            <p>
                                <strong>Voto:</strong> {{ character.vote_average }}
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