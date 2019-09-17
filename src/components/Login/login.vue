<template>
  <div>
    <div>
      <Button className="btn" :onClick="onClick">123</Button>
    </div>
    <InputItem
      inputType="text"
      placeholder="必填"
      :inputChanged="inputChangedTer"
    ></InputItem>
  </div>
</template>
<style>
@import "./login.css";
.btn {
  background-color: red !important;
}
</style>
<script>
import Button from "../common/button";
import InputItem from "../common/inputItem";
export default {
  data() {
    return {
      onClick: () => {
        console.log(111);
      },
      inputChangedTer: () => {
        console.log("input change");
      }
    };
  },
  components: {
    Button,
    InputItem
  }
};
</script>
