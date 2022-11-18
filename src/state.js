import { reactive } from 'vue'
import axios from 'axios'


export const state = reactive({

    allResults: {
        movies: null,
        tv: null
    },
    error: null,
    flags: ['fr', 'it', 'en', 'ar', 'ja', 'nl', 'de', 'tr', 'pl', 'hi', 'zh'],
    params: {
        api_key: 'e48d16052578167c382756ce83bc5c4a',
        query: ''
    },
    callApi() {

        const flims = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: state.params
        }
        const tvShow = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/tv',
            params: state.params
        }
        axios(flims)
            .then(response => {
                //console.log(response);
                state.allResults.movies = response.data.results
                console.log(state.allResults.movies);
            })
            .catch(err => {
                state.error = err.message
                //console.log(this.state.error);
            })
        axios(tvShow)
            .then(response => {
                state.allResults.tv = response.data.results
                console.log(state.allResults.tv);
            })
            .catch(err => {
                state.error = err.message
                //console.log(this.state.error);
            })

        // TODO
        state.params.query = ''
    },
})