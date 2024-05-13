import './assets/main.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import './assets/vendors.bundle.css'
import './assets/your_style.css'


// Import thư viện Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas, far)



// Đăng ký component Global Layouts
import Default from './layouts/Layout.vue'
import NoSidebar from './layouts/NoSidebarLayout.vue'
import LoginDefaultLayout from './layouts/LayoutLogin.vue'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//const $ = require('jquery')
//window.jQuery = window.$ = $;
/*import $ from 'jquery';
window.jQuery = window.$ = $;
import select2 from 'select2';
window.select2 = select2;*/
import $ from "jquery";
import jQuery from "jquery";
import Select2 from 'vue3-select2-component';

const app = createApp(App)


app.config.productionTip = false
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('default-layout', Default)
app.component('no-sidebar-layout', NoSidebar)
app.component('login-default-layout', LoginDefaultLayout)
app.component('Select2', Select2)


app.use(createPinia())
app.use(router)



app.mount('#app')
