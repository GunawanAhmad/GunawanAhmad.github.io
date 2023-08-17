<script setup>
const { data } = {
  data: [
    /* {
      _createdAt: "2022-03-08T09:28:00Z",
      _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
      _rev: "xnBg0xhUDzo561jnWODd5e",
      _type: "pet",
      _updatedAt: "2022-03-08T09:28:00Z",
      name: "Bamse",
    }, */
  ],
};
</script>

<template>
  <div>
    <header>
      <h1>Sanity + Nuxt</h1>
    </header>
    <main>
      <h2>Pets</h2>
      <ul v-if="data?.length">
        <li
          v-for="pet in data"
          :key="pet._id"
        >
          {{ pet.name }}
        </li>
      </ul>
      <p v-else>
        No pets to show
      </p>
      <h2>Data</h2>
      <div v-if="data">
        <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
      <div v-else>
        <div>¯\_(ツ)_/¯</div>
        <p>
          Your data will show up here when you've configured everything
          correctly
        </p>
      </div>
    </main>
  </div>
</template>
