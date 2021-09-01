<template>
  <a-row :gutter="2" type="flex" align="middle">
    <a-col
      v-for="(comp, index) in componentsList"
      v-bind="comp.config.layout || { span: 8 }"
      :key="comp.name"
      style="line-height: 1"
    >
      <component
        v-if="index === 0"
        :is="comp.component"
        :configs="comp"
        v-bind="{ ...$attrs, ...comp.props }"
        v-on="{ ...$listeners, ...comp.events }"
      ></component>
      <component
        v-else-if="comp.component === 'a-button-config'"
        :is="comp.component"
        :configs="comp"
        v-bind="comp.props"
        v-on="comp.events"
      >
      </component>
      <a-form-item v-else :prop="comp.name" style="width: 100%;text-align: center" :class="comp.config.className">
        <component
          :is="comp.component"
          v-decorator="[
            comp.name,
            {
              ...comp.config.decorator
            }
          ]"
          :configs="comp"
          v-bind="comp.props"
          v-on="comp.events"
        >
        </component>
      </a-form-item>
    </a-col>
  </a-row>
</template>

<script>
import AAutoCompleteConfig from './AAutoCompleteConfig.vue'
import AButtonConfig from './AButtonConfig.vue'
export default {
  name: 'ACheckboxConfig',
  inheritAttrs: false,
  props: {
    configs: {
      type: Object,
      default: () => {}
    },
    form: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  mounted() {},
  computed: {
    config() {
      return this.configs.config
    },
    componentsList() {
      return this.configs.customRender
    }
  },
  methods: {},
  components: {
    AAutoCompleteConfig,
    AButtonConfig
  }
}
</script>

<style scoped>
.ant-form-item-control-wrapper {
  width: 100%;
}
</style>
