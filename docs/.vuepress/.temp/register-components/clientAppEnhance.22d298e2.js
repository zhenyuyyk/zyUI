    import { defineAsyncComponent } from 'vue'
    
    export default ({ app }) => {    
      app.component("DemoBlock", defineAsyncComponent(() => import("D:/myProject/zyAdmin/node_modules/_vuepress-plugin-demo-container-vue3@1.0.0@vuepress-plugin-demo-container-vue3/src/DemoBlock.vue")))
    }
    