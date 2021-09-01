const SIZE = 'small'
export default {
  // 默认输入类型
  AInput: {
    // 对应到 antd 中的组件 tag
    component: 'a-input',
    // 传递给 antd 组件的默认 props
    props: {
      size: SIZE,
      clearable: true,
      autocomplete: 'off',
      style: { width: '100%' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },
  ASelect: {
    component: 'a-select',
    props: {
      size: SIZE,
      clearable: true,
      style: { width: '100%' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },
  ARadio: {
    component: 'a-radio',
    props: {
      size: SIZE
    }
  },
  ARadioGroup: {
    component: 'a-radio-group',
    props: {
      size: SIZE
    }
  },
  ACheckbox: {
    component: 'a-checkbox',
    props: {
      size: SIZE,
      clearable: true
    }
  },
  ACheckboxGroup: {
    component: 'a-checkbox-group',
    props: {
      size: SIZE,
      clearable: true
    }
  },
  // 数字输入框
  AInputNumber: {
    component: 'a-input-number',
    props: {
      size: SIZE,
      clearable: true
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },
  ADatePicker: {
    component: 'a-date-picker',
    props: {
      size: SIZE,
      type: 'datetime',
      format: 'MM/DD/YYYY HH:mm:ss',
      valueFormat: 'MM/DD/YYYY HH:mm:ss',
      style: { width: '100%' }
    }
  },
  ARangePicker: {
    component: 'a-range-picker',
    props: {
      size: SIZE,
      type: 'datetime',
      format: 'MM/DD/YYYY HH:mm:ss',
      valueFormat: 'MM/DD/YYYY HH:mm:ss',
      style: { width: '100%' }
    }
  },
  ACascader: {
    component: 'a-cascader',
    props: {
      size: SIZE,
      style: { width: '100%' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },
  ASlider: {
    component: 'a-slider',
    props: {
      size: SIZE,
      style: { width: '100%' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },
  ASwitch: {
    component: 'a-switch',
    props: {
      size: SIZE,
      style: { maxWidth: '100%', width: 'auto' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },
  ATimePicker: {
    component: 'a-time-picker',
    props: {
      size: SIZE,
      style: { width: '100%' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },
  ATreeSelect: {
    component: 'a-tree-select',
    props: {
      size: SIZE,
      style: { width: '100%' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus'
    }
  },

  /**
   * 自定义的组件，部分是做过修改
   */
  ACheckboxConfig: {
    component: 'a-checkbox-config',
    props: {
      size: SIZE,
      style: { width: '100%' },
      clearable: true
    }
  },
  AButtonConfig: {
    component: 'a-button-config',
    props: {
      size: SIZE,
      type: 'primary',
      style: { width: '100%' }
    },
    events: {
      click: 'handleAutoCompleteClick'
    }
  },
  // 自动完成, 原生组件封装过
  AAutocompleteConfig: {
    component: 'a-auto-complete-config',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    },
    events: {
      blur: 'handleFormItemBlur',
      focus: 'handleFormItemFocus',
      search: 'handleAutoSearch',
      select: 'handleAutoSelect',
      'button-click': 'handleAutoCompleteClick'
    }
  },
  BaseInputGroup: {
    component: 'base-input-group',
    props: {
      size: SIZE,
      autocomplete: 'off',
      clearable: true,
      style: { width: '100%' }
    }
  }
}
