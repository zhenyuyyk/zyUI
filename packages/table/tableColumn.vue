<script setup>
import {computed, ref} from "vue";
import {tableDefault, tableColumnDefault} from "/utils/default.js";
import {getType} from "/utils/utils.js";
import TableColumn from "./tableColumn.vue";

const props = defineProps({
  column: {
    type: Object,
    default: {}
  }
});

const tableConfig = computed(() => {
  return {
    ...tableDefault,
    ...props.tableConfig
  };
});

const tableEvent = computed(() => {
  let data = {};
  let config = props.tableConfig;
  for (let i in config) {
    getType(config[i]) === "function" ?
        data[i] = config[i] : "";
  }
  return data;
});

const column = computed(() => {
  let data = [];
  props.column.forEach((item) => {
    data.push({
      ...tableColumnDefault,
      ...item,
    });
  });
  return data;
});

const btnsFun = (btns, index, row) => {
  let funs = {};
  for (let i in btns) {
    if (getType(btns[i]) === 'function') {
      funs[i] = () => {
        btns[i](index, row);
      };
    }
  }
  return funs;
};

const bindObj = (obj) => {
  let objs = {};
  for (let i in obj) {
    if (i !== "children") {
      objs[i] = obj[i];
    }
  }
  return objs;
};
</script>

<template>
  <el-table-column v-for="item in column" v-bind="bindObj(item)">
    <template #header v-if="item.customHeader">
      <slot :name="item.prop+'Header'"></slot>
    </template>
    <template #default="scope" v-if="item.custom">
      <slot :name="item.prop"></slot>
    </template>
    <template #default="scope" v-if="item.prop==='operate'">
      <el-button v-for="btns in item.btns" v-bind="btns"
                 v-on="btnsFun(btns, scope.$index, scope.row)">{{ btns.label }}
      </el-button>
    </template>
    <TableColumn v-if="item.children" :column="item.children"/>
  </el-table-column>
</template>

<style scoped>

</style>
