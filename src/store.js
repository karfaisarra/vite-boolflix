import { reactive } from 'vue'
export const store = reactive({
    characters: null,
    error: null,
    url: 'https://api.themoviedb.org/3/movie/550?api_key=e48d16052578167c382756ce83bc5c4a&query=tomb%20raider',
    searchName: '',
})