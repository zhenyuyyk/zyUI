import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"安装"},["/index.html","/README.md"]],
  ["v-7df20a7e","/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/Checkout%20%E5%A4%9A%E9%80%89%E6%A1%86.html",{"title":"多选框"},["/基础组件/Checkout 多选框.html","/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/Checkout%20%E5%A4%9A%E9%80%89%E6%A1%86","/基础组件/Checkout 多选框.md","/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/Checkout%20%E5%A4%9A%E9%80%89%E6%A1%86.md"]],
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
