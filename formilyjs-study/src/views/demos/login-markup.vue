<template>
  <div style="width: 300px; border: 1px solid black; padding: 40px; margin: 0 auto">
    <el-tabs v-model="activeName">
      <el-tab-pane label="账号密码登录" name="first">
        <FormProvider :form="form1">
          <SchemaField>
            <SchemaVoidField
              x-component="FormLayout"
              :x-component-props="{
                labelWidth: '70px',
              }"
            >
              <SchemaStringField
                name="userName"
                title="用户名"
                :maxLength="10"
                :x-decorator="FormItem"
                :x-component="Input"
                :x-component-props="{
                  placeholder: '请填写用户名',
                  maxlength: 10,
                }"
                :x-validator="{
                  required: true,
                  message: '请填写用户名',
                }"
              >
              </SchemaStringField>
              <SchemaStringField
                name="password"
                title="密码"
                :maxLength="20"
                :x-decorator="FormItem"
                :x-component="Input"
                :x-component-props="{
                  placeholder: '请填写密码',
                  maxlength: 20,
                  type: 'password',
                }"
                :x-validator="{
                  required: true,
                  message: '请填写密码',
                }"
              >
              </SchemaStringField>
            </SchemaVoidField>
          </SchemaField>
          <FormButtonGroup align="center">
            <Submit @submit="log">提交</Submit>
            <Reset>重置</Reset>
          </FormButtonGroup>
        </FormProvider>
      </el-tab-pane>
      <el-tab-pane label="手机号登录" name="second">
        <FormProvider :form="form2">
          <SchemaField>
            <SchemaVoidField
              x-component="FormLayout"
              :x-component-props="{
                labelWidth: '70px',
              }"
            >
              <SchemaStringField
                name="tel"
                title="手机号"
                :maxLength="11"
                :x-decorator="FormItem"
                :x-component="Input"
                :x-component-props="{
                  placeholder: '请填写手机号',
                  maxlength: 11,
                }"
                :x-validator="[
                  {
                    required: true,
                    message: '请填写手机号',
                  },
                  {
                    format: 'phone',
                    message: '请填写合法的手机号',
                  },
                ]"
              >
              </SchemaStringField>
              <SchemaStringField
                name="captcha"
                title="校验码"
                :maxLength="4"
                :x-decorator="FormItem"
                :x-component="Input"
                :x-component-props="{
                  placeholder: '请填写校验码',
                  maxlength: 4,
                }"
                :x-validator="{
                  required: true,
                  message: '请填写校验码',
                }"
              >
                <template #append>
                  <ElButton @click="sendCpt">发送验证码</ElButton>
                </template>
              </SchemaStringField>
            </SchemaVoidField>
          </SchemaField>
          <FormButtonGroup align="center">
            <Submit @submit="log">提交</Submit>
            <Reset>重置</Reset>
          </FormButtonGroup>
        </FormProvider>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/vue';
import { ElButton } from 'element-plus';
import {
  Form,
  Input,
  InputNumber,
  FormLayout,
  FormItem,
  Submit,
  Reset,
  FormButtonGroup,
} from '@formily/element-plus';

const activeName = ref('first');

const form1 = createForm({
  // readPretty: true
});

const form2 = createForm();

const { SchemaField, SchemaVoidField, SchemaStringField } = createSchemaField({
  components: {
    Form,
    Input,
    InputNumber,
    FormLayout,
    FormItem,
    Submit,
    Reset,
    FormButtonGroup,
    ElButton,
  },
});

const log = (e) => {
  console.log('e', e);
};

const sendCpt = () => {
  console.log('sendCpt');
};
</script>
