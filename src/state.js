import { reactive } from 'vue'
import axios from 'axios'
export const state = reactive({
    movies: null,
    series: null,
    error: null,
    bandiere: [
        {
            language: 'fr',
            flag: 'http://www.geonames.org/flags/x/fr.gif'
        },
        {
            language: 'it',
            flag: 'http://www.geonames.org/flags/x/it.gif'
        },
        {
            language: 'ja',
            flag: 'http://www.geonames.org/flags/x/jp.gif'
        },
        {
            language: 'en',
            flag: 'http://www.geonames.org/flags/x/us.gif'
        },
        {
            language: 'ar',
            flag: 'http://www.geonames.org/flags/x/sa.gif'
        },
        {
            language: 'nl',
            flag: 'http://www.geonames.org/flags/x/nl.gif'
        },
        {
            language: 'de',
            flag: 'http://www.geonames.org/flags/x/de.gif'
        },
        {
            language: 'pl',
            flag: 'http://www.geonames.org/flags/x/pl.gif'
        },
        {
            language: 'tr',
            flag: 'http://www.geonames.org/flags/x/tr.gif'
        },
        {
            language: 'hi',
            flag: 'http://www.geonames.org/flags/x/in.gif'
        }

    ],
    config: {
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'e48d16052578167c382756ce83bc5c4a',
            query: ''
        },
    },
    tvShow: {
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/tv',
        params: {
            api_key: 'e48d16052578167c382756ce83bc5c4a',
            query: 'm'
        },
    },
    callApi() {
        axios(state.config)
            .then(response => {
                //console.log(response);
                state.movies = response.data.results
                //console.log(this.state.movies);
            })
            .catch(err => {
                state.error = err.message
                //console.log(this.state.error);
            })
        axios(state.tvShow)
            .then(response => {
                state.series = response.data.results
                console.log(state.series);
            })
            .catch(err => {
                state.error = err.message
                //console.log(this.state.error);
            })
        state.config.params.query = ''
    },
})