<template>
  <zy-form :formData="formData" :formConfig="formConfig" :formItemConfig="formItemConfig"/>
</template>

<script setup>
import {reactive} from 'vue';


const cascaderOptions = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
    ],
  },
];
const checkboxOptions = [
  {
    label: "Option A",
    value: "A"
  },
  {
    label: "Option B",
    value: "B"
  },
  {
    label: "Option C",
    value: "C"
  },
  {
    label: "Option D",
    value: "D"
  },
  {
    label: "Option E",
    value: "E"
  }
];

const formData = reactive({
  name: "",
  sex: "",
  num: 0,
  rate: 0,
  select: "",
  switch: "",
  cascader: [],
  checkbox: [],
  timePicker: "",
  timeSelect: "",
  date: "",
});
const formConfig = {
  labelWidth: "100px",
  contentWidth:"400px",
};
const formItemConfig = [
  {
    label: "姓名",
    prop: "name",
    type: "input",
  },
  {
    label: "性别",
    prop: "sex",
    type: "radio",
    options: [
      {
        label: "男",
        value: 1
      },
      {
        label: "女",
        value: 2
      },
      {
        label: "不明",
        value: 3
      },
    ],
  },
  {
    label: "数字",
    prop: "num",
    type: "number",
  },
  {
    label: "评分",
    prop: "rate",
    type: "rate",
  },
  {
    label: "选择器",
    prop: "select",
    type: "select",
    options: [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
    ]
  },
  {
    label: "开关",
    prop: "switch",
    type: "switch",
    attr: {
      activeValue: 1,
      inactiveValue: 2
    }
  },
  {
    label: "级联选择器",
    prop: "cascader",
    type: "cascader",
    options: cascaderOptions
  },
  {
    label: "多选框",
    prop: "checkbox",
    type: "checkbox",
    options: checkboxOptions
  },
  {
    label: "时间选择",
    prop: "timePicker",
    type: "timePicker",
  },
  {
    label: "时间select",
    prop: "timeSelect",
    type: "timeSelect",
    attr: {
      start: "08:30",
      step: "00:15",
      end: "18:30",
      placeholder: "请选择时间吧"
    }
  },
  {
    label: "日期选择",
    prop: "date",
    type: "date",
    attr: {
      type: "date",
      placeholder: "请选择时间吧"
    }
  },
];
</script>

<style>

</style>
