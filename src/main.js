// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// PrimeVue y estilos
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-green/theme.css'       // Tema PrimeVue
import 'primevue/resources/primevue.css'                    // Estilos principales de PrimeVue
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'                          // Utilidades CSS de PrimeFlex

// Componentes globales (puedes registrar los que uses aquí)
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'

const app = createApp(App)

// Usar los plugins
app.use(router)
app.use(i18n)
app.use(PrimeVue)

// Registrar componentes globalmente
app.component('Button', Button)
app.component('Toolbar', Toolbar)
app.component('InputText', InputText)
app.component('Card', Card)

// Montar app
app.mount('#app')
