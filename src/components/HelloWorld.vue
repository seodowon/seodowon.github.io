<template>
  <div class="hello">
    <div class="slider-container">

      <div class="image-container">
        <img src="../assets/chqwire.jpg" class="slider-image">
        <img src="../assets/CDbarMachine.jpg" class="slider-image">
        <img src="../assets/PEELEDBAR.jpg" class="slider-image">
      </div>
      
        <button v-on:click="plusDivs(-1)" class="slider-button" id="prev"> &#10094; </button>
        <button v-on:click="plusDivs(1)" class="slider-button" id="next"> &#10095; </button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      slideIndex:1
    }
  },
  methods:{
    showDivs: function(n){
      var i;
      var x = document.getElementsByClassName("slider-image");
      if (n > x.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[this.slideIndex-1].style.display = "block";  
    },
    plusDivs: function(n) {
      this.showDivs(this.slideIndex += n);
    }
  },
  mounted(){
    this.showDivs(this.slideIndex);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 

      <span id="slider-image-1"></span>
      <span id="slider-image-2"></span>
      <span id="slider-image-3"></span>
      <div class="button-container">
-->
<style scoped>

.hello{
margin-top: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.slider-container{
  width: 70%;
  height: 20%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  
}
.image-container{
transition: left 2s;
-webkit-transition: left 2s;
-moz-transition: left 2s;
-o-transition: left 2s;
}
.slider-image{
    margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0px;
  padding: 0px;
}

.slider-button{
  position: absolute;
  top: 0%;
  display: block;
  height: 100%;
  width: 32px;
  font-size: 20px;
  text-align: center;
  border: none;
  background-color: grey;
  color: white
}
.slider-button:hover{
  background-color: rgb(63, 63, 63)
}
#next{
  display: block;
  margin-left: calc(100% - 32px);
}
</style>