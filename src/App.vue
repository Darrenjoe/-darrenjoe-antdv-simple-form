<template>
  <div id="app">
    <SimpleForm
      :myForm.sync="formData"
      :formRenderList="formRenderList"
      :formRules="formRules"
      :formLayout="formLayout"
      :autoCompleteSource="formDataSource"
    ></SimpleForm>
  </div>
</template>

<script>
import SimpleForm from './components/SimpleForm'
import { formListBase } from './utils/mock'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Darren Joe 的组件库',
      formRenderList: formListBase,
      formData: {
        is_new: '',
        selectoftree: [],
        bol: '',
        bol_o: '',
        bolcode: '',
        isftype: '',
        is_isfbond: [],
        isf_action: '',
        isf_bondholder: '',
        actiontype: '',
        isf_bondactivity: '',
        shipmenttype: '',
        isf_bondtype: '',
        isfimportercode: '',
        foreignport0: '',
        foreignport1: '',
        foreignport: '',
        isfimporterno: '',
        foreigndelivery0: '',
        foreigndelivery1: '',
        foreigndelivery: '',
        dob: '',
        a_passportcountry: '',
        passportcountry1: '',
        voscac: '',
        email: '',
        _station_name: ''
      },
      formRules: {},
      formLayout: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        xxl: 12,
        labelCol: { span: 10 },
        wrapperCol: { span: 14 }
      },
      formDataSource: {
        selectoftree: [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0'
              }
            ]
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
              {
                title: 'Child Node3',
                value: '0-1-0',
                key: '0-1-0',
                disabled: true
              },
              {
                title: 'Child Node4',
                value: '0-1-1',
                key: '0-1-1'
              },
              {
                title: 'Child Node5',
                value: '0-1-2',
                key: '0-1-2'
              }
            ]
          }
        ]
      }
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  },
  components: {
    SimpleForm
  }
}
</script>

<style></style>
