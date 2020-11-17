<template>
  <div class="h-screen w-screen font-sans">
      <nav-bar/>
        <slot/>
  </div>

</template>

<script>
import NavBar from '../js/components/NavBar'

export default {
    name: 'ViewContainer',

    components: { 
        NavBar
    }


}
</script>

<style>

</style>