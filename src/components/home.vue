<template>
  <div class="home">
    <div class="area">
      <h2 class="title">{{info}}</h2>
      <ul class="lists">
        <li class="list-item"><router-link to="/home/articleOne">article 1</router-link></li>
        <li class="list-item"><router-link to="/home/articleTwo">article 2</router-link></li>
        <li class="list-item"><router-link to="/home/articleThree">article 3</router-link></li>
        <li class="list-item"><router-link to="/home/articleFour">article 4</router-link></li>
      </ul>
    </div>
      
    <div class="subView">
      <router-view></router-view>

    </div>
  </div>

</template>

<script>


function data(){
  return {
    info: '文章列表'
  }
}

export default {
  name: 'home',
  data
}


</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .home{
    padding-top: 20px;
    padding-left: 20px;
  }
  .area{
    position: relative;
  }
  .area .title{
    width: 100px;
    padding:0 10px;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 34px;
    color: #656565;
    font-weight: normal;
    cursor: pointer;
  }
  .area:hover .lists{
    display: block;
  }
  .area:hover .title{
    background-color: #fff;
  }
  .area .lists{
    display: none;
    list-style: none;
    background-color: #fff;
    position: absolute;
    left: 100px;
    top:0px;
    padding: 0px 20px;
  }
  .area .lists .list-item{
    height: 34px;
    line-height: 34px;
  }
  .subView{
    width: 1184px;
    margin: 0 120px;
  }
</style>







