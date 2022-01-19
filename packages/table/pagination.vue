<script setup>
import {pageDefault} from "/utils/default.js";
import {reactive, computed, ref} from "vue";

const props = defineProps({
  pages: {
    type: Object,
    default: {}
  }
});
const emit = defineEmits(['pageChange']);
const pageConfig = reactive({
  currentPage: props.pages.pageNo || 1,
  ...props.pages,
  ...pageDefault
});
const emitPaceChange = () => {
  emit('pageChange', {
    pageNo: pageConfig.currentPage,
    pageSize: pageConfig.pageSize,
  });
};
const sizeChange = (val) => {
  pageConfig.pageSize = val;
  let {pageSize, currentPage, total} = pageConfig;
  if (pageSize * (currentPage - 1) <= total) {
    emitPaceChange();
  }
};
const currentChange = (val) => {
  pageConfig.currentPage = val;
  emitPaceChange();
};
const changePageNo = (val) => {
  pageConfig.currentPage = val;
  pageConfig.pageNo = val;
  emitPaceChange();
};
defineExpose({
  changePageNo
});
</script>

<template>
  <el-pagination
      v-if="pageConfig.isNeedPage"
      v-bind="pageConfig"
      @update:pageSize="sizeChange"
      @update:currentPage="currentChange"
  >
  </el-pagination>
</template>

<style scoped>

</style>
