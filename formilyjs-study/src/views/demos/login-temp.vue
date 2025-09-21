<template>
  <div style="width: 300px; border: 1px solid black; padding: 40px; margin: 0 auto">
    <el-tabs v-model="activeName">
      <el-tab-pane label="账号密码登录" name="first">
        <FormProvider :form="form1">
          <FormLayout labelWidth="70px">
            <Field
              name="userName"
              title="用户名"
              type="string"
              :maxLength="10"
              :decorator="[FormItem]"
              :component="[
                Input,
                {
                  placeholder: '请填写用户名',
                  maxlength: 10,
                },
              ]"
              :validator="[
                {
                  required: true,
                  message: '请填写用户名',
                },
              ]"
            />
            <Field
              name="password"
              title="密码"
              type="string"
              :maxLength="20"
              :decorator="[FormItem]"
              :component="[Input, { placeholder: '请填写密码', maxlength: 20, type: 'password' }]"
              :validator="[
                {
                  required: true,
                  message: '请填写密码',
                },
              ]"
            />
          </FormLayout>
          <FormButtonGroup align="center">
            <Submit @submit="log">提交</Submit>
            <Reset>重置</Reset>
          </FormButtonGroup>
        </FormProvider>
      </el-tab-pane>
      <el-tab-pane label="手机号登录" name="second">
        <FormProvider :form="form2">
          <FormLayout labelWidth="70px">
            <Field
              name="tel"
              title="手机号"
              type="string"
              :maxLength="11"
              :decorator="[FormItem]"
              :component="[
                Input,
                {
                  placeholder: '请填写手机号',
                  maxlength: 11,
                },
              ]"
              :validator="[
                {
                  required: true,
                  message: '请填写手机号',
                },
                {
                  format: 'phone',
                  message: '请填写合法的手机号',
                },
              ]"
            />
            <Field
              name="captcha"
              title="验证码"
              type="string"
              :maxLength="4"
              :decorator="[FormItem]"
              :component="[Input, { placeholder: '请填写验证码', maxlength: 4 }]"
              :validator="[
                {
                  required: true,
                  message: '请填写验证码',
                },
              ]"
            >
              <template #append>
                <ElButton @click="sendCpt">发送验证码</ElButton>
              </template>
            </Field>
          </FormLayout>
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
import { FormProvider, Field, createSchemaField } from '@formily/vue';
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

const log = (e) => {
  console.log('e', e);
};

const sendCpt = () => {
  console.log('sendCpt');
};
</script>
