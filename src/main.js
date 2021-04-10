import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFreeCodeCamp, faLinkedin, faCodepen, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollReveal from 'vue-scroll-reveal';

import App from './App.vue'

library.add(faGithub, faFreeCodeCamp, faLinkedin, faCodepen, faInstagram, faTwitter, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueScrollReveal);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')