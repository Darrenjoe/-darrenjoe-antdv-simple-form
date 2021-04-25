export const formListBase = [
  {
    name: 'bol',
    label: 'Bill Of Lading',
    type: 'input',
    defaultValue: '',
    options: [],
    slotList: [],
    props: {},
    config: {
      normalize: (value, prevValue, allValues) => {
        if (value) return value.toUpperCase()
      }
    },
    isShow: true
  },
  {
    name: 'bolcode',
    label: 'BOL Code',
    type: 'select',
    defaultValue: '',
    options: [
      { label: 'House Bill of Lading', value: 'BM' },
      { label: 'Ocean Bill of Lading', value: 'OB' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'selectoftree',
    label: 'Select Of Tree',
    type: 'treeSelect',
    defaultValue: '',
    options: [],
    slotList: [],
    props: {},
    config: {},
    isShow: true
  },
  {
    name: 'isftype',
    label: 'ISF Type',
    type: 'select',
    defaultValue: '',
    options: [
      { label: '10+2', value: '10+2' },
      { label: '5+2', value: '5+2' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'is_isfbond',
    label: 'Use ISF Bond',
    type: 'checkbox',
    defaultValue: '',
    options: [{ label: 'If Yes, ISF Bond Holder must be blank and Surety Code required', value: 't' }],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'isf_action',
    label: 'Action',
    type: 'select',
    defaultValue: '',
    options: [
      { label: 'Add', value: 'A' },
      { label: 'Delete', value: 'D' },
      { label: 'Replace', value: 'R' },
      { label: 'CBP SUBMIT', value: '2' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'isf_bondholder',
    label: 'ISF-BondHolder',
    type: 'inputOfBtn',
    defaultValue: '',
    options: [],
    slotList: [],
    props: {},
    config: {
      icon: 'arrow-left'
    },
    isShow: true
  },
  {
    name: 'actiontype',
    label: 'Action Type Code',
    type: 'select',
    defaultValue: '',
    options: [
      { label: '', value: '' },
      { label: 'CT-Complete Transaction', value: 'CT' },
      { label: 'FR-Flexible Range', value: 'FR' },
      { label: 'FT-Flexible Timing', value: 'FT' },
      { label: 'FX-Flexible Range and Flexible Timing', value: 'FX' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'isf_bondactivity',
    label: 'ISF Bond Activity',
    type: 'select',
    defaultValue: '',
    options: [
      { label: '', value: '' },
      { label: '01-Importer or Broker', value: '01' },
      { label: '02-Custodian of Bonded Merchandise', value: '02' },
      { label: '03-International Carrier', value: '03' },
      { label: '04-Foreign Trade Zone Operator', value: '04' },
      { label: '16-ISF Bond', value: '16' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'shipmenttype',
    label: 'Shipment Type Code',
    type: 'select',
    defaultValue: '',
    options: [
      { label: '', value: '' },
      { label: '01-Standard or regular filings', value: '01' },
      { label: '02-To Order Shipments', value: '02' },
      { label: '03-Household Goods/Personal Effects (HHG/PE)', value: '03' },
      { label: '04-Military, Government', value: '04' },
      { label: '05-Diplomatic Shipment', value: '05' },
      { label: '06-Carnet', value: '06' },
      { label: '07-US Goods Returned', value: '07' },
      { label: '08-FTZ Shipments', value: '08' },
      { label: '09-International Mail Shipments', value: '09' },
      { label: '10-Outer Continental Shelf Shipments', value: '10' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'isf_bondtype',
    label: 'ISF Bond Type',
    type: 'select',
    defaultValue: '',
    options: [
      { label: '', value: '' },
      { label: '8-Continuous', value: '8' },
      { label: '9-Single Transaction', value: '9' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'isfimportercode',
    label: 'ISF Importer Code',
    type: 'select',
    defaultValue: '',
    options: [
      { label: '', value: '' },
      { label: '2-AAAA;SCAC', value: '2' },
      { label: '34-NNN-NN-NNNN;Social Security Number', value: '34' },
      { label: 'ANI-YYDDPP-NNNNN;USCBP Assgined Number', value: 'ANI' },
      { label: 'AEF-XXXXXXXXXXXXXXX;Passport Number', value: 'AEF' },
      { label: 'EI-NN-NNNNNNNXX;Internal revenue Service Number', value: 'EI' }
    ],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'foreignport',
    label: 'Foreign Port',
    type: 'baseAutocomplete',
    defaultValue: '',
    options: [],
    slotList: [
      { name: 'foreignport0', type: '', props: {}, config: {} },
      { name: 'foreignport1', type: '', props: { disabled: true }, config: {} },
      { name: 'foreignport', type: '', props: { disabled: true }, config: {} }
    ],
    props: {},
    config: {
      showSearch: false
    },
    isShow: true
  },
  {
    name: 'isfimporterno',
    label: 'ISF Importer No.',
    type: 'input',
    defaultValue: '',
    options: [],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'foreigndelivery',
    label: 'Foreign Delivery',
    type: 'baseAutocomplete',
    defaultValue: '',
    options: [],
    slotList: [
      { name: 'foreigndelivery0', type: '', props: {}, config: {} },
      { name: 'foreigndelivery1', type: '', props: { disabled: true }, config: {} },
      { name: 'foreigndelivery', type: '', props: { disabled: true }, config: {} }
    ],
    props: {},
    config: {
      showSearch: false
    },
    isShow: true
  },
  {
    name: 'dob',
    label: 'DOB(MMDDYYYY)',
    type: 'datesingle',
    defaultValue: '',
    options: [],
    slotList: [],
    props: {
      disabled: true
    },
    isShow: true
  },
  {
    name: 'a_passportcountry',
    label: 'Passport Country',
    type: 'baseAutocomplete',
    defaultValue: '',
    options: [],
    slotList: [
      { name: 'a_passportcountry', type: '', props: {}, config: {} },
      { name: 'passportcountry1', type: '', props: { disabled: true }, config: {} }
    ],
    props: {
      disabled: true
    },
    config: {
      showSearch: false
    },
    isShow: true
  },
  {
    name: 'voscac',
    label: 'Vessel Operator SCAC',
    type: 'input',
    defaultValue: '',
    options: [],
    slotList: [],
    props: {},
    isShow: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    defaultValue: '',
    options: [],
    slotList: [],
    props: {},
    isShow: true
  }
]
