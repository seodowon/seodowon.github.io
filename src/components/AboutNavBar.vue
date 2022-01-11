<template>
    <div id="nav">
      <ul id="navigation">
          <li id="navigation_list"><router-link to="/about/chqwire">CHQ WIRE</router-link></li>
          <li id="navigation_list"><router-link to="/about/cdbar">CD BAR</router-link></li>
          <li id="navigation_list"><router-link to="/about/peeledbar">PEELED BAR</router-link></li>
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
  margin-left: 25%;
  width: 50%;
  height: 50px;
  padding-bottom: 10px;
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
	line-height: 50px; /* 텍스트를 상하로 가운데 정렬하는 속성 */
	text-align: center;
}
#navigation{
  overflow: auto;
  
}
#navigation_list + #navigation_list{
margin-left: 96px;
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
