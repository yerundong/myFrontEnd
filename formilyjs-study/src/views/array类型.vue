<template>
  <ElCard>
    <template #header>
      <div class="card-header">
        <span>array类型</span>
      </div>
    </template>
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
    </FormProvider>
  </ElCard>
</template>

<script lang="ts" setup>
import { deepToRaw } from '@/utils';
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
  Checkbox,
  ArrayTabs,
  FormGrid,
  ArrayItems,
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
    Checkbox,
    ArrayTabs,
    FormGrid,
    ArrayItems,
  },
});

const form = createForm();

const logForm = (): void => {
  console.log('form: ', form);
  console.log('form.values: ', deepToRaw(form.values));
};

const submitHandle = (e: object) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('submitHandle: ', e);
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
        hobies: {
          title: '你的爱好',
          type: 'array',
          'x-decorator': 'FormItem',
          'x-component': 'Checkbox.Group',
          default: [2, 3],
          enum: [
            {
              label: '抽烟',
              value: 1,
            },
            {
              label: '喝酒',
              value: 2,
            },
            {
              label: '赌博',
              value: 3,
            },
          ],
        },

        // Formily 的数组语法糖，拆成多个字段提交
        '[cy,hj,db]': {
          title: '你的爱好',
          type: 'array',
          'x-decorator': 'FormItem',
          'x-component': 'Checkbox.Group',
          default: [2, 3],
          enum: [
            {
              label: '抽烟',
              value: 1,
            },
            {
              label: '喝酒',
              value: 2,
            },
            {
              label: '赌博',
              value: 3,
            },
          ],
        },

        zipes: {
          type: 'array',
          title: '标签列表',
          'x-decorator': 'FormItem',
          'x-component': 'ArrayItems',
          items: {
            type: 'string',
            'x-component': 'Input',
          },
          default: ['a', 'b', 'c'],
        },

        infos: {
          type: 'array',
          title: '信息列表',
          'x-decorator': 'FormItem',
          'x-component': 'ArrayItems',
          // 至少要有一条数据才能显示
          default: [
            { name: '张三', age: null, birth: '' },
            { name: '李四', age: null, birth: '' },
          ],
          items: {
            type: 'object',
            'x-component': 'FormGrid', // 改善样式
            properties: {
              name: {
                type: 'string',
                title: '姓名',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
              age: {
                type: 'number',
                title: '年龄',
                'x-decorator': 'FormItem',
                'x-component': 'InputNumber',
              },
              birth: {
                type: 'string',
                title: '生日',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker',
              },
            },
          },
        },

        looks: {
          type: 'array',
          title: '查看列表',
          'x-decorator': 'FormItem',
          'x-component': 'ArrayItems',
          // 至少要有一条数据才能显示
          default: ['张三', 16, ''],
          items: [
            {
              type: 'string',
              title: '姓名',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },
            {
              type: 'number',
              title: '年龄',
              'x-decorator': 'FormItem',
              'x-component': 'InputNumber',
            },
            {
              type: 'string',
              title: '生日',
              'x-decorator': 'FormItem',
              'x-component': 'DatePicker',
            },
          ],
        },

        yoohu: {
          type: 'array',
          'x-component': 'ArrayItems',
          'x-decorator': 'FormItem',
          title: '动态数组',
          default: [''],
          items: {
            type: 'void',
            'x-component': 'Space',
            'x-component-props': {
              style: 'display: flex',
            },
            properties: {
              sort: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.SortHandle',
              },
              input: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
              remove: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove',
              },
            },
          },
          properties: {
            add: {
              type: 'void',
              title: '添加条目',
              'x-component': 'ArrayItems.Addition',
            },
          },
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
                onClick: logForm,
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
