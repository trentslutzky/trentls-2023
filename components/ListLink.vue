<script setup>
  const props = defineProps({
    name: String,
    link: String
  });
</script>

<template>
  <div className="listlink">
    <Icon name="material-symbols:chevron-right" />
    <NuxtLink :to=link>{{name}}</NuxtLink>
  </div>
</template>

<style>
  .listlink {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .listlink > .icon {
    color: var(--color2);
  }
</style>
