<template>
  <nav class="Nav">
    <li v-for="item in navItems" :key="item.name">
      <a :href="item.href" class="Nav__link">
        {{ item.name }}
      </a>
    </li>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    navItems: [
      { name: "Restaurante", href: "#restaurante" },
      { name: "Menu", href: "#menu" },
      { name: "Sobre", href: "#sobre" },
      { name: "Contato", href: "#contato" },
    ],
  }),
});
</script>

<style lang="scss">
@import "~/assets/styles/settings/colors";
@import "~/assets/styles/settings/fonts";

.Nav {
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
}

.Nav__link {
  color: $support-color-1;
  font-family: $secondary-font;
  letter-spacing: 1px;
  font-size: 2rem;
}
</style>
