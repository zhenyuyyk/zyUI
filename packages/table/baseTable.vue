<script setup>
import {computed, ref} from "vue";
import {tableDefault, tableColumnDefault} from "/utils/default.js";
import {getType} from "/utils/utils.js";
import TableColumn from "./tableColumn.vue";

const props = defineProps({
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

const elTables = ref(null);

defineExpose({
  elTables
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
</script>

<template>
  <el-table ref="elTables" class="zy_base_table" :data="props.data" v-bind="tableConfig" v-on="tableEvent">
    <TableColumn :column="column"/>
  </el-table>
</template>

<style scoped>
.zy_base_table {
  width: 100%;
  margin: 16px 0;
}
</style>
