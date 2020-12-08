<template>
 <transition 
    enter-active-class="transition-all duration-200 ease-out" 
    leave-active-class="transition-all duration-200 ease-in" 
    enter-class="opacity-0 scale-75"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-75">
    <div v-if="active">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppDropdownContent',

  inject: ['sharedState'],
  computed: {
    active () {
      return this.sharedState.active
    }
  }

}
</script>

<style>

</style>
