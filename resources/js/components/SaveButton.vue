<template>
<button class="save-button-style">
    <vue-hicons 
        name="check_circle" 
        is-filled 
        :width-icon="5" 
        class="save-button-icon"
    />
    Guardar
</button>
</template>

<script>
import VueHicons from 'vue-hicons'

export default {
    name: 'SaveButton',

    components: {
        VueHicons,
    },
}
</script>

<style>
.save-button-style {
    @apply w-full h-full border-b-4 border-teal-500 font-bold  bg-teal-400 rounded-md p-2 text-teal-900 transition duration-150 flex justify-between;
}

.save-button-style:hover {
 @apply border-teal-600 bg-teal-500 ;
}

.save-button-icon {
    @apply my-auto mr-1;
}
</style>