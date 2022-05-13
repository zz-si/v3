import './styles/index.scss';
import './styles/a.css';
import { plus_one , myPromise } from './tools/add';
import { createApp } from 'vue';
import App from './App.vue';
createApp(App).mount('#app');
myPromise();
plus_one(1);