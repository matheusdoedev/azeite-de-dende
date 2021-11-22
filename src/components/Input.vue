<template>
  <div class="Input__block" v-bind:title="label">
    <label v-if="label" v-bind:for="name" class="Input__label">{{
      label
    }}</label>
    <input
      type="text"
      v-bind:name="name"
      v-bind:id="name"
      v-bind:placeholder="placeholder"
      class="Input__field"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ type: String }) name!: string;
  @Prop({ type: String }) placeholder?: string;
  @Prop({ type: String }) label?: string;
}
</script>

<style lang="scss">
@import '~/assets/styles/objects/input';
</style>
