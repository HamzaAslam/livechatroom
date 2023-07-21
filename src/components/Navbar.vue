<template>
  <nav v-if="user">
    <div>
      <p>Hey There ... {{ user.displayName }}</p>
      <p class="email">Loged in as ... {{ user.email }}</p>
    </div>
    <div><button @click="handleLogout">Log out</button></div>
  </nav>
</template>
<script>
import useLogout from "../composeable/logout.js";
import getUser from "../composeable/getUser.js";
export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("user out");
      }
    };

    return { handleLogout, error, user };
  },
};
</script>
<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p .email {
  font-size: 14px;
  color: #999;
}
</style>
