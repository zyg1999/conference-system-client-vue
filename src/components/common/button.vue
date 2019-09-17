<template>
  <span v-bind:class="className" @click="onClick">
    <slot></slot>
  </span>
</template>
<style scoped>
span {
  display: inline-block;
  width: 100%;
  min-height: 32px;
  line-height: 32px;
  font-size: 0.24rem;
  color: #ffffff;
  border-radius: 3px;
  text-align: center;
}
</style>
<script>
export default {
  name: "Button",
  props: {
    className: String,
    onClick: Function
  }
};
</script>
