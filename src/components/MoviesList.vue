<script>
import { state } from '../state.js'
export default {
    name: 'MoviesList',
    data() {
        return {
            state
        }
    }
}
</script>
<template>
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
                    <p v-show="movie.original_language == bandiera.language" v-for="bandiera in state.bandiere">
                        <strong>Lingua:</strong> <img width="50" :src="bandiera.flag" alt="">
                    </p>
                    <p>
                        <strong>Voto:</strong> {{ movie.vote_average }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>