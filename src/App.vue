<template>
  <Header />
    <Quiz />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Quiz from './components/Quiz.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {Header, Quiz, Footer}
});
</script>

<style>
::-webkit-scrollbar {
    width: 10px;
    background: #2a2e31;
}

::-webkit-scrollbar-thumb {
    border-radius: 2em;
    background: linear-gradient(-45deg, #c79113, #ffb31b, #ff6309, #cb6500);
}
</style>
