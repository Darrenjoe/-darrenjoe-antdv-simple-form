<template>
  <div id="app" style="width: 95%;padding: 15px;margin: 0 auto">
    <SimpleForm
      :myForm.sync="formData"
      :formRenderList="formRenderList"
      :formRules="formRules"
      :gridLayout="gridLayout"
      :autoCompleteSource="formDataSource"
      @on-auto-select="handleAutoSelect"
      @on-auto-search="handleAutoSearch"
      @on-button-click="handleAutoCompleteClick"
      @on-change="handleFormItemChange"
      @on-blur="handleFormItemBlur"
      @on-focus="handleFormItemFocus"
    ></SimpleForm>
  </div>
</template>

<script>
import SimpleForm from './components'
import { formListBaseNew, formRulesNew, dataSource, layoutRender } from './utils/mock'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Darren Joe 的组件库',
      formRenderList: formListBaseNew,
      formData: {},
      formRules: formRulesNew,
      gridLayout: layoutRender,
      formDataSource: dataSource
    }
  },
  methods: {
    handleFormItemBlur(configs) {
      console.log(configs)
    },
    handleFormItemFocus(configs) {
      console.log(configs)
    },
    handleFormItemChange(name, value) {
      console.log('change', name, value)
      console.log(this.formData)
    },
    submitFormSave() {
      console.log('提交')
    },
    handleAutoSearch({ value, name }) {
      console.log('Search', value, name)
    },
    handleAutoSelect({ value, option, name }) {
      console.log('Select', value, option, name)
    },
    handleAutoCompleteClick(configs) {
      console.log(configs)
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  },
  components: {
    SimpleForm
  }
}
</script>

<style></style>
