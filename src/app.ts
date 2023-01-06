import { createApp } from 'nativescript-vue';
import {router} from "./router/router";
import App from './App.vue'

const app = createApp(App);
app.use(router)
app.start();