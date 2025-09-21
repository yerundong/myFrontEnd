<template>
  <ElCard>
    <template #header>
      <div class="card-header">
        <span>使用自定义组件</span>
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
