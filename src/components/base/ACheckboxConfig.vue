<template>
  <a-checkbox-group v-bind="$attrs" v-on="$listeners">
    <a-row :gutter="10" type="flex" align="middle">
      <a-col v-for="option in options" v-bind="config.layout || { span: 8 }" :key="option.value">
        <a-checkbox :value="option.value">
          {{ option.label }}
        </a-checkbox>
      </a-col>
    </a-row>
  </a-checkbox-group>
</template>

<script>
export default {
  name: 'ACheckboxConfig',
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
    options() {
      const { $attrs } = this
      return $attrs.options
    }
  },
  methods: {}
}
</script>

<style scoped></style>
