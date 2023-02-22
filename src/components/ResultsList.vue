<script>
import { state } from '../state.js';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'ResultsList',
    data() {
        return {
            state,
        }
    },
    methods: {
        getImages(urlImgApi) {
            if (urlImgApi) {
                const urlBase = 'https://image.tmdb.org/t/p/w342'
                return urlBase + urlImgApi
            } else {
                return 'https://upload.wikimedia.org/wikipedia/en/0/00/Lara_Croft_-_Tomb_Raider.png'
            }
        },
        getImageUrl(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },
        getStars(vote) {
            const stars = []
            for (let i = 1; i <= 5; i++) {
                if (i <= vote) {
                    stars.push(faStar)
                } else {
                    stars.push(['far', 'star'])
                }
            }
            return stars
        },
        getDescription(text) {
            if (text.length > 150) {
                return text.slice(0, 250) + '...'
            } else {
                return text
            }
        }

    },


}
</script>
<template>
    <div class="movies mt-5">
        <div class="movie ">
            <div class="container-fluid">
                <h2 class="text-white py-5">Movies:</h2>
                <div class="row row-cols-5 g-4">
                    <div class="col" v-for="movie in state.allResults.movies">
                        <div class="my_card">
                            <img :src="getImages(movie.poster_path)" alt="" class="img_top ">
                            <div class="body_bottom">
                                <p> <strong>Titolo: </strong>{{ movie.title }}</p>
                                <p> <strong>Titolo originale: </strong>{{ movie.original_title }}</p>

                                <div v-if="state.flags.includes(movie.original_language)">
                                    <strong>Lingua: </strong><img width="30" :src="getImageUrl(movie.original_language)"
                                        class="flagImg" alt="">
                                </div>
                                <div v-else>
                                    <strong>Lingua: </strong>{{ movie.original_language }}
                                </div>
                                <div class="star-rating">
                                    <font-awesome-icon v-for="icon in getStars(Math.round(movie.vote_average) / 2)"
                                        :key="icon" :icon="icon" />
                                </div>
                                <p><strong>Descrizione: </strong>{{ getDescription(movie.overview) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="series">
        <div class="serie ">
            <div class="container-fluid">
                <h2 class="text-white py-5">Series:</h2>
                <div class="row row-cols-5 g-4 mt-1">
                    <div class="col" v-for="serie in state.allResults.tv">
                        <div class="my_card">

                            <img :src="getImages(serie.backdrop_path)" alt="" class="img_top ">
                            <div class="body_bottom">
                                <p> <strong>Titolo Seria: </strong>{{ serie.name }}</p>
                                <p> <strong>Titolo originale: </strong>{{ serie.original_name }}</p>
                                <div v-if="state.flags.includes(serie.original_language)">
                                    <strong>Lingua: </strong><img width="30" :src="getImageUrl(serie.original_language)"
                                        class="flagImg" alt="">
                                </div>
                                <div v-else>
                                    <strong>Lingua: </strong>{{ serie.original_language }}
                                </div>
                                <div class="star-rating">
                                    <font-awesome-icon v-for="icon in getStars(Math.round(serie.vote_average) / 2)"
                                        :key="icon" :icon="icon" />
                                </div>
                                <p><strong>Descrizione: </strong>{{ getDescription(serie.overview) }}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.col {
    width: calc(100% / 5);
    height: 100%;


    .my_card {

        height: 100%;
        width: 100%;
        position: relative;

        .img_top {
            width: 100%;
            height: 450px;
            object-fit: cover;
        }

        .body_bottom {
            padding: 0.25rem;
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            background: #000;
            color: #fff;
            height: 100%;
            width: 100%;

            .flagImg {
                height: 30px;
                border-radius: 50%;
            }

            .star-rating {
                font-size: 24px;
            }

            .star-rating .svg-inline--fa {
                color: gold;
            }
        }

        &:hover {
            .body_bottom {
                display: inline-block;
            }
        }
    }
}
</style>