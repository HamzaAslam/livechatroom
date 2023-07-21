<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Sign Up</h2>
      <input type="text" required placeholder="User Name" v-model="username" />
      <input type="email" required placeholder="Email" v-model="email" />
      <input
        type="password"
        required
        placeholder="Password"
        v-model="password"
      />
      <div class="error">{{ error }}</div>
      <button>Sign Up</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import useSignup from "../composeable/signup.js";
export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    const username = ref("");
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      await signup(email.value, password.value, username.value);
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { username, password, email, handleSubmit, error };
  },
};
</script>
<style></style>
