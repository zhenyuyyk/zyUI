<script setup>
import {ref, reactive, onMounted} from "vue";
import Page from "./pagination.vue";
import BaseTable from "./baseTable.vue";
import {tableDefault} from "../utils/default";
import _ from "lodash";

const props = defineProps({
  pageConfig: {
    type: Object,
    default: {}
  },
  tableConfig: {
    type: Object,
    default: {}
  },
  column: {
    type: Object,
    default: {}
  },
  data: {
    type: Array,
    default: []
  },
});
let obj = reactive({
  table: ""
});

let baseTables = ref(null);
let page = ref(null);
onMounted(() => {
  obj.table = baseTables.value.elTables;
  obj.page = page.value;
});

defineExpose(obj);

const customColumn = _.cloneDeep(props.column).filter((row) => {
  return row.custom;
});

const customHeader = _.cloneDeep(props.column).filter((row) => {
  return row.custom;
}).map((row) => {
  row.prop = row.prop + "Header";
  return row;
});
const emit = defineEmits(['pageChange']);
const pageChange=(pages)=>{
  emit('pageChange', pages);
}
</script>

<template>
  <div class="zy_table">
    <div class="zy_table_top">
      <div>
        <slot name="btns"></slot>
      </div>
      <Page ref="page" :pages="props.pageConfig" @pageChange="pageChange"/>
    </div>
    <BaseTable ref="baseTables" :tableConfig="props.tableConfig" :column="props.column" :data="props.data">
      <template v-for="item in customHeader" v-slot:[item.prop]>
        <slot :name="item.prop"></slot>
      </template>
      <template v-for="item in customColumn" v-slot:[item.prop]="scope">
        <slot :name="item.prop" :row="scope.scope"></slot>
      </template>
    </BaseTable>
  </div>
</template>

<style scoped>
.zy_table {
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
}

.zy_table_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
