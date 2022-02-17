export const data = {
  "key": "v-1f20d158",
  "path": "/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6/%E8%A1%A8%E5%8D%95.html",
  "title": "基础表单",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "formData",
      "slug": "formdata",
      "children": []
    },
    {
      "level": 2,
      "title": "formConfig",
      "slug": "formconfig",
      "children": [
        {
          "level": 3,
          "title": "btns",
          "slug": "btns",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "formItemConfig",
      "slug": "formitemconfig",
      "children": [
        {
          "level": 3,
          "title": "attr",
          "slug": "attr",
          "children": []
        }
      ]
    }
  ]
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
