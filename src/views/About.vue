<template>
  <div class="about">
    <AboutNavBar/>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import AboutNavBar from '@/components/AboutNavBar.vue'

export default {
  name: 'About',
  components: {
    AboutNavBar
  }
}
</script>
