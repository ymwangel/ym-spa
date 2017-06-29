<template>
  <div class="home">
    <div class="area">
      <h2 class="title" @click="showLists()">{{info}}</h2>
      <ul class="lists">
        <li class="list-item">webpack</li>
        <li class="list-item">vue</li>
        <li class="list-item">jquery</li>
        <li class="list-item">css</li>
      </ul>
    </div>
  </div>
</template>

<style>
  .home{
    padding-top: 20px;
    padding-left: 20px;
  }
  .area{
    position: relative;
  }
  .area .title{
    width: 100px;
    font-size: 18px;
    color: #656565;
    font-weight: normal;
  }
  .area .lists{
    display: none;
    list-style: none;
    background-color: #fff;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .area .lists .list-item{
    height: 34px;
    line-height: 34px;
  }
  
</style>
<script>


function data(){
  return {
    info: '文章列表'
  }
}

var methods = {
  showLists
}

export default {
  name: 'home',
  data,
  methods
}

function showLists(){
  $(".lists").show()
}

</script>






