<template>
  <div class="login">
    <div class="login-content">
      <n-form ref="formRef" :model="modelRef" :rules="rules">
        <n-form-item path="password" label="密码">
          <n-input
            v-model:value="modelRef.password"
            type="password"
            @input="handlePasswordInput"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" label="重复密码">
          <n-input
            v-model:value="modelRef.reenteredPassword"
            :disabled="!modelRef.password"
            type="password"
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-form>
      <n-button type="primary" @click="handleValidateButtonClick">登录</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { FormInst, FormItemInst, FormItemRule, useMessage, FormRules } from "naive-ui";
interface ModelType {
  age: string | null;
  password: string | null;
  reenteredPassword: string | null;
}
defineComponent({
  name: "LoginVue",
});
const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const message = useMessage();
const modelRef = ref<ModelType>({
  age: null,
  password: null,
  reenteredPassword: null,
});
function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
  return (
    !!modelRef.value.password &&
    modelRef.value.password.startsWith(value) &&
    modelRef.value.password.length >= value.length
  );
}
function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === modelRef.value.password;
}
const rules: FormRules = {
  age: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("需要年龄");
        } else if (!/^\d*$/.test(value)) {
          return new Error("年龄应该为整数");
        } else if (Number(value) < 18) {
          return new Error("年龄应该超过十八岁");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: "请再次输入密码",
      trigger: ["input", "blur"],
    },
    {
      validator: validatePasswordStartWith,
      message: "两次密码输入不一致",
      trigger: "input",
    },
    {
      validator: validatePasswordSame,
      message: "两次密码输入不一致",
      trigger: ["blur", "password-input"],
    },
  ],
};
function handlePasswordInput() {
  if (modelRef.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
  }
}
function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("验证成功");
    } else {
      console.log(errors);
      message.error("验证失败");
    }
  });
}
</script>

<style scoped lang="scss">
// .login {
//   display: flex;
//   align-content: center;
//   justify-content: center;
//   .login-content {
//     h1 {
//       text-align: center;
//     }
//   }
// }
</style>
