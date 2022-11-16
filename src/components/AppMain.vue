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
    mounted() {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: 'e48d16052578167c382756ce83bc5c4a',
                query: 'tomb raider'
            }
        }

        axios(config)
            .then(response => {
                console.log(response.data);
                this.state.characters = response.data.results
            })
            .catch(error => {
                console.log(error);
                this.state.error = error.message
            })
    },
    /*methods: {
        searchByName() {
            const searchName = this.state.searchName
            const newUrl = `https://api.themoviedb.org/3/discover/movie?api_key=e48d16052578167c382756ce83bc5c4a&query=tomb raider&with_title=${searchName}`
            console.log(newUrl);
            axios.get(newUrl)
                .then(response => {
                    this.state.characters = response.data

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }*/

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
                <div class="movie " v-for="(character, i) in state.characters" v-show="state.searchName !== ''">
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