<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />

    <FormButtonGroup align-form-item>
      <Submit :onSubmit="log">提交</Submit>
    </FormButtonGroup>
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/vue';
import { Input, InputNumber, FormItem, Submit, FormButtonGroup } from '@formily/element-plus';

const form = createForm();

const { SchemaField } = createSchemaField({
  components: {
    Input,
    InputNumber,
    FormItem,
  },
});

const schema = {
  type: 'object',
  properties: {
    memo: {
      title: '说明',
      type: 'string',
      default: 'default',
      maxLength: 10,
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        // 给装饰器组件传递属性
        labelCol: 2, // 标签占8列（栅格布局）
        required: true, // 显示必填星号
      },
      'x-component': 'Input',
      'x-disabled': false,
      'x-component-props': {
        placeholder: '请输入',
        maxlength: 10,
      },
    },
    count: {
      title: '数量',
      type: 'number',
      default: 50,
      maximum: 60,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        max: 60,
      },
    },
  },
};

const log = (e) => {
  console.log('formData', e);
};
</script>
