import { projectAuth } from "../firebase/config.js";
import { ref } from "vue";
const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignin = () => {
  return { error, login };
};

export default useSignin;
