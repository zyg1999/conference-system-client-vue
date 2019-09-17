<template>
  <svg className="icon" aria-hidden="true" @click="onClick">
    <use :xlink:herf="name" />
  </svg>
</template>
<script>
export default {
  props: ["name", "onClick"],
  computed: {
    /* iconName() {
      return `#icon-` + this.name;
    } */
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
