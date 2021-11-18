<template>
  <button
    class="Button"
    v-bind:class="{ [containerStyles]: containerStyles }"
    v-bind:style="{ 'background-color': backgroundColor, color: textColor }"
  >
    {{ content }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";

import { Component, Prop } from "nuxt-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ type: String }) content!: string;
  @Prop({ type: String }) containerStyles?: string;
  @Prop({ type: String }) textColor?: string;
  @Prop({ type: String }) backgroundColor?: string;
}
</script>

<style lang="scss">
@import "~/assets/styles/settings/colors";
@import "~/assets/styles/settings/gaps";

.Button {
  padding: $xs $md;
  background: $base-color;
  color: $secondary-color-1;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 1px 10px rgba(0, 0, 0, 0.2);
}
</style>
