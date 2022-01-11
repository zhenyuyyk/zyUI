<script setup>
const props = defineProps({
  modalValue: {
    type: Array,
    default: []
  },
  config: {
    type: Object,
    default: {
      options: []
    }
  }
});

const emit = defineEmits(['groupChange']);

const groupChange = (value) => {
  emit('change', value);
  emit('update:modalValue', value);
};

</script>

<template>
  <el-checkbox-group v-model="props.modalValue" :size="config.size" :min="config.min" :max="config.max"
                     :text-color="config.textColor" :fill="config.fill" :disabled="config.disabled"
                     @change="groupChange">
    <el-checkbox v-for="item in props.config.options"
                 :label="item.value||item.label"
                 :key="item.value||item.label"
                 :disabled="item.disabled">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<style scoped>

</style>
