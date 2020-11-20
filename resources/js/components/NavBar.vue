<template>
  
    <div class="w-full bg-gray-800 nav-bar flex pl-4">
        <vue-hicons name="users" is-filled :width-icon="6" fill-color="white"/>
        <h1 class=" text-gray-200 self-center ml-2  text-xl  font-sans ">Contactos</h1>
    </div>

</template>

<script>
import VueHicons from "vue-hicons";

export default {
    name: 'NavBar',

    components: {
        VueHicons
    }

}
</script>

<style>
.nav-bar {
    height: 12%;
}

</style>