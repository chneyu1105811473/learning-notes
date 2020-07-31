<template>
  <div id="cxy">
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components:{ HelloWorld }
}
</script>

<style>
#cxy {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: darkgrey;
  margin-top: 100px;
}
</style>