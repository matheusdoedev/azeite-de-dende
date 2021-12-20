<template>
  <ul class="SocialMedias">
    <li class="SocialMedias__item">
      <a
        href="https://facebook.com"
        target="BLANK"
        class="SocialMedias__item__link"
        title="Facebook"
      >
        <img
          src="~/assets/icons/facebook.svg"
          alt="Facebook"
          class="SocialMedias__item__img"
        />
      </a>
    </li>
    <li class="SocialMedias__item">
      <a
        href="https://instagram.com"
        target="BLANK"
        class="SocialMedias__item__link"
        title="Instagram"
      >
        <img
          src="~/assets/icons/instagram.svg"
          alt="Instagram"
          class="SocialMedias__item__img"
        />
      </a>
    </li>
    <li class="SocialMedias__item">
      <a
        href="https://twitter.com"
        target="BLANK"
        class="SocialMedias__item__link"
        title="Twitter"
      >
        <img
          src="~/assets/icons/twitter.svg"
          alt="Twitter"
          class="SocialMedias__item__img"
        />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'nuxt-property-decorator';

@Component
export default class SocialMedias extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/settings/colors';
@import '~/assets/styles/settings/gaps';

.SocialMedias {
  display: flex;
  column-gap: $xs;
}

.SocialMedias__item__img {
  border-radius: 4px;
  width: 43px;
  height: 43px;
}
</style>
