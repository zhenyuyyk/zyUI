<script setup>
import {reactive, ref} from "vue";
import {formConfigDefault} from "../../utils/default.js";
import {getType} from "../../utils/utils.js";

const props = defineProps({
  formData: {
    type: Object,
    default: {}
  },
  formConfig: {
    type: Object,
    default: formConfigDefault
  },
  formItemConfig: {
    type: Array,
    default: []
  }
});

const formConfig = reactive({
  ...formConfigDefault,
  ...props.formConfig
});

const form = ref(null);

defineExpose({form});

const contentWidth = (width) => {
  let cc=getType(formConfig.contentWidth) == 'number' ? width + 'px' : width
  console.log(cc)
  return cc;
};
</script>

<template>
  <el-form class="zy_form" ref="form" v-bind="formConfig" :model="props.formData">
    <el-form-item v-bind="item" v-for="item in props.formItemConfig" :style="{width:contentWidth(formConfig.contentWidth)}">
      <el-input class="item_width" v-if="item.type==='input'" v-bind="item.attr" v-model="props.formData[item.prop]"/>
      <el-input-number v-if="item.type==='number'" v-bind="item.attr" v-model="props.formData[item.prop]"/>
      <el-radio-group v-if="item.type==='radio'" v-bind="item.attr" v-model="props.formData[item.prop]">
        <el-radio :label="its.value" v-for="its in item.options">{{ its.label }}</el-radio>
      </el-radio-group>
      <el-checkbox-group v-if="item.type==='checkbox'" v-bind="item.attr" v-model="props.formData[item.prop]">
        <el-checkbox :label="its.value" v-for="its in item.options">{{ its.label }}</el-checkbox>
      </el-checkbox-group>
      <el-rate v-if="item.type==='rate'" v-bind="item.attr" v-model="props.formData[item.prop]"></el-rate>
      <el-select class="item_width" v-if="item.type==='select'" v-bind="item.attr" v-model="props.formData[item.prop]">
        <el-option v-for="its in item.options" :key="its.value" :label="its.label" :value="its.value">
        </el-option>
      </el-select>
      <el-switch v-if="item.type==='switch'" v-bind="item.attr" v-model="props.formData[item.prop]"/>
      <el-cascader style="width: 100%;" v-if="item.type==='cascader'" :options="item.options" v-bind="item.attr"
                   v-model="props.formData[item.prop]"/>
      <el-time-picker style="width: 100%;" v-if="item.type==='timePicker'" v-bind="item.attr"
                      v-model="props.formData[item.prop]"/>
      <el-time-select style="width: 100%;" v-if="item.type==='timeSelect'" v-bind="item.attr"
                      v-model="props.formData[item.prop]"/>
      <el-date-picker style="width: 100%;" v-if="item.type==='date'" v-bind="item.attr"
                      v-model="props.formData[item.prop]"/>
      <div v-if="item.type==='custom'">
        <slot :name="item.prop"></slot>
      </div>
    </el-form-item>
    <el-form-item v-if="formConfig.btnShow">
      <el-button v-for="item in formConfig.btns" v-bind="item.attr" @click="item.clickFun">
        {{ item.label }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.zy_form .el-rate {
  justify-content: flex-start;
}

.zy_form .item_width {
  width: 100% !important;
}
</style>
<style>
.zy_form .el-rate__item {
  display: flex;
}
</style>
