    import { defineAsyncComponent } from 'vue'
    
    export default ({ app }) => {    
      app.component("form-form", defineAsyncComponent(() => import("D:/myProject/zyAdmin/docs/examples/form/form.vue"))),
      app.component("form-formBtn", defineAsyncComponent(() => import("D:/myProject/zyAdmin/docs/examples/form/formBtn.vue"))),
      app.component("form-formCustom", defineAsyncComponent(() => import("D:/myProject/zyAdmin/docs/examples/form/formCustom.vue"))),
      app.component("form-formOther", defineAsyncComponent(() => import("D:/myProject/zyAdmin/docs/examples/form/formOther.vue"))),
      app.component("form-formRule", defineAsyncComponent(() => import("D:/myProject/zyAdmin/docs/examples/form/formRule.vue"))),
      app.component("DemoBlock", defineAsyncComponent(() => import("D:/myProject/zyAdmin/node_modules/_vuepress-plugin-demo-container-vue3@1.0.0@vuepress-plugin-demo-container-vue3/src/DemoBlock.vue")))
    }
    