<template>
  <div id="app">
    <div class="cover">
      <div class="welcome">
        <div class="content">Welcome to ymwangel's website!</div>
      </div>
    </div>
    <div class="header clearfix">
      <div class="personalInfo fl">
        <img src="./assets/personal.jpg">
      </div>
      <div class="author fl">ymwangel</div>
      <ul class="nav fr">
        <li class="nav-item">
          <router-link class="mato" to="/home">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mato" to="/edit">编辑</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mato" to="/photoAlbum">个人影集</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mato" to="/support">赞我吧</router-link>
        </li>
      </ul>
    </div>   
    <div class="view">
      <router-view>
      
      </router-view>
    </div>
    
  </div>
</template>
    

<script>
export default {
  name: 'app'
}
window.onload = function(){
  $('.content').addClass("show")
  setTimeout(function(){
    $(".cover").hide()
    $(".author").addClass("authorAnimation")
  },5000)
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
}
/*.clearfix{
  zoom:1;
}
.clearfix :after{
  content: ".",
  display: block;
  height:0;
  clear: both;
  visibility:hidden;
}*/
.header{
  /*padding-top: 30px;*/
  background-color: white;
  height: 100px;
  /*font-size:14px;*/
}
.view{
  clear: both;
}
.fl{
  float:left;
}
.fr{
  float:right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

.cover{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #353535;
  filter: alpha(opacity=40);
  opacity: 0.4;
  color: green;
}
.welcome{
  width: 800px;
  height: 70px;
  font-size: 50px;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  
}
.content{
  width: 800px;
  margin-left: 800px;
  transition:  5s margin-left linear;
}
.show{
  margin-left: 0px;
}
.mato{
  text-decoration:none;
  color: #656565;
}
.personalInfo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding-left: 30px;
  margin-top: 25px;
}
.personalInfo img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 1s linear;
}
.personalInfo img:hover{
  transform: scale(2);
  transition: transform 1s ease;
}
.author{
  color:#ff7300;
  height: 50px;
  line-height: 50px;
  margin-left: 50px;
  margin-top: 25px;
}
.authorAnimation{
  animation:circle 2s linear;
}
@keyframes circle{
  0%{ transform:rotateY(0deg); }
  /*50%{ transform:rotateY(180deg); }*/
  100%{ transform:rotateY(-360deg); }
}
.nav{
  list-style: none;
  font-size: 0px;
  padding: 0 26px;
  margin-top: 25px;
}
.nav-item{
  display: inline-block;
  width: 100px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
}
.active{
  color: #316ccb;
}

</style>
