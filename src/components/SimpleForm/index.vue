<template>
  <a-form
    layout="inline"
    :form="form"
    :label-col="formLayout.labelCol"
    :wrapper-col="formLayout.wrapperCol"
    :selfUpdate="true"
  >
    <a-row :gutter="20" type="flex">
      <a-col
        :xs="formLayout.xs"
        :sm="formLayout.sm"
        :md="formLayout.md"
        :lg="formLayout.lg"
        :xl="formLayout.xl"
        :xxl="formLayout.xxl"
        v-for="formItem in formItems"
        v-show="formItem._isShow"
        :key="formItem.name"
      >
        <a-form-item
          :label="formItem.label"
          :prop="formItem.name"
          style="width: 100%"
          :class="formItem.config.className"
        >
          <a-input
            v-if="formItem.type == 'a-input'"
            v-decorator="[
              formItem.name,
              {
                rules: formItem.rules,
                normalize: formItem.config.normalize ? formItem.config.normalize : ''
              }
            ]"
            :options="formItem.options"
            v-bind="formItem.props"
            @blur="handleFormItemBlur($event, formItem.name)"
          />

          <a-select
            v-else-if="formItem.type == 'a-select'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            :options="formItem.options"
            v-bind="formItem.props"
          >
          </a-select>

          <a-radio-group
            v-else-if="formItem.type == 'a-radio'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            :options="formItem.options"
            v-bind="formItem.props"
          ></a-radio-group>

          <a-checkbox-group
            v-else-if="formItem.type == 'a-checkbox'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            :options="formItem.options"
            v-bind="formItem.props"
          >
          </a-checkbox-group>

          <a-checkbox-group
            v-else-if="formItem.type == 'a-checkbox-config'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            v-bind="formItem.props"
          >
            <a-row :gutter="10" type="flex" align="middle">
              <a-col v-for="option in formItem.options" :span="formItem.config.span" :key="option.value">
                <a-checkbox :value="option.value">
                  {{ option.label }}
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>

          <a-input-search
            v-if="formItem.type == 'input-of-btn'"
            v-decorator="[
              formItem.name,
              {
                rules: formItem.rules,
                normalize: formItem.config && formItem.config.normalize ? formItem.config.normalize : ''
              }
            ]"
            :options="formItem.options"
            v-bind="formItem.props"
            @blur="handleFormItemBlur($event, formItem.name)"
            @search="handleAutoCompleteClick(formItem.name, 'input-of-btn')"
          >
            <a-button slot="enterButton" type="primary">
              <a-icon :type="formItem.config.icon ? formItem.config.icon : 'search '" />
            </a-button>
          </a-input-search>

          <!-- select-of-btn组件 -->
          <a-row v-else-if="formItem.type == 'select-of-btn'" :gutter="5" type="flex">
            <a-col :span="22">
              <a-select
                v-decorator="[formItem.name, { rules: formItem.rules }]"
                :options="formItem.options"
                v-bind="formItem.props"
              >
              </a-select>
            </a-col>
            <a-col :span="2">
              <a-button
                v-bind="formItem.props"
                type="primary"
                @click.stop="handleAutoCompleteClick(formItem.name, 'select-of-btn')"
              >
                <a-icon :type="formItem.config.icon ? formItem.config.icon : 'search '" />
              </a-button>
            </a-col>
          </a-row>

          <a-date-picker
            v-else-if="formItem.type == 'a-date-picker'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            format="MM/DD/YYYY"
            valueFormat="MM/DD/YYYY"
            :options="formItem.options"
            v-bind="formItem.props"
          />

          <a-range-picker
            v-else-if="formItem.type == 'a-range-picker'"
            show-time
            format="MM/DD/YYYY"
            valueFormat="MM/DD/YYYY"
            :value="[myForm[formItem.name.split(';')[0]], myForm[formItem.name.split(';')[1]]]"
            @change="dateChange($event, formItem.name)"
            :options="formItem.options"
            v-bind="formItem.props"
          >
          </a-range-picker>

          <!-- 此处为了初始化复合时间值 -->
          <div v-if="formItem.type === 'a-range-picker'">
            <a-input v-show="false" v-decorator="[formItem.name.split(';')[0]]" />
            <a-input v-show="false" v-decorator="[formItem.name.split(';')[1]]" />
          </div>

          <!-- select-of-tree -->
          <a-tree-select
            v-else-if="formItem.type == 'select-of-tree'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            :options="formItem.options"
            v-bind="formItem.props"
            :tree-data="autoCompleteSourceData(formItem.name)"
            tree-checkable
          />

          <a-auto-complete
            v-else-if="formItem.type == 'a-auto-complete'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            :options="formItem.options"
            v-bind="formItem.props"
            :data-source="autoCompleteSourceData(formItem.name)"
            @select="handleAutoSelect($event, formItem.name, 'autocomplete')"
            @search="handleAutoSearch($event, formItem.name, 'autocomplete')"
            @change="handleAutoChange($event, formItem.name)"
            :dropdown-match-select-width="false"
            option-label-prop="value"
            :dropdown-class-name="formItem.config.dropdownClassName ? formItem.config.dropdownClassName : ''"
            :dropdown-style="formItem.config.dropdownStyle ? formItem.config.dropdownStyle : {}"
          >
            <template slot="dataSource">
              <slot
                :name="
                  'autoCompleteSlot' +
                    (formItem.config.autoCompleteName ? formItem.config.autoCompleteName : formItem.name)
                "
              >
                <a-select-option v-for="option in autoCompleteSourceData(formItem.name)" :key="option.value">
                  {{ option.label }}
                </a-select-option>
              </slot>
            </template>
            <a-input :size="formItem.props.size">
              <a-button
                v-show="formItem.config.showButton === false ? false : true"
                @click.stop="handleAutoCompleteClick(formItem.name, 'autocomplete')"
                slot="suffix"
                style="margin-right: -12px"
                size="small"
                type="primary"
              >
                <a-icon type="search" />
              </a-button>
            </a-input>
          </a-auto-complete>
          <a-input-number
            v-else-if="formItem.type == 'a-input-number'"
            v-decorator="[formItem.name, { rules: formItem.rules }]"
            :options="formItem.options"
            v-bind="formItem.props"
          />
          <a-row v-else-if="formItem.type == 'input-group'" :gutter="5" type="flex">
            <a-col
              v-for="(slotItem, index) in formItem.slotList"
              :span="slotItem.config.span ? slotItem.config.span : 24 / formItem.slotList.length"
              :key="index"
            >
              <a-input
                v-if="slotItem.type === 'input' && index === 0"
                v-decorator="[slotItem.name, { rules: formItem.rules }]"
                v-bind="{ ...formItem.props, ...slotItem.props }"
                @blur="handleFormItemBlur($event, slotItem.name)"
              />
              <a-select
                v-if="slotItem.type === 'select' && index === 0"
                v-decorator="[slotItem.name, { rules: formItem.rules }]"
                :options="slotItem.options"
                v-bind="{ ...formItem.props, ...slotItem.props }"
              />
              <a-form-item style="width: 100%" :wrapper-col="{ span: 24 }" v-if="index !== 0">
                <a-input
                  v-if="slotItem.type === 'input'"
                  v-decorator="[slotItem.name, { rules: formItem.rules }]"
                  v-bind="{ ...formItem.props, ...slotItem.props }"
                  @blur="handleFormItemBlur($event, slotItem.name)"
                />
                <a-select
                  v-if="slotItem.type === 'select'"
                  v-decorator="[slotItem.name, { rules: formItem.rules }]"
                  :options="slotItem.options"
                  v-bind="{ ...formItem.props, ...slotItem.props }"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <!-- 原baseAutoCompelete组件 -->
          <a-row v-else-if="formItem.type == 'ba-autocomplete'" :gutter="5" type="flex">
            <a-col
              :span="slotItem.config.span ? slotItem.config.span : 24 / formItem.slotList.length"
              v-for="(slotItem, index) in formItem.slotList"
              :key="index"
            >
              <a-auto-complete
                v-decorator="[formItem.slotList[index].name, { rules: formItem.rules }]"
                v-bind="{ ...formItem.props, ...slotItem.props }"
                :dataSourceData="autoCompleteSourceData(formItem.name)"
                @select="handleAutoSelect($event, formItem.name, 'baseAutocomplete', formItem.config.autoCompleteName)"
                @search="handleAutoSearch($event, formItem.name, 'baseAutocomplete')"
                @change="handleAutoChange($event, formItem.name)"
                @blur="handleFormItemBlur($event, formItem.name)"
                v-if="index === 0"
                :dropdown-match-select-width="false"
                option-label-prop="value"
                :dropdown-class-name="formItem.config.dropdownClassName ? formItem.config.dropdownClassName : ''"
                :dropdown-style="formItem.config.dropdownStyle ? formItem.config.dropdownStyle : {}"
              >
                <template slot="dataSource">
                  <slot
                    :name="
                      'baseAutoCompleteSlot' +
                        (formItem.config.autoCompleteName ? formItem.config.autoCompleteName : formItem.name)
                    "
                  >
                    <a-select-option
                      v-for="option in autoCompleteSourceData(formItem.name)"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </a-select-option>
                  </slot>
                </template>
              </a-auto-complete>
              <a-form-item style="width: 100%" v-if="index !== 0 && index !== formItem.slotList.length - 1">
                <a-input
                  v-decorator="[formItem.slotList[index].name]"
                  v-bind="{ ...formItem.props, ...slotItem.props }"
                />
              </a-form-item>
              <a-form-item
                style="width: 100%"
                :wrapper-col="{ span: 24 }"
                v-if="index === formItem.slotList.length - 1"
              >
                <a-input
                  v-decorator="[formItem.slotList[index].name]"
                  v-bind="{ ...formItem.props, ...slotItem.props }"
                >
                  <a-button
                    @click.stop="handleAutoCompleteClick(formItem.name, 'baseAutocomplete')"
                    slot="suffix"
                    style="margin-right: -12px"
                    size="small"
                    type="primary"
                    v-show="formItem.config.showSearch === false ? false : true"
                  >
                    <a-icon type="search" style="color:white" />
                  </a-button>
                </a-input>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
// 公共表单组件
import { computeFormItem } from './core'

import moment from 'moment'

export default {
  name: 'SimpleForm',
  props: {
    myForm: {
      type: Object,
      default: () => {}
    },
    formRenderList: {
      type: Array,
      default: () => []
    },
    formRules: {
      type: Object,
      default: () => {}
    },
    formLayout: {
      type: Object,
      default: () => {
        return {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 12,
          xl: 12,
          xxl: 12,
          labelCol: { span: 8 },
          wrapperCol: { span: 16 }
        }
      }
    },
    autoCompleteSource: {
      type: Object,
      default: () => {}
    },
    // 额外的配置项目
    configList: {
      type: Object,
      default: () => {}
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
      return this.formRenderList.map(item => computeFormItem(item, this.myForm, this.formRules))
    }
  },
  methods: {
    // blur事件
    handleFormItemBlur(e, name) {
      this.$emit('handleFormItemBlur', name)
    },
    // 范围时间框赋值
    dateChange(date, dateString) {
      const startLabel = dateString.split(';')[0]
      const endLabel = dateString.split(';')[1]

      if (this.isAsyncFormFlag) return
      this.formCreate = false

      this.myForm[startLabel] = date[0]
      this.myForm[endLabel] = date[1]

      // 完成赋值以后再放开监听限制
      this.$nextTick(() => {
        this.formCreate = true
      })
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
        this.$emit('handleFormItemChange', name, value)
      })
    },
    // 获取表单所有字段
    _getFieldsValue() {
      return this.form.getFieldsValue()
    },
    autoCompleteSourceData(name) {
      const hasKeys = Object.keys(this.autoCompleteSource)
      if (hasKeys.includes(name)) return this.autoCompleteSource[name]
      return []
    },
    handleAutoSelect(value, name, type, autoCompleteName) {
      const { autoCompleteSource } = this
      let option = {}
      const hasKeys = Object.keys(autoCompleteSource)
      const optionName = autoCompleteName || name
      if (hasKeys.includes(optionName)) {
        autoCompleteSource[optionName].forEach(item => {
          if (item.id === value) {
            option = item
          }
        })
      }
      this.formCreate = true // 设置值的时候需要将初始化标签打开
      this.$emit('handleAutoSelect', value, option, name, type)
    },
    handleAutoSearch(value, name, type) {
      this.$emit('handleAutoSearch', value, name, type)
    },
    handleAutoChange(value, name) {
      this.$emit('handleAutoChange', value, name)
    },
    // AutoComplete的按钮被点击的事件
    handleAutoCompleteClick(name, type) {
      this.$emit('handleAutoCompleteClick', name, type)
    },
    // 验证提交
    submit() {
      const opitons = {
        force: true
      }
      let result
      this.form.validateFieldsAndScroll(opitons, err => {
        if (!err) {
          result = this._getFieldsValue()
        } else {
          result = false
        }
      })
      return result
    },
    reset() {
      this.form.resetFields()
    },
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
    },
    moment
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
  }
}
</script>

<style scpoed>
.isRequired .ant-select-search__field:not([disabled='disabled']) {
  background-color: #fcefe8;
}
.isRequired .ant-input:not([disabled='disabled']) {
  background-color: #fcefe8;
}
.isRequired .ant-select-selection:not([disabled='disabled']) {
  background-color: #fcefe8;
}
.ant-select-selection--multiple .ant-select-selection__rendered {
  margin-right: 20px;
  overflow: hidden;
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
