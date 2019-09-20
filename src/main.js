import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'hover.css/css/hover.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BookingFirstStep from './components/BookingFirstStep.vue'
import BookingSecondStep from './components/BookingSecondStep.vue'
import BookingSuccess from './components/BookingSuccess.vue'
import BookedPage from './components/BookedPage.vue'
import BookingAdmin from './components/BookingAdmin.vue'

library.add(faPhone)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

Vue.config.productionTip = false

// Vue.prototype.$patientApiUrl = 'http://127.0.0.1:8000/api/patients'

const routes = [
  { path: '/', component: BookingFirstStep },
  { path: '/booking/:phoneNumber', component: BookingSecondStep},
  { path: '/booking/:phoneNumber/success', component: BookingSuccess},
  { path: '/booked/:phoneNumber', component: BookedPage},
  { path: '/Ym9va2luZy1hZG1pbg==', component: BookingAdmin}
]

const router = new VueRouter({
	mode: 'history',
  	routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
