<template>
  <FormProvider :form="form">
    <Space>
      <SchemaField>
        <SchemaStringField
          title="姓名"
          name="name"
          x-component="Input"
          x-decorator="FormItem"
          :x-component-props="{ placeholder: '请输入' }"
        />
        <div>我不会被渲染</div>
        <SchemaVoidField x-content="我会被渲染" />
      </SchemaField>
    </Space>
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { Input, InputNumber, FormItem, Space } from '@formily/element-plus'
import { FormProvider, createSchemaField } from '@formily/vue'

const form = createForm()

const SchemaComponents = createSchemaField({
  components: {
    Input,
    InputNumber,
    FormItem
  }
})

console.log('SchemaComponents: ', SchemaComponents)
const { SchemaField, SchemaStringField, SchemaVoidField } = SchemaComponents

// const Comp = {
//   render(h) {
//     return h('div', ['我也会被渲染'])
//   }
// }
</script>
