<script>
import { state } from '../state.js'
export default {
    name: 'ResultsList',
    data() {
        return {
            state
        }
    }
}
</script>
<template>
    <div class="movies mt-5">
        <div class="movie " v-for="(movie, i) in state.allResults.movies">
            <ul>
                <li>
                    Titolo: {{ movie.title }}
                    Titolo Originale: {{ movie.original_title }}
                    <div class="lingua" v-for="bandiera in state.bandiere"
                        v-show="movie.original_language == bandiera.language">
                        Lingua: <img width="30" :src="bandiera.flag" alt="">
                    </div>
                    Voto: {{ movie.vote_average }}
                </li>
            </ul>
        </div>
    </div>
    <div class="series">
        <div class="movie " v-for="(serie, i) in state.allResults.tv">
            <ul>
                <li>
                    Titolo serie: {{ serie.name }}
                    Titolo Originale serie: {{ serie.original_name }}
                    <div class="lingua" v-for="bandiera in state.bandiere"
                        v-show="serie.original_language == bandiera.language">
                        Lingua: <img width="30" :src="bandiera.flag" alt="">
                    </div>
                    Voto: {{ serie.vote_average }}
                </li>
            </ul>
        </div>
    </div>
</template>