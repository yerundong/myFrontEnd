<template>
  <ElCard>
    <template #header>
      <div class="card-header">
        <span>编辑</span>
      </div>
    </template>
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
    </FormProvider>
  </ElCard>
</template>

<script lang="ts" setup>
import { createForm, registerValidateRules } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/vue';
import { ElCard, ElRow, ElCol, ElNotification } from 'element-plus';
import {
  FormLayout,
  FormItem,
  Input,
  Select,
  Submit,
  Reset,
  FormButtonGroup,
  DatePicker,
  InputNumber,
} from '@formily/element-plus';

const form = createForm({
  initialValues: {
    userName: 'xxx',
    userCode: 'xxx',
    sex: 1,
    email: '123@qq.com',
  },
});

const log = (e) => {
  console.log('e', e);
  console.log('form', form);
};

// 自定义校验规则
registerValidateRules({
  idCard(value) {
    if (!value) return '';
    return !/^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(value)
      ? '错误了❎'
      : '';
  },
  score(value) {
    if (!value) return '';
    if (value < 70) {
      return {
        type: 'success',
        message: '这个分数很合理',
      };
    } else if (value <= 100) {
      return {
        type: 'warning',
        message: '你疑似有点自信',
      };
    } else if (value > 100) {
      return {
        type: 'error',
        message: '呵呵',
      };
    } else {
      return '不合法打分';
    }
  },
});

const submitHandle = () => {
  return new Promise<void>((resolve) => {
    log;
    setTimeout(() => {
      ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      });
      resolve();
    }, 1000);
  });
};

const { SchemaField } = createSchemaField({
  components: {
    FormLayout,
    FormItem,
    Input,
    Select,
    Submit,
    Reset,
    FormButtonGroup,
    DatePicker,
    ElRow,
    ElCol,
    InputNumber,
  },
});

const schema = {
  type: 'object',
  properties: {
    formLayout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelWidth: '100px',
      },
      properties: {
        elRow1: {
          type: 'void',
          'x-component': 'ElRow',
          properties: {
            elCol1: {
              type: 'void',
              'x-component': 'ElCol',
              'x-component-props': {
                span: 12,
              },
              properties: {
                userName: {
                  title: '用户名',
                  type: 'string',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-component-props': {
                    placeholder: '请填写用户名',
                    maxlength: 20,
                    clearable: true,
                  },
                  'x-validator': [
                    {
                      required: true,
                      message: '请填写用户名',
                    },
                  ],
                },
              },
            },
            elCol2: {
              type: 'void',
              'x-component': 'ElCol',
              'x-component-props': {
                span: 12,
              },
              properties: {
                userCode: {
                  title: '用户编码',
                  type: 'string',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-component-props': {
                    disabled: true,
                  },
                },
              },
            },
          },
        },

        sex: {
          title: '性别',
          type: 'string',
          enum: [
            {
              label: '男',
              value: 1,
            },
            {
              label: '女',
              value: 0,
            },
            {
              label: '其他',
              value: 2,
            },
          ],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            placeholder: '请选择性别',
            clearable: true,
          },
          'x-validator': [
            {
              required: true,
              message: '请选择性别',
            },
          ],
        },
        descSex: {
          title: '描述你的性别',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-decorator-props': {
            'label-width': '120px',
          },
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '请描述你的性别',
            clearable: true,
          },
          'x-validator': [
            {
              required: true,
              message: '请描述你的性别',
            },
          ],
        },

        tel: {
          title: '联系方式',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '请填写联系方式',
            clearable: true,
          },
          'x-validator': [
            {
              required: true,
              message: '请填写联系方式',
            },
            {
              format: 'phone',
              message: '请填写合法联系方式',
            },
          ],
        },

        idCard: {
          title: '身份证号码',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '请填写身份证号码',
            clearable: true,
          },
          'x-validator': [
            {
              required: true,
              message: '请填写身份证号码',
            },
            {
              idCard: true,
              message: '请填写合法身份证号码',
            },
          ],
        },

        score: {
          title: '给自己打分',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '请给自己打分',
            clearable: true,
            addonAfter: '分',
          },
          'x-validator': [
            {
              required: true,
              message: '请给自己打分',
            },
            {
              score: true,
            },
          ],
        },

        aa: {
          title: 'AA',
          required: true,
          // 方式 1：这是Formily 的 “字符串模板函数”写法
          'x-reactions': `{{(field) => {
          console.log(field)
          field.selfErrors =
                field.query('bb').value() >= field.value ? 'AA必须大于BB' : ''
          }}}`,
          'x-component': 'InputNumber',
          'x-decorator': 'FormItem',
        },
        bb: {
          title: 'BB',
          required: true,
          // 方式 2：对象写法（推荐）
          'x-reactions': {
            dependencies: ['aa'],
            fulfill: {
              state: {
                selfErrors: "{{$deps[0] <= $self.value ? 'BB必须小于等于AA' : ''}}",
              },
            },
          },
          'x-component': 'InputNumber',
          'x-decorator': 'FormItem',
        },

        formButtonGroup: {
          type: 'void',
          'x-component': 'FormButtonGroup',
          'x-component-props': {
            align: 'center',
          },
          properties: {
            submit: {
              type: 'void',
              'x-component': 'Submit',
              'x-component-props': {
                onSubmit: submitHandle,
              },
              'x-content': '保存',
            },
            reset: {
              type: 'void',
              'x-component': 'Reset',
              'x-content': '重置',
            },
          },
        },
      },
    },
  },
};
</script>
