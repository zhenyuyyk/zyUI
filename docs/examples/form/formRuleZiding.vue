<script setup>
import {reactive, ref} from 'vue';

const validatePass = (rule, value, callback) => {
  if (value.length > 5) {
    callback(new Error('超出5位数'));
  } else {
    callback();
  }
};
const formData = reactive({
  name: "",
  sex: "",
});
const formConfig = {
  labelWidth: "100px",
  btnShow: true,
  btns: [
    {
      label: "确认",
      clickFun: () => {
        submitForm();
      },
      attr: {
        type: "primary"
      }
    },
    {
      label: "重置校验",
      clickFun: () => {
        resetForm();
      },
    }
  ]
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
        validator: validatePass,
        trigger: 'blur'
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
        message: '请选择性别',
        trigger: 'change',
      }
    ],
  },
];

const zyFormRef = ref(null);

const submitForm = () => {
  zyFormRef.value.form.validate((valid) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = () => {
  zyFormRef.value.form.resetFields();
};
</script>

<template>
  <zy-form ref="zyFormRef" :formData="formData" :formConfig="formConfig" :formItemConfig="formItemConfig"/>
</template>

<style>

</style>
