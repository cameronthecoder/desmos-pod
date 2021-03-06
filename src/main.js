import { createApp } from 'vue'
import App from './App.vue'
import loadicons from 'loadicons'
import '@spectrum-css/vars/dist/spectrum-global.css'
import '@spectrum-css/vars/dist/spectrum-medium.css'
import '@spectrum-css/vars/dist/spectrum-light.css'
import '@spectrum-css/page/dist/index-vars.css'
import '@spectrum-css/typography/dist/index-vars.css'
import '@spectrum-css/checkbox/dist/index-vars.css'
import '@spectrum-css/dialog/dist/index-vars.css'
import '@spectrum-css/modal/dist/index-vars.css'
import '@spectrum-css/underlay/dist/index-vars.css'
import '@spectrum-css/buttongroup/dist/index-vars.css'
import '@spectrum-css/divider/dist/index-vars.css'
import '@spectrum-css/table/dist/index-vars.css'
import '@spectrum-css/icon/dist/index-vars.css'
import '@spectrum-css/actionbutton/dist/index-vars.css'
import '@spectrum-css/textfield/dist/index-vars.css'
import '@spectrum-css/button/dist/index-vars.css'
loadicons('spectrum-css-icons.svg')
let app = createApp(App)
app.mount('#app')
app.config.globalProperties.$window = window
