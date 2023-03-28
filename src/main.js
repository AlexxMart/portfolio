import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFreeCodeCamp, faLinkedin, faCodepen, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

library.add(faGithub, faFreeCodeCamp, faLinkedin, faCodepen, faInstagram, faTwitter, faEnvelope)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');