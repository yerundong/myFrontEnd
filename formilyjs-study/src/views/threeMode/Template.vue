<template>
  <FormProvider :form="form">
    <!-- :decorator此时不需要 x- 前缀，直接传递组件和属性 -->
    <Field
      name="memo"
      title="说明"
      initialValue="xxx"
      :decorator="[FormItem, { labelCol: 3 }]"
      :component="[
        Input,
        {
          placeholder: '请输入',
          style: {
            width: 20
          }
        }
      ]"
    />
    <Field
      name="count"
      title="数量"
      :initialValue="5"
      :decorator="[FormItem]"
      :component="[
        InputNumber,
        {
          placeholder: '请输入',
          max: 10,
          style: {
            width: 100
          }
        }
      ]"
    />

    <FormConsumer>
      <template #default="{ form }">
        <div>form:</div>
        <div style="white-space: pre">
          {{ JSON.stringify(form.values, null, 2) }}
        </div>
      </template>
    </FormConsumer>

    <FormButtonGroup align-form-item>
      <Submit @submit="log">提交</Submit>
    </FormButtonGroup>
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { FormProvider, FormConsumer, Field } from '@formily/vue'
import { Input, InputNumber, FormItem, FormButtonGroup, Submit } from '@formily/element-plus'
import { onRenderTracked, onRenderTriggered } from 'vue'

onRenderTracked((event) => {
  event
  debugger
})

onRenderTriggered((event) => {
  event
  debugger
})

const form = createForm()

console.log('####### form: ', form)

const log = (e) => {
  console.log('e', e)
  console.log('form', form)
}
</script>
