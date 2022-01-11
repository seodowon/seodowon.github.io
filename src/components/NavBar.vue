<template>
    <div id="nav">
      <ul id="navigation">
          <li id="navigation_list"><router-link to="/">세림스틸로그(예정)</router-link></li>
          <li class="navigation_list2"><router-link to="/map">오시는 길</router-link></li>
          <li class="navigation_list2"><router-link to="/about">제품 정보</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  data: function(){
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  margin-left: 15%;
  width: 70%;
  height: 50px;
  padding-bottom: 10px;
	border-bottom: 3px solid #efefef;
	border-top: 1px solid #efefef;
	z-index: 200;
	position: relative;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#navigation_list{
	float: left;
	width: 150px;
	line-height: 50px; /* 텍스트를 상하로 가운데 정렬하는 속성 */
	text-align: center;
}
#navigation{
  overflow: auto;
  
}

.navigation_list2{
	float: right;
	width: 100px;
	line-height: 50px; /* 텍스트를 상하로 가운데 정렬하는 속성 */
	text-align: center;
    color: darkgray
}
ul{
    list-style: none;
}
li{
  display: inline;
}
li a {
  text-decoration: none;
}

</style>
