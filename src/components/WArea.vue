<template>
  <div class="input-box">
    <input type="text" placeholder="请选择收货地址">
    <i class="d-icon arrow-down-icon"></i>
  </div>
</template>

<style scoped>
  .input-box{
    width:282px;
    height: 40px;
    position: relative;
  }
  .input-box>input{
    width:282px;
    height: 40px;
    box-sizing: border-box;
    border:1px solid #e1e1e1;
    padding: 0 12px;
    outline:none;
  }
  .input-box>input:focus{
    border:1px solid #316ccb;
  }
  .input-box .d-icon.arrow-down-icon{
    display: inline-block;
    width: 8px;
    height: 5px;
    background: url("../image/i/arrow-down-icon.png") no-repeat;
    background-size: 8px 5px;
    position: absolute;
    top: 17px;
    right: 12px;
  }

</style>