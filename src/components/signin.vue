<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Sign In</h2>
      <input type="email" required placeholder="Email" v-model="email" />
      <input
        type="password"
        required
        placeholder="Password"
        v-model="password"
      />
      <div class="error">{{ error }}</div>
      <button>Sign In</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import useSignin from "../composeable/signin.js";
export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useSignin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { password, email, handleSubmit, error };
  },
};
</script>
<style></style>
