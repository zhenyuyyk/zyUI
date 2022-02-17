<script setup>
import {ref, reactive} from 'vue';
import {ElConfigProvider} from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import {cascaderOptions, checkboxOptions} from "./utils/options.js";

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
  rowClassName: ({row, rowIndex}) => {
    if (rowIndex === 0) {
      return 'warning-row';
    } else if (rowIndex === 2) {
      return 'success-row';
    }
    return '';
  },
  height: 250,
  // cellClick: (row, column, cell, event) => {
  //   console.log(row, column, cell, event);
  // }
};
let tableData = [
  {
    data: "123",
    name: "456",
    address: "789",
    aaa: "123",
    bbb: "bbb",
    ccc: "cccc"
  }, {
    data: "123",
    name: "456",
    address: "789",
    aaa: "123",
    bbb: "bbb",
    ccc: "cccc"
  }, {
    data: "123",
    name: "456",
    address: "789",
    aaa: "123",
    bbb: "bbb",
    ccc: "cccc"
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
    prop: "aaa",
    custom: true,
    customHeader: true
  },
  {
    label: "自定义列2",
    prop: "bbb",
    custom: true,
    customHeader: false
  },
  {
    label: "ccc",
    prop: "ccc",
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
let tableData2 = [
  {
    aaa: "123",
    bbb: "bbb",
    ccc: "cccc",
    ddd: "ddd",
    eee: "eee",
    fff: "fff"
  }, {
    aaa: "123",
    bbb: "bbb",
    ccc: "cccc",
    ddd: "ddd",
    eee: "eee",
    fff: "fff"
  }, {
    aaa: "123",
    bbb: "bbb",
    ccc: "cccc",
    ddd: "ddd",
    eee: "eee",
    fff: "fff"
  }
];
let tableColumn2 = [
  {
    label: "Data",
    prop: "aaa"
  },
  {
    label: "Delivery Info",
    prop: "bbb",
    children: [
      {
        label: "Name",
        prop: "ccc"
      },
      {
        label: "Address Info",
        prop: "ddd",
        children: [
          {
            label: "city",
            prop: "eee"
          },
          {
            label: "state",
            prop: "fff"
          },
          {
            label: "address",
            prop: "ggg"
          },
          {
            label: "zip",
            prop: "hhh"
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
const pageChange = (pages) => {
  console.log(pages);
};
const goOne = () => {
  multipleTableRef.value.page.changePageNo(1);
};
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
      type:"date",
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
  <ElConfigProvider :locale="locale">
    <p>{{ formConfig }}</p>
    <p>{{ formData }}</p>
    <zy-form style="width:500px;" :formData="formData" :formConfig="formConfig" :formItemConfig="formItemConfig">
      <template #zidingyi>
        自定义
        <p>123</p>
      </template>
    </zy-form>
    <zy-checkout-group v-model="checked1" :config="config"/>
    <zy-checkout v-model="checked2" :config="config2" @change="checkoutChange"/>
    <el-button @click="allXuan">点击取消全选</el-button>
    <zy-table ref="multipleTableRef" :pageConfig="pageConfig" :tableConfig="tableConfig" :column="tableColumn"
              :data="tableData" @pageChange="pageChange">
      <template #btns>
        头部按钮插槽 <span style="color: red" @click="goOne">点击回到第一页并重新请求</span>
      </template>
      <template #aaaHeader>
        addressHeader
      </template>
      <template #aaa="scope">
        <p @click="lineClick">addressLine{{ scope.row }}</p>
      </template>
      <template #bbb>
        <p @click="lineClick">bbb</p>
      </template>
    </zy-table>
    <h2>多级表头:</h2>
    <zy-table :pageConfig="pageConfig" :column="tableColumn2" :data="tableData2"/>
  </ElConfigProvider>
</template>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-lighter);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-lighter);
}
</style>
