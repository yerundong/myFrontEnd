<template>
  <ElCard>
    <template #header>
      <div class="card-header">
        <span>x-reactions</span>
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

const form = createForm();

const log = (e: object): void => {
  console.log('e', e);
};

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

/*
x-reactions: 字段联动协议

target: 声明式写法，监听一个字段
dependencies: 声明式写法，监听多个字段。
依赖的字段路径列表，只能以点路径描述依赖，支持相对路径，如果是数组格式，那么读的时候也是数组格式，如果是对象格式，读的时候也是对象格式，只是对象格式相当于是一个alias

fulfill: 当依赖条件满足时要执行的动作

fulfill 里常见的配置:
state：修改字段的运行时状态，比如 value、visible、required、editable、disabled、selfErrors
schema：修改字段的 schema 配置，比如 x-component、x-component-props
run: 执行语句
 */

const schema = {
  type: 'object',
  properties: {
    formLayout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelWidth: 100,
      },
      properties: {
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
            labelWidth: 120,
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
          'x-reactions': {
            dependencies: ['sex'],
            fulfill: {
              schema: {
                'x-visible': '{{$deps[0]===2}}',
              },
            },
          },
        },

        sex1: {
          title: '性别1',
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
        descSex1: {
          title: '描述你的性别1',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-decorator-props': {
            labelWidth: 120,
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
          'x-reactions': {
            dependencies: ['sex1'],
            when: '{{$deps[0] === 2}}',
            fulfill: {
              schema: {
                'x-visible': true,
              },
            },
            otherwise: {
              schema: {
                'x-visible': false,
              },
            },
          },
        },

        sex2: {
          title: '性别2',
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
          // 主动联动：本字段变化，改变其他自动
          // 写法一：函数
          // 'x-reactions'(field: Field) {
          //   const descSex2 = field.query('descSex2').take() as Field;
          //   descSex2.visible = field.value === 2;
          // },
          // 写法二：字符串模板函数
          'x-reactions': `{{
            (field) => {
              const descSex2 = field.query('descSex2').take();
              if(descSex2)
                descSex2.visible = field.value === 2;
            }}
          }`,
        },
        descSex2: {
          title: '描述你的性别2',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-decorator-props': {
            labelWidth: 120,
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
