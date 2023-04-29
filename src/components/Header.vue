<template>
  <div class="navbar d-flex justify-content-center align-items-center text-align-center">
    <img class="logo" :src="logo" alt="site-logo">
    <h1 class="title text-white">JDoodle</h1>
  </div>
</template>

<script>
import logo from '../assets/logo.png';

export default {
  setup() {
    return { logo };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  background: orange;
  flex-direction: row;
}

.logo,
h1 {
  height: 100%;
  margin: 0;
  font-size: 2.5em;
}

.logo {
  max-height: 60%;
  padding-right: 10px;
}
</style>
