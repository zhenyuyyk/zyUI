<script setup>
import {reactive} from 'vue';
import {cascaderOptions, checkboxOptions} from "../../../packages/utils/options.js";
const formData = reactive({
  name: ""
});
const formConfig = {
  // inline: false,
  labelWidth: "100px",
  // inlineMessage: true
};
const formItemConfig = [
  {
    label: "姓名",
    prop: "name",
    type: "input",
    // labelWidth: "100px",
    // required: true,
    rules: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'blur',
      }
    ],
    // error: "",
    // inlineMessage: true,
    attr: {
      maxLength: 5,
      placeholder: "请输入名称",
      clearable: true,
      width: 200,
    }
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
    attr: {
      // disabled: true
    }
  },
  {
    label: "数字",
    prop: "num",
    type: "number",
    attr: {
      // disabled: true
    }
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
    attr: {
      placeholder: "请选择时间吧"
    }
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
  {
    label: "自定义",
    prop: "zidingyi",
    type: "custom",
  },
];
</script>

<template>
  555
<!--  <zy-form style="width:500px;" :formData="formData" :formConfig="formConfig" :formItemConfig="formItemConfig">-->
<!--    <template #zidingyi>-->
<!--      自定义-->
<!--    </template>-->
<!--  </zy-form>-->
</template>

<style>

</style>
