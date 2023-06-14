<script setup>
  const props = defineProps({
    iconName: String,
    link: String
  });
</script>

<template>
  <div className="social-icon-link">
    <a :href=link target=".blank">
      <Icon :name=iconName />
    </a>
  </div>
</template>

<style>
.social-icon-link > a > .icon {
    font-size: 2em;
    color: var(--fg3);
    transition: color 100ms;
  }
.social-icon-link > a > .icon:hover {
    color: var(--fg);
    cursor: pointer;
  }
</style>
