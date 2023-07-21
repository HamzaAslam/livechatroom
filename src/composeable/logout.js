import { projectAuth } from "../firebase/config.js";
import { ref } from "vue";
const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.message);
    err.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
