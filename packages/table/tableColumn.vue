<script>
export default {
  name: "tableColumn",
};
</script>
<script setup>
import {getType} from "/packages/utils/utils.js";
import tableColumn from "./tableColumn.vue";

const props = defineProps({
  column: {
    type: Object,
    default: {}
  }
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
  <el-table-column v-for="item in props.column" v-bind="bindObj(item)">
    <template #header v-if="item.customHeader">
      <slot :name="item.prop+'Header'"></slot>
    </template>
    <template #default="scope" v-if="item.custom">
      <slot :name="item.prop" :scope="scope.row"></slot>
    </template>
    <template #default="scope" v-if="item.prop==='operate'">
      <el-button v-for="btns in item.btns" v-bind="btns"
                 v-on="btnsFun(btns, scope.$index, scope.row)">{{ btns.label }}
      </el-button>
    </template>
    <!--暂不支持-->
    <!--<tableColumn v-if="item.children" :column="item.children"></tableColumn>-->
  </el-table-column>
</template>

<style scoped>

</style>
