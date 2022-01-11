<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    		<div class="aside">
			<h1 style="text-align: center"></h1><br><h3>
                <li>세아베스틸 세아특수강 대리점</li></h3>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
