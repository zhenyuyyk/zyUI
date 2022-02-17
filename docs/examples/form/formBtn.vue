<script setup>
import {reactive, ref} from 'vue';
import {ElMessage} from "element-plus";

const subBtnLoading = ref(false);

const formData = reactive({
  name: "",
  sex: ""
});
const formConfig = {
  labelWidth: "100px",
  btnShow: true,
  btns: [
    {
      label: "确认",
      clickFun: () => {
        subClickFun();
      },
      attr: {
        type: "primary",
        loading: subBtnLoading
      }
    },
    {
      label: "取消",
      clickFun: () => {
      },
    },
    {
      label: "其他按钮",
    },
    {
      label: "任意个",
    }
  ]
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
];

const subClickFun = () => {
  subBtnLoading.value = true;
  setTimeout(()=>{
    subBtnLoading.value = false;
    ElMessage({
      message: `提交成功,数据${JSON.stringify(formData)}`,
      type: 'success',
    });
  },1000)
};
</script>

<template>
  <zy-form :formData="formData" :formConfig="formConfig" :formItemConfig="formItemConfig"/>
</template>

<style>

</style>
