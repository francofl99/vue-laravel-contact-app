<template>
  <button class="button delete-button" >
      <div v-if="label">
            Editar
        </div>
        <vue-hicons class="m-auto" :width-icon="5" name="trash" is-filled/>
      </button>
</template>

<script>
import VueHicons from 'vue-hicons'

export default {
    name: 'RemoveButton',

    inject: ['label'],


    components: {
    VueHicons,
  },

}
</script>

<style>
.delete-button {
  @apply p-2 h-full w-full border-red-500 bg-red-400 text-red-900 place-items-center items-center flex justify-between font-bold;
}

.delete-button:hover {
  @apply border-red-600 bg-red-500;
}

.button {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 150ms;

  border-bottom-width: 4px;
  border-radius: 0.375rem;
}

</style>