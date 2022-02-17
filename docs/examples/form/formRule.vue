<script setup>
import {ElMessage} from 'element-plus';
import {reactive} from 'vue';
import {cascaderOptions, checkboxOptions} from "../../../packages/utils/options.js";

const formData = reactive({
  name: "",
  sex: "",
});
const formConfig = {
  labelWidth: "100px",
};
const formItemConfig = [
  {
    label: "姓名",
    prop: "name",
    type: "input",
    rules: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'blur',
      },
      {
        min: 3,
        max: 5,
        message: '请输入3-5个字符',
        trigger: 'blur',
      }
    ],
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
    rules: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'blur',
      },
      {
        type: 'date',
        required: true,
        message: 'Please pick a date',
        trigger: 'change',
      }
    ],
  }
];

</script>

<template>
  <zy-form :formData="formData" :formConfig="formConfig" :formItemConfig="formItemConfig" />
</template>

<style>

</style>
