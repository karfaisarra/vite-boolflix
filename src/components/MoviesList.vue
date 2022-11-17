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
            <ul v-for="serie in state.series">
                <li>
                    <div class="titolo">
                        <strong>{{ i + 1 }}) Titolo:</strong> {{ movie.title }} / {{ serie.name }}
                    </div>
                    <div class="titolo_originale">
                        <strong>Titolo Originale:</strong> {{ movie.original_title }} / {{ serie.original_name }}
                    </div>
                    <div class="lingua" v-for="bandiera in state.bandiere"
                        v-show="movie.original_language == bandiera.language">

                        <strong>Lingua:</strong> <img width="30" :src="bandiera.flag" alt=""> /{{
                                serie.original_language
                        }}
                    </div>

                    <div class="voto">
                        <strong>Voto:</strong> {{ movie.vote_average }}/{{ serie.vote_average }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>