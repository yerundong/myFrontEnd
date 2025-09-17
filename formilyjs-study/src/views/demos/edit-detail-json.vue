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
import { createForm, registerValidateRules, type Field, onFieldValueChange } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/vue';
import { ElCard, ElRow, ElCol, ElNotification, ElButton } from 'element-plus';
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
    ElButton,
  },
});

const form = createForm({
  initialValues: {
    userName: 'xxx',
    userCode: 'ggg',
    sex: 1,
    tel: '13245645612',
    email: '123@qq.com',
    idCard: '352226199501141519',
    score: '60',
    aa: 22,
    bb: 11,
  },
  // 副作用逻辑，用于实现各种联动逻辑
  effects() {
    // 用于监听某个字段值变化的副作用钩子
    onFieldValueChange('sex', (field1) => {
      console.log('field1: ', field1);
      console.log('field1.value: ', field1.value);
      form.setFieldState('descSex', (field2) => {
        console.log('field2: ', field1);
        console.log('field2.value: ', field2.value);
        if (field1.value === 2) {
          field2.display = 'visible';
        } else {
          field2.display = 'none';
        }
      });
    });
  },
});

const log = (e: object): void => {
  console.log('e', e);
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

const submitHandle = (e: object) => {
  return new Promise<void>((resolve) => {
    log(e);
    setTimeout(() => {
      console.log('form: ', form);
      ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      });
      resolve();
    }, 1000);
  });
};

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
          'x-display': 'hidden',
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
          type: 'string',
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
          type: 'string',
          required: true,
          // 方式 2：对象写法（推荐）
          'x-reactions': {
            //依赖的字段路径列表，只能以点路径描述依赖，支持相对路径，如果是数组格式，那么读的时候也是数组格式，如果是对象格式，读的时候也是对象格式，只是对象格式相当于是一个alias
            dependencies: ['aa'],
            // 当依赖条件满足时要执行的动作
            fulfill: {
              // 修改字段的运行时状态，比如 value、visible、required、editable、disabled
              state: {
                selfErrors: "{{$deps[0] <= $self.value ? 'BB必须小于等于AA' : ''}}",
              },
            },
          },
          'x-component': 'InputNumber',
          'x-decorator': 'FormItem',
        },

        fuzhi: {
          title: '赋值',
          type: 'void',
          'x-component': 'ElButton',
          'x-decorator': 'FormItem',
          'x-content': '触发',
          'x-component-props': {
            type: 'primary',
            onClick: () => {
              // 整个表单赋值
              // console.log(form.setValues({ userName: 'ssss' }));
              // 单个字段赋值
              console.log(form.setValuesIn('aa', 222));
              console.log(form.setValuesIn('bb', 333));
            },
          },
        },

        hideshow: {
          title: '隐藏显示',
          type: 'void',
          'x-component': 'ElButton',
          'x-decorator': 'FormItem',
          'x-content': '触发',
          'x-component-props': {
            type: 'primary',
            onClick: () => {
              // form.query('xxx') 返回的是一个 Query 实例，而不是 Field 对象，需要在 query 后面加 .take() 或 .value() 之类的方法，拿到真正的 Field 对象
              const sex = form.query('sex').take() as Field;
              console.log('sex: ', sex);
              sex.display === 'hidden' ? sex.setDisplay('visible') : sex.setDisplay('hidden');
            },
          },
        },

        // 解构字段
        '[startDate,endDate]': {
          title: '日期范围',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-component-props': {
            placeholder: '请选择日期范围',
            clearable: true,
            type: 'daterange',
          },
          'x-validator': [
            {
              required: true,
              message: '请选择日期范围',
            },
          ],
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
