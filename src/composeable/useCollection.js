import { ref } from "vue";
import { projectFirestore } from "../firebase/config.js";

const useCollection = (collections) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collections).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
