<template>
  <button class="relative border-3 border-secondary bg-transparent py-3 text-secondary px-8 hover:text-primary shadow-none overflow-hidden group border-solid">
    <span class="block absolute left-0 bottom-0 top-0 bg-secondary -translate-x-full group-hover:translate-x-0 transition-transform -right-[1px]" />
    <p class="relative z-1 text-secondary group-hover:text-primary transition-[color]">
      <slot />
    </p>
  </button>
</template>
