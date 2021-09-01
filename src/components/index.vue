<template>
  <a-form layout="inline" :form="form" :label-col="formLayout.labelCol" :wrapper-col="formLayout.wrapperCol">
    <grid-layout v-if="isGirdLayout" :layout.sync="gridLayout" v-bind="gridProps">
      <grid-item
        class="grid-item-cutomer"
        v-for="formItem in formItems"
        :x="formItem.layout.x"
        :y="formItem.layout.y"
        :w="formItem.layout.w"
        :h="formItem.layout.h"
        :i="formItem.layout.i"
        :key="formItem.name"
      >
        <a-form-item
          :label="!hasVi18n ? formItem.label : $t(formItem.label)"
          :prop="formItem.name"
          style="width: 100%"
          :class="formItem.config.className"
        >
          <component
            :is="formItem.component"
            v-decorator="[
              formItem.name,
              {
                ...formItem.config.decorator,
                rules: formItem.rules
              }
            ]"
            :configs="formItem"
            :form="form"
            v-bind="formItem.props"
            v-on="formItem.events"
          >
            <template
              v-if="formItem.component === 'a-auto-complete-config' && formItem.config.autocompleteSlotName"
              :slot="formItem.config.autocompleteSlotName"
            >
              <slot :name="formItem.config.autocompleteSlotName"></slot>
            </template>
          </component>
        </a-form-item>
      </grid-item>
    </grid-layout>
    <a-row v-else :gutter="20" type="flex">
      <a-col
        :xs="formLayout.xs"
        :sm="formLayout.sm"
        :md="formLayout.md"
        :lg="formLayout.lg"
        :xl="formLayout.xl"
        :xxl="formLayout.xxl"
        v-for="formItem in formItems"
        v-show="formItem.isShow"
        :key="formItem.name"
      >
        <a-form-item
          :label="!hasVi18n ? formItem.label : $t(formItem.label)"
          :prop="formItem.name"
          style="width: 100%"
          :class="formItem.config.className"
        >
          <component
            :is="formItem.component"
            v-decorator="[
              formItem.name,
              {
                ...formItem.config.decorator,
                rules: formItem.rules
              }
            ]"
            :configs="formItem"
            :form="form"
            v-bind="formItem.props"
            v-on="formItem.events"
          >
            <template
              v-if="formItem.component === 'a-auto-complete-config' && formItem.config.autocompleteSlotName"
              :slot="formItem.config.autocompleteSlotName"
            >
              <slot :name="formItem.config.autocompleteSlotName"></slot>
            </template>
          </component>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
// import { GridLayout, GridItem } from 'vue-grid-layout'
// 公共表单组件
import { layoutDefault, gridDefaultProps } from './layout'
import { computeFormItem } from './core'
import ACheckboxConfig from './base/ACheckboxConfig.vue'
import AAutoCompleteConfig from './base/AAutoCompleteConfig.vue'
import BaseInputGroup from './base/BaseInputGroup.vue'
import AButtonConfig from './base/AButtonConfig.vue'

export default {
  name: 'EmFormList',
  inheritAttrs: false,
  props: {
    /**
     * 表单数据
     */
    myForm: {
      type: Object,
      default: () => {}
    },
    /**
     * 表单数据渲染列表
     */
    formRenderList: {
      type: Array,
      default: () => []
    },
    /**
     * 表单验证规则增加
     */
    formRules: {
      type: Object,
      default: () => {}
    },
    /**
     * 表单默认栅格排列规则
     */
    formLayout: {
      type: Object,
      default: () => {
        return layoutDefault
      }
    },
    /**
     * 表单下拉选项的动态配置
     */
    autoCompleteSource: {
      type: Object,
      default: () => {}
    },
    /**
     * grid-layout拖拽布局组件的item配置
     */
    gridLayout: {
      type: Array,
      default: () => []
    },
    /**
     * grid-layout拖拽布局props属性
     */
    gridConfigs: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      form: this.$form.createForm(this, {
        onFieldsChange: (_, changedFields) => {
          this.formItemValueChange(changedFields)
        }
      }),
      formCreate: false,
      isAsyncFormFlag: true // 设置同步标签，防止过度操作
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.formCreate = true

      this.isAsyncFormFlag = true
      this._setFormData(this.myForm)
    })
  },
  computed: {
    formItems() {
      const vm = this
      const { gridLayout } = this
      const layoutMap = {}
      gridLayout.forEach(item => {
        layoutMap[item.i] = item
      })
      return this.formRenderList.map(config => computeFormItem(vm, config, layoutMap))
    },
    isGirdLayout() {
      return !!Object.keys(this.gridLayout).length
    },
    gridProps() {
      return { ...gridDefaultProps, ...this.gridConfigs }
    },
    hasVi18n() {
      return !!this.$i18n
    }
  },
  methods: {
    // 自定义事件
    handleCustomEvents(e, configs) {
      this.$emit('on-custom', configs)
    },
    // blur事件
    handleFormItemBlur(e, configs) {
      this.$emit('on-blur', configs)
    },
    // focus事件
    handleFormItemFocus(e, configs) {
      this.$emit('on-focus', configs)
    },
    // 值改变时同步
    formItemValueChange(field) {
      if (this.isAsyncFormFlag) return

      const key = Object.keys(field)[0]
      const fromItem = field[key]
      const { name, value } = fromItem

      if (this.myForm[name] === value) return

      this.formCreate = false

      this.myForm[name] = value

      // 完成赋值以后再放开监听限制
      this.$nextTick(() => {
        this.formCreate = true
        // 返回change事件
        this.$emit('on-change', name, value)
      })
    },
    // 获取表单所有字段
    _getFieldsValue() {
      return this.form.getFieldsValue()
    },
    // 匹配下拉等数据
    autoCompleteSourceData(name) {
      const hasKeys = Object.keys(this.autoCompleteSource)
      if (hasKeys.includes(name)) return this.autoCompleteSource[name]
      return []
    },
    // 自动完成选中事件
    handleAutoSelect(value, config) {
      const { name } = config
      const { autoCompleteSource } = this
      let option = {}
      const hasKeys = Object.keys(autoCompleteSource)
      const optionName = name
      if (hasKeys.includes(optionName)) {
        autoCompleteSource[optionName].forEach(item => {
          if (item.value === value) {
            option = item
          }
        })
      }
      this.formCreate = true // 设置值的时候需要将初始化标签打开
      this.$emit('on-auto-select', { value, option, name })
    },
    // 自动完成查询事件
    handleAutoSearch(value, config) {
      const { name } = config
      this.$emit('on-auto-search', { value, name })
    },
    // 所有按钮被点击的事件
    handleAutoCompleteClick(e, configs) {
      this.$emit('on-button-click', configs)
    },
    // 验证提交
    submit() {
      const opitons = {
        force: true
      }
      let result
      this.form.validateFieldsAndScroll(opitons, err => {
        result = !err
      })
      return result
    },
    // 重置表单事件
    reset() {
      this.form.resetFields()
    },
    // 清空表单事件
    clear() {
      this.form.clearValidate()
    },
    setForm(form) {
      for (const key in form) {
        this.form[key] = form[key]
      }
    },
    _upDateAutoCompleteSource(data) {
      this.$emit('update:autoCompleteSource', data)
    },
    // 插入表单值
    _setFormData(formData) {
      const formKeys = Object.keys(this._getFieldsValue())
      const setObj = {}
      for (const item in formData) {
        if (formKeys.includes(item)) {
          setObj[item] = formData[item]
        }
      }
      this.form.setFieldsValue(setObj)

      this.isAsyncFormFlag = false // 完成以后关掉同步标记
    }
  },
  watch: {
    myForm: {
      handler(newVal) {
        // 表单未初始化则跳过
        if (!this.formCreate) return
        this.isAsyncFormFlag = true
        // 比对值，如果有变动就重置表单
        this._setFormData(newVal)
      },
      deep: true
    }
  },
  components: {
    // GridLayout,
    // GridItem,
    ACheckboxConfig,
    AAutoCompleteConfig,
    BaseInputGroup,
    AButtonConfig
  }
}
</script>

<style scpoed>
.ant-form-inline .ant-form-item-with-help {
  margin-bottom: 0;
}
.isRequired .ant-select-search__field:not([disabled='disabled']) {
  background-color: #fcefe8;
}
.isRequired .ant-input:not([disabled='disabled']) {
  background-color: #fcefe8;
}
.isRequired .ant-select-selection:not([disabled='disabled']) {
  background-color: #fcefe8;
}

.ant-select-dropdown.dropdown-table-cutomer {
  width: auto !important;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item-group-title {
  border-bottom: 1px solid #e8e8e8;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item-group-title .ant-col {
  border-right: 1px solid #e8e8e8;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 14px;
  text-align: left;
  padding: 0 5px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item-group-title .ant-col p {
  margin: 0;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item-group-title .ant-col p:last-child {
  border-right: none;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item {
  padding: 5px 12px;
  border-bottom: 1px solid #e8e8e8;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item .ant-col {
  border-right: 1px solid #e8e8e8;
  padding: 0 5px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item .ant-col p {
  margin: 0;
}
.ant-select-dropdown.dropdown-table-cutomer .ant-select-dropdown-menu-item .ant-col p:last-child {
  border-right: none;
}
</style>
