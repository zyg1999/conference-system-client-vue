<template>
  <div class="inputItem">
    <div class="leftText" v-if="textName">{{ textName }}</div>
    <div class="rightText">
      <input
        :type="inputType"
        class="inputstyle"
        autocomplete="off"
        :placeholder="placeholder"
        @input="inputChanged($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputItem",
  props: ["textName", "placeholder", "inputType"],
  data() {
    return {};
  },
  mounted() {},

  methods: {
    //监听输入框事件
    inputChanged: function($event) {
      this.$emit("inputChanged", $event); //将值放在自定义的事件函数中作为参数
    }
  },
  computed: {}
};
</script>

<style scoped>
input:focus {
  outline: none;
  border: 1px solid #fff;
}
.inputItem {
  width: 100%;
  height: 60px;
  font-size: 18px;
  text-indent: 10px;
  letter-spacing: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.leftText {
  padding: 0.2rem;
  color: #757575;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
}
.rightText {
  width: 84%;
}
.inputstyle {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
}
</style>
