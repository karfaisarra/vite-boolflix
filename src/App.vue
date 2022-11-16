<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {

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
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>
