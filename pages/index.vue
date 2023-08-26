<script>
import Home from '@/components/menu.vue';

export default {
  components: {
    Home,
  },
};

// const query = groq`*[_type == "portfolio"]`;
// const { data } = useSanityQuery(query);
</script>

<template>
  <Home />
</template>
