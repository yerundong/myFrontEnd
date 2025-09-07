<template>
  <ElCard>
    <template #header>
      <div class="card-header">
        <span>编辑</span>
      </div>
    </template>
    <FormProvider :form="form">
      <SchemaField>
        <!-- @todo 为什么不能直接用:x-component？ -->
        <SchemaVoidField
          x-component="FormLayout"
          :x-component-props="{ labelWidth: '100px' }"
        >
          <SchemaVoidField :x-component="ElRow">
            <SchemaVoidField
              :x-component="ElCol"
              :x-component-props="{
                span: 12,
              }"
            >
              <SchemaStringField
                name="userName"
                title="用户名"
                :maxLength="20"
                :x-decorator="FormItem"
                :x-component="Input"
                :x-component-props="{
                  placeholder: '请填写用户名',
                  maxlength: 20,
                  clearable: true,
                }"
                :x-validator="[
                  {
                    required: true,
                    message: '请填写用户名',
                  },
                ]"
              />
            </SchemaVoidField>
            <SchemaVoidField
              :x-component="ElCol"
              :x-component-props="{
                span: 12,
              }"
            >
              <SchemaStringField
                name="userCode"
                title="用户编码"
                :x-decorator="FormItem"
                :x-decorator-props="{
                  fullness: false,
                }"
                :x-component="Input"
                :x-component-props="{
                  disabled: true,
                }"
              />
            </SchemaVoidField>
          </SchemaVoidField>

          <SchemaNumberField
            name="sex"
            title="性别"
            :x-decorator="FormItem"
            :x-component="Select"
            :x-component-props="{
              placeholder: '请选择性别',
              clearable: true,
            }"
            :x-validator="{
              required: true,
              message: '请选择性别',
            }"
            :enum="[
              {
                label: '男',
                value: 1,
              },
              {
                label: '女',
                value: 0,
              },
            ]"
          />

          <SchemaStringField
            name="email"
            title="邮箱"
            :x-decorator="FormItem"
            :x-component="Input"
            :x-component-props="{
              placeholder: '请填写邮箱',
              clearable: true,
            }"
            :x-validator="[
              {
                required: true,
                message: '请填写邮箱',
              },
              {
                format: 'email',
                message: '请填写合法邮箱',
              },
            ]"
          />

          <SchemaStringField
            name="birth"
            title="生日"
            :x-decorator="FormItem"
            :x-component="DatePicker"
            :x-component-props="{
              placeholder: '请选择生日',
              clearable: true,
            }"
          />
        </SchemaVoidField>
      </SchemaField>
      <FormButtonGroup align="center">
        <Submit @submit="log">保存</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </FormProvider>
  </ElCard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/vue';
import { ElCard, ElRow, ElCol } from 'element-plus';
import {
  FormLayout,
  FormItem,
  Input,
  Select,
  Submit,
  Reset,
  FormButtonGroup,
  DatePicker,
} from '@formily/element-plus';

const activeName = ref('first');

const form = createForm({
  initialValues: {
    userName: 'xxx',
    userCode: 'xxx',
    sex: 1,
    email: '123@qq.com',
  },
});

const { SchemaField, SchemaVoidField, SchemaStringField, SchemaNumberField } =
  createSchemaField({
    components: {
      FormLayout,
    },
  });

const log = (e) => {
  console.log('e', e);
};

const sendCpt = () => {
  console.log('sendCpt');
};
</script>
