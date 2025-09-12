<template>
  <ElCard>
    <template #header>
      <div class="card-header">
        <span>编辑</span>
      </div>
    </template>
    <!-- 
    注意：x-component="FormLayout" 不要写成 :x-component="FormLayout" 
    直接传递一个 Vue 组件，而不是 Schema 语法里的字符串，虽然有些时候也能用，但会破坏 JSON Schema 的声明式特性（比如 JSON 配置化、远程 schema 动态渲染时就没法解析变量了）。
    -->
    <FormProvider :form="form">
      <SchemaField>
        <SchemaVoidField x-component="FormLayout" :x-component-props="{ labelWidth: '100px' }">
          <SchemaVoidField x-component="ElRow">
            <SchemaVoidField
              x-component="ElCol"
              :x-component-props="{
                span: 12,
              }"
            >
              <SchemaStringField
                name="userName"
                title="用户名"
                :maxLength="20"
                :x-decorator="FormItem"
                x-component="Input"
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
              x-component="ElCol"
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
                x-component="Input"
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
            x-component="Select"
            :x-component-props="{
              placeholder: '请选择性别',
              clearable: true,
            }"
            :x-validator="[
              {
                required: true,
                message: '请选择性别',
              },
            ]"
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
            x-component="Input"
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
            x-component="DatePicker"
            :x-component-props="{
              placeholder: '请选择生日',
              clearable: true,
            }"
          />

          <SchemaVoidField x-component="FormButtonGroup" :x-component-props="{ align: 'center' }">
            <SchemaVoidField
              x-component="Submit"
              x-content="保存"
              :x-component-props="{
                onSubmit: submitHandle,
              }"
            />
            <SchemaVoidField x-component="Reset" x-content="重置" />
          </SchemaVoidField>
        </SchemaVoidField>
      </SchemaField>
    </FormProvider>
  </ElCard>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core';
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
} from '@formily/element-plus';

const form = createForm({
  initialValues: {
    userName: 'xxx',
    userCode: 'xxx',
    sex: 1,
    email: '123@qq.com',
  },
});

const { SchemaField, SchemaVoidField, SchemaStringField, SchemaNumberField } = createSchemaField({
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
  },
});

const log = (e) => {
  console.log('e', e);
};

const submitHandle = () => {
  return new Promise<void>((resolve) => {
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
</script>
