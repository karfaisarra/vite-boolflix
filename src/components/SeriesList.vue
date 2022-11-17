<script>
import { state } from '../state.js'
export default {
    name: 'SeriesList',
    data() {
        return {
            state
        }
    }
}
</script>
<template>
    <div class="series mt-5">
        <div class="serie " v-for="(serie, i) in state.series">
            <ul>
                <li>
                    <div class="titolo">
                        <strong>{{ i + 1 }}) Titolo:</strong>{{ serie.name }}
                    </div>
                    <div class="titolo_originale">
                        <strong>Titolo Originale:</strong> / {{ serie.original_name }}
                    </div>
                    <div class="lingua" v-for="bandiera in state.bandiere"
                        v-show="serie.original_language == bandiera.language">
                        <strong>Lingua:</strong> <img width="30" :src="bandiera.flag" alt="">
                    </div>

                    <div class="voto">
                        <strong>Voto:</strong> {{ serie.vote_average }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>