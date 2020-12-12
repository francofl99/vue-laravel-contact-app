<template>
    <button
        class="color-button-style"
    >
        Color <vue-hicons name="arrow_circle_down" :width-icon="5" is-filled class="color-button-body-icon"/>
    </button>
</template>

<script>
import VueHicons from 'vue-hicons'

export default {
    name: 'ColorButton',
    
    components: {
        VueHicons
    }
}
</script>

<style>
.color-button-style {
    @apply w-full h-full border-b-4 border-gray-800 font-bold bg-gray-700 rounded-md p-2 text-gray-200 transition duration-150 flex justify-between;
}

.color-button-style:hover {
    @apply border-gray-900 bg-gray-800;
}

.color-button-body-icon {
    @apply my-auto ml-1;
}

</style>