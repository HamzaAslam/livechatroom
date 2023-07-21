<template>
  <div>
    <form>
      <textarea
        placeholder="Type your message here..."
        v-model="message"
        @keypress.enter.prevent="handleMessage"
      >
      </textarea>
      <div class="error">{{ error }}</div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import getUser from "../composeable/getUser";
import useCollection from "../composeable/useCollection";
import { timeStamp } from "@/firebase/config";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("messages");

    const handleMessage = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timeStamp(),
      };
      await addDoc(chat);
      console.log(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleMessage, error };
  },
};
</script>
<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  outline: none;
}
</style>
