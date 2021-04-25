const SIZE = 'small'
export default {
  // 默认输入类型
  input: {
    // 对应到 antd 中的组件 tag
    component: 'a-input',
    // 传递给 antd 组件的默认 props
    props: {
      size: SIZE,
      clearable: true,
      autocomplete: 'off',
      style: { width: '100%' }
    }
  },
  select: {
    component: 'a-select',
    props: {
      size: SIZE,
      clearable: true,
      style: { width: '100%' }
    }
  },
  radio: {
    component: 'a-radio',
    props: {
      size: SIZE
    }
  },
  checkbox: {
    component: 'a-checkbox',
    props: {
      size: SIZE,
      clearable: true
    }
  },
  checkboxConfig: {
    component: 'a-checkbox-config',
    props: {
      size: SIZE,
      style: { width: '100%' },
      clearable: true
    }
  },
  // 数字输入框
  inputNumber: {
    component: 'a-input-number',
    props: {
      size: SIZE,
      clearable: true
    }
  },
  // 多行文本
  textarea: {
    component: 'a-input',
    props: {
      size: SIZE,
      type: 'textarea',
      rows: 3,
      autocomplete: 'off',
      style: { width: '100%' }
    }
  },

  datesingle: {
    component: 'a-date-picker',
    props: {
      size: SIZE,
      type: 'datetime',
      valueFormat: 'timestamp',
      style: { width: '100%' }
    }
  },
  daterange: {
    component: 'a-range-picker',
    props: {
      size: SIZE,
      type: 'datetime',
      valueFormat: 'timestamp',
      style: { width: '100%' }
    }
  },
  // 自动完成
  autocomplete: {
    component: 'a-auto-complete',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    }
  },

  // 自定义的组件
  inputGroup: {
    component: 'input-group',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    }
  },
  baseAutocomplete: {
    component: 'ba-autocomplete',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    }
  },
  inputOfBtn: {
    component: 'input-of-btn',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    }
  },
  selectOfBtn: {
    component: 'select-of-btn',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    }
  },

  treeSelect: {
    component: 'select-of-tree',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    }
  },

  selectInput: {
    component: 'ba-select-input'
  },
  upload: {
    component: 'ba-upload'
  },
  editor: {
    component: 'ba-editor'
  },

  // 插槽内容
  slot: {
    component: 'slot'
  }
}
