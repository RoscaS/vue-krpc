<template>

</template>

<script>
export default {
  name: "Login",
  mounted() {
    if (this.$auth.isAuthenticated()) {
      this.$router.push({ name: "home" });
    } else {
      this.$auth.login();
    }
  }
};
</script>
