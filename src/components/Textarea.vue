<template>
  <div class="Textarea__block" v-bind:title="label">
    <label v-if="label" v-bind:for="name" class="Textarea__label">{{
      label
    }}</label>
    <textarea
      v-bind:name="name"
      v-bind:id="name"
      v-bind:placeholder="placeholder"
      class="Textarea__field"
    ></textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Textarea extends Vue {
  @Prop({ type: String }) name!: string;
  @Prop({ type: String }) placeholder?: string;
  @Prop({ type: String }) label?: string;
}
</script>

<style lang="scss">
@import '~/assets/styles/objects/input';

.Textarea__block {
  @extend .Input__block;
}

.Textarea__label {
  @extend .Input__label;
}

.Textarea__field {
  @extend .Input__field;

  height: 15rem;
}
</style>
