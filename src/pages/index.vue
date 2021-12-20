<template>
  <div>
    <Intro />
    <Restaurante />
    <Menu />
    <Sobre />
    <Contato />
    <img
      src="~/assets/images/capa-footer.jpg"
      alt="Restaurante"
      class="Footer__cover"
    />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { smoothScroll } from '~/utils/functions';

export default Vue.extend({
  mounted() {
    smoothScroll();
  },
});
</script>

<style lang="scss">
@import '~/assets/styles/tools/breakpoints';

.Footer__cover {
  @media (max-width: $small) {
    display: none;
  }
}
</style>
