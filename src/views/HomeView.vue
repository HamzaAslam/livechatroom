<template>
  <div class="welcome container">
    <h2>Welcome</h2>
    <div v-if="showLogin">
      <SignIn @login="enterChatroom" />
      <p>No account yet <span @click="showLogin = false">Sign Up Here</span></p>
    </div>
    <div v-else>
      <SignUp @signup="enterChatroom" />
      <p>
        Already have account <span @click="showLogin = true">Login Here</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SignUp from "../components/signup.vue";
import SignIn from "../components/signin.vue";
import Chatroom from "../views/Chatroom.vue";
import { useRouter } from "vue-router";
export default {
  components: { SignUp, SignIn },
  name: "HomeView",

  setup() {
    const showLogin = ref("true");
    const router = useRouter();

    const enterChatroom = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChatroom };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
  background: #fff;
}
.welcome form {
  width: 400px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
