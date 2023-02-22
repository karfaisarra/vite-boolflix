import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
