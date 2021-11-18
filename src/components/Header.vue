<template>
  <header class="Header">
    <Brand />
    <Nav />
  </header>
</template>

<style lang=""></style>

<script lang="ts">
import Vue from "vue";

import { Component } from "nuxt-property-decorator";

const components = {
  Brand: () => import("~/components/Brand.vue"),
  Nav: () => import("~/components/Nav.vue"),
};

@Component({ components })
export default class Header extends Vue {}
</script>

<style lang="scss">
@import "~/assets/styles/settings/gaps";

.Header {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: $md;
}
</style>
