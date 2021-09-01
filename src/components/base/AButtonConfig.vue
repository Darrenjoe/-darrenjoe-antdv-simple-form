<template>
  <a-button v-bind="$attrs" v-on="$listeners">
    {{ configs.props.text }}
  </a-button>
</template>

<script>
export default {
  name: 'AButtonConfig',
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
  computed: {},
  methods: {}
}
</script>

<style scoped>
.ant-btn {
  overflow: hidden;
}
</style>
