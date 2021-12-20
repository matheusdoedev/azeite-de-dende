<template>
  <a class="Brand" href="/">
    <img
      class="Brand__image"
      src="~/assets/icons/azeite-de-dende.svg"
      alt="Azeite de Dênde"
    />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Brand extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/tools/breakpoints';

.Brand {
  display: block;
  padding-left: 0;

  @media (max-width: $small) {
    display: none;
  }
}

.Brand__image {
  width: 191px;
  height: 18px;
}
</style>
