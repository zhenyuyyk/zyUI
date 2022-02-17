import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"安装"},["/index.html","/README.md"]],
  ["v-7df20a7e","/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/Checkout%20%E5%A4%9A%E9%80%89%E6%A1%86.html",{"title":"多选框"},["/基础组件/Checkout 多选框.html","/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/Checkout%20%E5%A4%9A%E9%80%89%E6%A1%86","/基础组件/Checkout 多选框.md","/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/Checkout%20%E5%A4%9A%E9%80%89%E6%A1%86.md"]],
  ["v-1f20d158","/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6/%E8%A1%A8%E5%8D%95.html",{"title":"基础表单"},["/表单组件/表单.html","/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6/%E8%A1%A8%E5%8D%95","/表单组件/表单.md","/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6/%E8%A1%A8%E5%8D%95.md"]],
  ["v-27e91a96","/%E8%A1%A8%E6%A0%BC%E7%BB%84%E4%BB%B6/%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC.html",{"title":"表格"},["/表格组件/封装表格.html","/%E8%A1%A8%E6%A0%BC%E7%BB%84%E4%BB%B6/%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC","/表格组件/封装表格.md","/%E8%A1%A8%E6%A0%BC%E7%BB%84%E4%BB%B6/%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
