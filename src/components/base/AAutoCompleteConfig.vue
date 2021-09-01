<template>
  <a-auto-complete v-bind="$attrs" v-on="inputEvents">
    <template slot="dataSource">
      <slot :name="config.autocompleteSlotName || ''">
        <template v-if="config.autocompleteSlotType === 'table'">
          <a-select-opt-group :key="configs.name">
            <a-row type="flex" slot="label" align="middle">
              <a-col
                v-for="optionLabel in config.autocompleteSlotTableConfig"
                :key="optionLabel.key"
                :span="optionLabel.span"
              >
                <p>{{ optionLabel.title }}</p>
              </a-col>
            </a-row>
            <a-select-option v-for="option in configs.props.dataSource" :key="option.value" :value="option.text">
              <a-row type="flex" align="middle">
                <a-col
                  v-for="optionLabel in config.autocompleteSlotTableConfig"
                  :key="optionLabel.key"
                  :span="optionLabel.span"
                >
                  {{ option[optionLabel.key] }}
                </a-col>
              </a-row>
            </a-select-option>
          </a-select-opt-group>
        </template>

        <template v-else>
          <a-select-option v-for="option in configs.props.dataSource" :key="option.value" :value="option.text">
            {{ option.text }}
          </a-select-option>
        </template>
      </slot>
    </template>
    <a-input v-if="Object.keys(buttonConfig).length">
      <a-button slot="suffix" v-bind="buttonConfig" v-on="buttonEvents">
        {{ buttonConfig.text || '' }}
      </a-button>
    </a-input>
  </a-auto-complete>
</template>

<script>
export default {
  name: 'AAutoCompleteConfig',
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
    return {
      buttonDefaulConfig: {
        size: this.$attrs.size || 'small',
        style: { marginRight: '-12px' },
        type: 'primary',
        icon: 'search'
      }
    }
  },
  mounted() {},
  computed: {
    config() {
      return this.configs.config
    },
    buttonConfig() {
      if (!this.config.buttonConfig) return {}
      return { ...this.buttonDefaulConfig, ...this.config.buttonConfig }
    },
    inputEvents() {
      const { $listeners } = this
      const events = {}
      for (const event in $listeners) {
        if (event.indexOf('button-') === -1) events[event] = $listeners[event]
      }
      return events
    },
    buttonEvents() {
      const { $listeners } = this
      const events = {}
      for (const event in $listeners) {
        if (event.indexOf('button-') !== -1) {
          events[event.split('-')[1]] = $listeners[event]
        }
      }
      return { click: () => this.handleSearchClick(), ...events }
    }
  },
  methods: {
    handleSearchClick() {
      this.$emit('on-button-click', this.configs)
    }
  }
}
</script>

<style scoped></style>
