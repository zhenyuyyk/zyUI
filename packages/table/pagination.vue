<script setup>
const props = defineProps({
  isNeedPage: {
    type: Boolean,
    default: true
  },
  background: {
    type: Boolean,
    default: false
  },
  pageSize: {
    type: Number,
    default: 10
  },
  defaultPageSize: {
    type: Number,
    default: null
  },
  total: {
    type: Number,
    default: 0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  currentPage: {
    type: Number,
    default: 1
  },
  defaultCurrentPage: {
    type: Number,
    default: null
  },
  layout: {
    type: String,
    default: 'prev, pager, next, jumper, ->, total'
  },
  pageSizes: {
    type: Array,
    default: [15, 30, 50, 100]
  },
  popperClass: {
    type: String,
    default: null
  },
  prevText: {
    type: String,
    default: null
  },
  nexText: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  hideOnSinglePage: {
    type: Boolean,
    default: null
  }
});
</script>

<template>
  <el-pagination
      v-if="props.isNeedPage"
      v-model:currentPage="props.currentPage"
      v-model:pageSize="props.pageSize"
      :page-sizes="props.pageSizes"
      :page-size="props.pageSize"
      :layout="props.layout"
      :total="props.total"
  >
  </el-pagination>
</template>

<style scoped>

</style>
