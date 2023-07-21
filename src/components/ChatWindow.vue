<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="scrollControl">
      <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import getCollection from "../composeable/getCollection";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    const { error, documents } = getCollection("messages");
    const formatedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
      //for scroll control at bottom/propert scrollTop
    });
    const scrollControl = ref(null);
    onUpdated(() => {
      scrollControl.value.scrollTop = scrollControl.value.scrollHeight;
    });

    return { error, documents, formatedDocuments, scrollControl };
  },
};
</script>
<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
