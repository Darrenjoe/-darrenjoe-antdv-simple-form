export const formListBaseNew = [
  {
    name: 'input',
    label: 'Input',
    type: 'default',
    component: 'AInput',
    defaultValue: '',
    props: {},
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'select',
    label: 'Select',
    type: 'default',
    component: 'ASelect',
    defaultValue: '',
    props: {
      options: [
        {
          label: 'NEW',
          value: 'NEW'
        },
        {
          label: 'DELETE',
          value: 'DEL'
        }
      ]
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'radioGroup',
    label: 'radioGroup',
    type: 'default',
    component: 'ARadioGroup',
    defaultValue: '',
    props: {
      options: [
        {
          label: 'NEW',
          value: 'NEW'
        },
        {
          label: 'DELETE',
          value: 'DEL'
        }
      ]
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'checkboxGroup',
    label: 'Checkbox Group',
    type: 'default',
    component: 'ACheckboxGroup',
    defaultValue: '',
    slotList: [],
    props: {
      options: [
        {
          label: 'NEW',
          value: 'NEW'
        },
        {
          label: 'DELETE',
          value: 'DEL'
        }
      ]
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'checkboxConfig',
    label: 'A Checkbox Config',
    type: 'default',
    component: 'ACheckboxConfig',
    defaultValue: '',
    props: {
      options: [
        {
          label: 'NEW',
          value: 'NEW'
        },
        {
          label: 'DELETE',
          value: 'DEL'
        }
      ]
    },
    config: {
      layout: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
    },
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'inputNumber',
    label: 'Input Number',
    type: 'default',
    component: 'AInputNumber',
    defaultValue: '',
    props: {
      style: { width: '100%' },
      formatter: value => `$ ${value} % `
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'textarea',
    label: 'Textarea',
    type: 'default',
    component: 'AInput',
    defaultValue: '',
    props: {
      type: 'textarea',
      rows: 1
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'datesingle',
    label: 'Date Single',
    type: 'default',
    component: 'ADatePicker',
    defaultValue: '',
    props: {},
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'daterange',
    label: 'Date Range',
    type: 'default',
    component: 'ARangePicker',
    defaultValue: '',
    props: {},
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'cascader',
    label: 'Cascader',
    type: 'default',
    component: 'ACascader',
    defaultValue: '',
    props: {
      options: 'cascader'
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'autocomplete',
    label: 'Auto Complete',
    type: 'default',
    component: 'AAutocompleteConfig',
    defaultValue: '',
    props: {
      dataSource: 'autocomplete',
      dropdownClassName: 'dropdown-table-cutomer',
      dropdownStyle: { minWidth: '300px' },
      dropdownMatchSelectWidth: false,
      optionLabelProp: 'value'
    },
    config: {
      autocompleteSlotType: 'table',
      autocompleteSlotTableConfig: [
        { title: 'Name', key: 'namecode', span: 8 },
        { title: 'Code', key: 'uncode', span: 8 },
        { title: 'Size', key: 'sizecode', span: 8 }
      ],
      autocompleteSlotName: 'autocomplete',
      buttonConfig: {
        icon: 'edit'
      }
    },
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'baseInputGroup',
    label: 'Base Input Group ',
    type: 'default',
    component: 'BaseInputGroup',
    defaultValue: '',
    props: {},
    config: {
      layout: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }
    },
    events: {},
    customRender: [
      {
        name: 'baseInputGroup',
        component: 'AInput',
        props: {},
        config: {},
        events: {}
      },
      {
        name: 'baseselect',
        component: 'ASelect',
        props: {
          options: [
            { label: 'New', value: 'New' },
            { label: 'Delete', value: 'Delete' }
          ]
        },
        config: {
          layout: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }
        },
        events: {}
      },
      {
        name: 'basedatesingle',
        component: 'ADatePicker',
        props: {},
        config: {
          // layout: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
          layout: { xs: 8, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8 }
        },
        events: {}
      },
      {
        name: 'button',
        component: 'AButtonConfig',
        props: {
          text: '',
          icon: 'search',
          title: 'Search'
        },
        config: {
          layout: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 }
        },
        events: {
          click: 'handleAutoCompleteClick'
        }
      }
    ],
    isShow: true
  },
  {
    name: 'buttonSingle',
    label: 'Button Single',
    type: 'default',
    component: 'AButtonConfig',
    defaultValue: '',
    props: {
      text: '',
      icon: 'setting',
      title: 'setting'
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'autoInputContact',
    label: 'Auto Input',
    type: 'default',
    component: 'BaseInputGroup',
    defaultValue: '',
    props: {},
    config: {},
    events: {},
    customRender: [
      {
        name: 'autoInputContact',
        component: 'AAutocompleteConfig',
        props: {
          dataSource: 'autoInputContact',
          dropdownClassName: 'dropdown-table-cutomer',
          dropdownStyle: { minWidth: '300px' },
          dropdownMatchSelectWidth: false,
          optionLabelProp: 'value'
        },
        config: {
          layout: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 },
          autocompleteSlotType: 'table',
          autocompleteSlotTableConfig: [
            { title: 'Name', key: 'namecode', span: 8 },
            { title: 'Code', key: 'uncode', span: 8 },
            { title: 'Size', key: 'sizecode', span: 8 }
          ],
          autocompleteSlotName: 'autoInputContact',
          buttonConfig: {
            icon: 'edit'
          }
        },
        events: {}
      },
      {
        name: 'baseselect',
        component: 'ASelect',
        props: {
          options: [
            { label: '1234', value: '1234' },
            { label: '3333', value: '3333' }
          ]
        },
        config: {
          layout: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
        },
        events: {}
      }
    ],
    isShow: true
  },
  {
    name: 'slider',
    label: 'Slider',
    type: 'default',
    component: 'ASlider',
    defaultValue: '',
    props: {
      range: true,
      dots: true,
      step: 20
    },
    config: {},
    events: {},
    customRender: [],
    isShow: true
  },
  {
    name: 'basetimepikcer',
    label: 'Time & Slider',
    type: 'default',
    component: 'BaseInputGroup',
    defaultValue: '',
    props: {},
    config: {},
    events: {},
    customRender: [
      {
        name: 'basetimepikcer',
        component: 'ATimePicker',
        props: {},
        config: {
          layout: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
        },
        events: {}
      },
      {
        name: 'baseswitch',
        component: 'ASwitch',
        props: {},
        config: {
          layout: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
        },
        events: {}
      }
    ],
    isShow: true
  }
]

// 表单规则
export const formRulesNew = {
  input: [{ required: true, message: 'Please input checkbox' }],
  select: [{ required: true, message: 'Please input Vessel' }],
  radio: [{ required: true, message: 'Please input Carrier SCAC' }],
  radioGroup: [{ required: true, message: 'Please input Flag' }],
  checkbox: [{ required: true, message: 'Please input Voyage' }],
  checkboxGroup: [{ required: true, message: 'Please input Action' }],
  inputNumber: [{ required: true, message: 'Please input M_BOL' }],
  textarea: [{ required: true, message: 'Please input H_BOL' }],
  datesingle: [{ required: true, message: 'Please input E.T.A' }],
  daterange: [{ required: true, message: 'Please input Place_Of_Receipt' }],
  autocomplete: [{ required: true, message: 'Please input Port_Of_Loading' }],
  baseselect: [{ required: true, message: 'Please input Port_Of_Discharge' }],
  baseInputGroup: [{ required: true, message: 'Please input Port_Of_Discharge' }],

  checkboxConfig: [{ required: true, message: 'Please input Action' }]
}

export const dataSource = {
  autoInputContact: [{ text: 'new1', value: 'new1', namecode: 'Name1', uncode: 'uncode1', sizecode: 'sizecode1' }],
  autocomplete: [
    { text: 'new1', value: 'new1', namecode: 'Name1', uncode: 'uncode1', sizecode: 'sizecode1' },
    { text: 'new2', value: 'new2', namecode: 'Name2', uncode: 'uncode2', sizecode: 'sizecode2' },
    { text: 'new3', value: 'new3', namecode: 'Name3', uncode: 'uncode3', sizecode: 'sizecode3' }
  ],
  cascader: [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }
          ]
        }
      ]
    }
  ]
}

export const layoutRender = [
  { x: 0, y: 0, w: 4, h: 1, i: 'input' },
  { x: 0, y: 0, w: 4, h: 1, i: 'select' },
  { x: 4, y: 0, w: 4, h: 1, i: 'radioGroup' },
  { x: 8, y: 0, w: 4, h: 1, i: 'checkboxGroup' },
  { x: 0, y: 1, w: 4, h: 1, i: 'checkboxConfig' },
  { x: 4, y: 1, w: 4, h: 1, i: 'inputNumber' },
  { x: 8, y: 1, w: 4, h: 1, i: 'textarea' },
  { x: 0, y: 2, w: 4, h: 1, i: 'datesingle' },
  { x: 4, y: 2, w: 4, h: 1, i: 'daterange' },
  { x: 8, y: 2, w: 4, h: 1, i: 'cascader' },
  { x: 0, y: 3, w: 6, h: 1, i: 'autocomplete' },
  { x: 6, y: 3, w: 6, h: 1, i: 'baseInputGroup' },
  { x: 0, y: 4, w: 6, h: 1, i: 'buttonSingle' },
  { x: 6, y: 4, w: 6, h: 1, i: 'autoInputContact' },
  { x: 6, y: 4, w: 6, h: 1, i: 'slider' },
  { x: 6, y: 4, w: 6, h: 1, i: 'basetimepikcer' }
]
