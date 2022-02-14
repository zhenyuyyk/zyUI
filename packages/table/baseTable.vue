<script setup>
import {computed, ref} from "vue";
import {tableColumnDefault, tableDefault} from "/packages/utils/default.js";
import {getType} from "/packages/utils/utils.js";
import TableColumn from "./tableColumn.vue";
import _ from "lodash";

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

const elTables = ref(null);

defineExpose({
  elTables
});

const customColumn = _.cloneDeep(props.column).filter((row) => {
  return row.custom;
});

const customHeader = _.cloneDeep(props.column).filter((row) => {
  return row.custom;
}).map((row) => {
  row.prop = row.prop + "Header";
  return row;
});

const column = computed(() => {
  let data = _.cloneDeep(props.column);
  data = setColumn(data);
  return data;
});

const setColumn = (data) => {
  for (let i = 0; i < data.length; i++) {
    data[i] = {
      ...tableColumnDefault,
      ...data[i],
    };
    if (data[i].children) {
      data[i].children = setColumn(data[i].children);
    }
  }
  return data;
};
</script>

<template>
  <el-table ref="elTables" class="zy_base_table" :data="props.data" v-bind="tableConfig" v-on="tableEvent">
    <TableColumn :column="column">
      <template v-for="item in customHeader" v-slot:[item.prop]>
        <slot :name="item.prop"></slot>
      </template>
      <template v-for="item in customColumn" v-slot:[item.prop]="scope">
        <slot :name="item.prop" :scope="scope.scope"></slot>
      </template>
    </TableColumn>
  </el-table>
</template>

<style scoped>
.zy_base_table {
  width: 100%;
  margin: 16px 0;
}
</style>
