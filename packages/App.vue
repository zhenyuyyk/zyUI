<script setup>
import {ref} from 'vue';
import {ElConfigProvider} from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const locale = zhCn;
const checked1 = ref([1, 2]);
const checked2 = ref("0");
const config = {
  options: [
    {
      label: '唱',
      value: 1
    },
    {
      label: '跳',
      value: 2
    },
  ]
};
const config2 = {
  label: "你好",
  // trueLabel: "1",
  // falseLabel: "0"
};

const checkoutChange = (val) => {
  console.log("checkoutChange", val);
};

let pageConfig = {
  pageSize: 15,
  pageNo: 1,
  total: 50
};
let tableConfig = {
  border: true,
  // cellClick: (row, column, cell, event) => {
  //   console.log(row, column, cell, event);
  // }
};
let tableData = [
  {
    data: "123",
    name: "456",
    address: "789"
  }, {
    data: "123",
    name: "456",
    address: "789"
  }, {
    data: "123",
    name: "456",
    address: "789"
  }
];
let tableColumn = [
  {
    label: "",
    prop: "selection",
    type: "selection",
  },
  {
    label: "Data",
    prop: "data"
  },
  {
    label: "Name",
    prop: "name",
  },
  {
    label: "自定义列1",
    prop: "address",
    custom: true,
    customHeader: true
  },
  {
    label: "自定义列2",
    prop: "address",
    custom: true,
    customHeader: false
  },
  {
    label: "自定义列3",
    prop: "address",
  },
  {
    label: "操作",
    prop: "operate",
    btns: [
      {
        label: "编辑",
        type: "text",
        click: (index, row) => {
          console.log(index, row);
          console.log(111);
        }
      }
    ]
  },
];
let tableColumn2 = [
  {
    label: "Data",
    prop: "data"
  },
  {
    label: "Name",
    prop: "name",
    children:[
      {
        label: "Data",
        prop: "data"
      },
      {
        label: "Address",
        prop: "address",
        children:[
          {
            label: "city",
            prop: "city"
          },
          {
            label: "state",
            prop: "state"
          },
        ]
      },
    ]
  }
];
const multipleTableRef = ref(null);
const allXuan = () => {
  console.log(multipleTableRef);
  multipleTableRef.value.table.clearSelection();
};
console.log("app", multipleTableRef.value);
const lineClick = () => {
  console.log("lineClick");
};
</script>

<template>
  <ElConfigProvider :locale="locale">
    <p>{{ checked2 }}</p>
    <zy-checkout-group v-model="checked1" :config="config"/>
    <zy-checkout v-model="checked2" :config="config2" @change="checkoutChange"/>
    <el-button @click="allXuan">点击全选</el-button>
    <zy-table ref="multipleTableRef" :pageConfig="pageConfig" :tableConfig="tableConfig" :column="tableColumn"
              :data="tableData">
      <template v-slot:btns>
        头部按钮插槽
      </template>
      <template v-slot:addressHeader>
        addressHeader
      </template>
      <template v-slot:address>
        <p @click="lineClick">addressLine</p>
      </template>
    </zy-table>
    <h2>多级表头:</h2>
    <zy-table :column="tableColumn2" :data="tableData" />
  </ElConfigProvider>
</template>

<style scoped>

</style>
