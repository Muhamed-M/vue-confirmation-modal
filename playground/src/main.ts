import { createApp } from 'vue';
import ConfirmationModal from 'vue-confirmation-modal';
import 'vue-confirmation-modal/dist/style.css';
import App from './App.vue';

createApp(App)
  .use(ConfirmationModal, {
    animation: 'roadRunner',
    theme: 'auto'
  })
  .mount('#app');
