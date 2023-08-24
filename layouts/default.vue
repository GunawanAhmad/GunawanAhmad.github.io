<script>
import Navbar from '@/components/menu.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="min-h-screen min-w-screen bg-primary">
    <Navbar />
    <slot />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
</style>
