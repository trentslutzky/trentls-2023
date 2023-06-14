<template>
  <div>
    <NuxtLink to="/">
      <h1 id="sitetitle">trent slutzky</h1>
    </NuxtLink>
    <div style="display: inline-flex; gap: 0.5em;">
      <SocialIconLink iconName="mdi:github-box" link="https://github.com/trentslutzky"/>
      <SocialIconLink iconName="mdi:linkedin" link="https://www.linkedin.com/in/tlslutzky/"/>
    </div>
    <hr/>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'trent slutzky',
  meta: [
    { name: 'description', content: 'trent slutzky' }
  ],
})
</script>



<style>
:root {
  --bg: #0C1316;
  --bg1: #14232A;
  --bg2: #182D36;
  --bg3: #1D3742;
  --fg: #dddddd;
  --fg1: #888e99;
  --fg2: #6c717a;
  --fg3: #6c717a;
  --color0: #0f1b20;
  --color0_lighter: #14232A;
  --color1: #e06c75;
  --color1_lighter: #d0858b;
  --color3: #f4bf58;
  --color3_lighter: #f0c674;
  --color2: #98c379;
  --color2_lighter: #98c379;
  --color3_b: #e5c07b;
  --color3_lighter_B: #e5c07b;
  --color4: #61afef;
  --color4_lighter: #61afef;
  --color5: #c678dd;
  --color5_lighter: #c678dd;
  --color6: #56b6c2;
  --color6_lighter: #56b6c2;
  --color7: #abb2bf;
  --color7_lighter: #c8ccd4;
}

html {
  background: var(--bg);
  color: var(--fg);
  font-family: 'Space Mono', monospace;
  font-size: 20px;
  scroll-behavior: smooth;
}

body {
  padding-left: 1.5em;
  padding-right: 1.5em;
}

p {
  max-width: 800px;
}

a {
  text-decoration: none;
  color: var(--color2); 
}

a:hover {
  text-decoration: underline;
}

hr {
  border: none;
  border-top: 2px solid var(--bg1);
}

h1 {
  color: var(--color4);
}

h2 {
  color: var(--color4);
}

#sitetitle {
  color: var(--fg);
  font-size: 3em;
  padding: 0;
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 200ms;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

img {
  border: 2px solid var(--fg3);
  max-width: 600px;
}

</style>
