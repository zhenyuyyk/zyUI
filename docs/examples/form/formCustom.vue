<script setup>
import {reactive} from 'vue';

const formData = reactive({
  name: "",
  zidingyi: ""
});
const formConfig = {
  labelWidth: "100px",
};
const formItemConfig = [
  {
    label: "姓名",
    prop: "name",
    type: "input",
  },
  {
    label: "自定义",
    prop: "zidingyi",
    type: "custom",
  },
];

</script>

<template>
  <zy-form :formData="formData" :formConfig="formConfig" :formItemConfig="formItemConfig">
    <template #zidingyi>
      自定义
      <p>123456</p>
      <p>name:{{formData.name}}</p>
    </template>
  </zy-form>
</template>

<style>

</style>
