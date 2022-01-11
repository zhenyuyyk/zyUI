<script setup>
const props = defineProps({
  modalValue: {
    type: String,
    default: ""
  },
  config: {
    type: Object,
    default: {}
  }
});

const emit = defineEmits(['checkboxChange']);

const checkboxChange = (value) => {
  emit("change", value);
  emit("update:modalValue", value);
};

</script>

<template>
  <el-checkbox v-model="props.modalValue" :true-label="config.trueLabel" :false-label="config.falseLabel"
               :disabled="config.disabled" :border="config.border" :size="config.size" :name="config.name"
               :checked="config.checked" :indeterminate="config.indeterminate"
               @change="checkboxChange">
    {{ config.label }}
  </el-checkbox>
</template>

<style scoped>

</style>
