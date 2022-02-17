import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import {defineClientAppSetup} from '@vuepress/client';
import zyUi from "../../packages/index.js"
export default defineClientAppSetup(({app}) => {
    app.use(ElementPlus);
    app.use(zyUi);
});
