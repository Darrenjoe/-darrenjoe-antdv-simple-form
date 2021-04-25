<!--
 * @Author: your name
 * @Date: 2021-01-19 09:37:01
 * @LastEditTime: 2021-01-22 17:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \emanifest\src\components\EMFormList\BaseAutoComplete.vue
-->
<template>
  <a-row :gutter="5" type="flex">
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
        <a-input v-decorator="[formItem.slotList[index].name]" v-bind="{ ...formItem.props, ...slotItem.props }" />
      </a-form-item>
      <a-form-item style="width: 100%" :wrapper-col="{ span: 24 }" v-if="index === formItem.slotList.length - 1">
        <a-input v-decorator="[formItem.slotList[index].name]" v-bind="{ ...formItem.props, ...slotItem.props }">
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
</template>

<script>
export default {
  name: 'BaseAutoComplete',
  props: {
    formAll: {
      type: Object,
      default: () => {}
    },
    propsList: {
      type: Object,
      default: () => {}
    },
    slotList: {
      type: Array,
      default: () => []
    },
    dataSourceData: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // forms: {}
    }
  },
  computed: {
    forms() {
      return this.formAll
    },
    dataSource() {
      return this.dataSourceData
    },
    name() {
      return this.slotList[1].name
    }
  },
  mounted() {},
  methods: {
    handleBaseAutoSelect(value) {
      this.$emit('handleBaseAutoSelect', value, this.name, 'baseAutocomplete')
    },
    handleBaseAutoSearch(value) {
      this.$emit('handleBaseAutoSearch', value, this.name, 'baseAutocomplete')
    },
    handleBaseAutoChange(value) {
      this.$emit('handleBaseAutoChange', value, this.name)
    },
    handleClickSearch() {
      this.$emit('baseAutoCompleteClick', this.name, 'baseAutocomplete')
    },
    _upFormAll() {
      this.$emit('update:formAll', this.forms)
    }
  }
}
</script>

<style lang="less" scoped></style>
