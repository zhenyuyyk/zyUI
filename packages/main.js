import {createApp} from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import zyCheckoutGroup from "./checkbox/checkboxGroup.vue";
import zyCheckbox from "./checkbox/checkbox.vue";
import zyTable from "./table/table.vue";
import zyForm from "./form/form.vue";

const app = createApp(App);

app.use(ElementPlus);
app.component('zy-checkout', zyCheckbox);
app.component('zy-checkout-group', zyCheckoutGroup);
app.component('zy-table', zyTable);
app.component('zy-form', zyForm);
app.mount('#app');
