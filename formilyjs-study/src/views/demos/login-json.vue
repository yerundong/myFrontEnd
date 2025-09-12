<template>
  <div style="width: 300px; border: 1px solid black; padding: 40px; margin: 0 auto">
    <el-tabs v-model="activeName">
      <el-tab-pane label="账号密码登录" name="first"
        ><FormProvider :form="form1"> <SchemaField :schema="schema1" /> </FormProvider>
      </el-tab-pane>
      <el-tab-pane label="手机号登录" name="second"
        ><FormProvider :form="form2"> <SchemaField :schema="schema2" /> </FormProvider
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import { ElButton } from 'element-plus'
import { Form, Input, InputNumber, FormLayout, FormItem, Submit, Reset, FormButtonGroup } from '@formily/element-plus'

const activeName = ref('first')

// 验证码倒计时状态
const countdown = ref(60)
const isCounting = ref(false)

// 开始倒计时
const startCountdown = () => {
  if (isCounting.value) return
  isCounting.value = true
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      countdown.value = 60
      isCounting.value = false
    }
  }, 1000)
}

const form1 = createForm({
  // readPretty: true
})

const form2 = createForm()

const { SchemaField } = createSchemaField({
  components: {
    Form,
    Input,
    InputNumber,
    FormLayout,
    FormItem,
    Submit,
    Reset,
    FormButtonGroup,
    ElButton
  }
})

const log = (e) => {
  console.log('e', e)
}

const schema1 = {
  type: 'object',
  properties: {
    formLayout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelWidth: '70px'
      },
      properties: {
        userName: {
          title: '用户名',
          type: 'string',
          maxLength: 10,
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '请填写用户名',
            maxlength: 20
          },
          'x-validator': [
            {
              required: true,
              message: '请填写用户名'
            }
          ]
        },
        password: {
          title: '密码',
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '请填写密码',
            type: 'password',
            maxlength: 20
          },
          'x-validator': [
            {
              required: true,
              message: '请填写密码'
            }
          ]
        }
      }
    },
    formButtonGroup: {
      type: 'void',
      'x-component': 'FormButtonGroup',
      'x-component-props': {
        align: 'center'
      },
      properties: {
        submit: {
          type: 'void',
          'x-component': 'Submit',
          'x-content': '登录',
          'x-component-props': {
            onSubmit: (values) => {
              return new Promise<void>((resolve) => {
                log(values)
                setTimeout(() => {
                  console.log('提交数据:', values)
                  resolve()
                }, 1000)
              })
            }
          }
        },
        reset: {
          type: 'void',
          'x-component': 'Reset',
          'x-content': '重置'
        }
      }
    }
  }
}

const schema2 = {
  type: 'object',
  properties: {
    formLayout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelWidth: '70px'
      },
      properties: {
        tel: {
          title: '手机号',
          type: 'string',
          maxLength: 11,
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '请填写验证码',
            maxlength: 11,
            type: 'tel'
          },
          'x-validator': [
            {
              required: true,
              message: '请填写手机号'
            },
            {
              format: 'phone',
              message: '请填写合法的手机号'
            }
          ]
        },
        captcha: {
          title: '验证码',
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-validator': [
            {
              required: true,
              message: '请填写验证码'
            }
          ],
          'x-component-props': {
            placeholder: '请填写验证码',
            maxlength: 4
          }
        }
      }
    },
    formButtonGroup: {
      type: 'void',
      'x-component': 'FormButtonGroup',
      'x-component-props': {
        align: 'center'
      },
      properties: {
        submit: {
          type: 'void',
          'x-component': 'Submit',
          'x-content': '登录',
          'x-component-props': {
            onSubmit: (values) => {
              return new Promise<void>((resolve) => {
                setTimeout(() => {
                  console.log('提交数据:', values)
                  resolve()
                }, 1000)
              })
            }
          }
        },
        reset: {
          type: 'void',
          'x-component': 'Reset',
          'x-content': '重置'
        }
      }
    }
  }
}
</script>
