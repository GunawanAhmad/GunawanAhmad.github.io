<script>
import CSButton from '@/components/button.vue';

export default {
  components: {
    CSButton,
  },
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen text-secondary">
    <div>
      <h1 class="text-secondary font-bold leading-normal text-6xl">
        Hi,
        <br>
        I'm Gunawan,
        <br>
        <span class="flex items-center">
          Web devel
          <span class="relative block h-10 w-10 rounded-full bg-secondary">
            <span class="block w-5 rounded-full bg-primary absolute inset-1/2 -translate-1/2 h-5">
              <span class="block w-2 h-2 rounded-full bg-secondary absolute inset-[3px]" />
            </span>
          </span>
          per
        </span>
      </h1>
      <p class="mt-4 text-2xl">
        Front End Developer
      </p>
      <CSButton class="mt-8 text-lg cursor-pointer">
        ABOUT ME
      </CSButton>
    </div>
  </div>
</template>
