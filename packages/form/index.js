// 导入组件，组件必须声明 name
import form from './src/form.vue';
let zyform = form;
zyform.name = "zy-form";
// 为组件提供 install 安装方法，供按需引入
zyform.install = (Vue) => {
    Vue.component(zyform.name, form);
};
// 默认导出组件
export default zyform;
