<template>
    <button
    class="button edit-button"
    >
    <div v-if="label">
            Editar
        </div>
        <vue-hicons class=" m-auto " name="pencil_alt" is-filled :width-icon="5"/>
        
    </button>

</template>

<script>
import VueHicons from 'vue-hicons'

export default {
    name: 'EditButton',

    inject: ['label'],

    components: {
        VueHicons
    }
}
</script>

<style scoped>
.button {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 150ms;

  border-bottom-width: 4px;
  border-radius: 0.375rem;
}

.edit-button {

  padding: 0.5rem;
  @apply place-items-center items-center flex font-bold justify-between border-blue-500 bg-blue-400 text-blue-900 w-full h-full;
}

.edit-button:hover {
  @apply border-blue-600 bg-blue-500;
}

</style>