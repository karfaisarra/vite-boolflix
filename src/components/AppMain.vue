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
                this.state.characters = response.data
            })
            .catch(error => {
                console.log(error);
                this.state.error = error.message
            })
    }
}
</script>
<template>
    <main>
    </main>
</template>

<style lang="scss" scoped>

</style>