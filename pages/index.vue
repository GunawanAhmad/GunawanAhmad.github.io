<script setup>
const query = groq`*[_type == "portfolio"]`;
const { data } = useSanityQuery(query);
</script>

<template>
  <h1>hei</h1>
</template>
