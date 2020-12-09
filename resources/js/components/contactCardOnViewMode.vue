<template>
  <div class="contact-card-design">
    <div :class="contact.color == 'gray' ? 'bg-' + contact.color + '-800' : 'bg-' + contact.color + '-500'" class="card-header text-gray-200">
      Nombre: {{ contact.nombre }} 
    </div>
    <div class="card-body-item items-center">
      Apellido: {{ contact.apellido }} 
    </div>
    <div class="card-body-item items-start">
      Numero: ({{ contact.codigo_area }}) - {{ contact.numero }}
    </div>
    <div class="button-section">
      <button
        @click="notifyClick"
        class="button edit-button"
      >
        <vue-hicons class="mx-auto" name="pencil_alt" is-filled :width-icon="5"/>
      </button>
      <button class="button delete-button" @click="removeContact">
        <vue-hicons class="mx-auto" :width-icon="5" name="trash" is-filled/>
      </button>
    </div>
  </div>
</template>

<script>
import VueHicons from 'vue-hicons'
import axios from 'axios'

export default {
  name: 'contactCardOnViewMode',

  props: {
    contact: Object
  },

  components: {
    VueHicons
  },

  methods: {
    removeContact () {
      this.$store.dispatch('removeContact', this.contact)
    },

    notifyClick () {
      this.$emit('editButtonClicked')
    }
  },
}
</script>

<style>
.view-button { 
  height: 85%;
  width: 28%;

  padding: 0.5rem;
}

.edit-button {
  @apply .view-button border-blue-500 bg-blue-400 text-blue-900 mr-2;
}

.edit-button:hover {
  @apply border-blue-600 bg-blue-500;
}

.delete-button {
  @apply .view-button  border-red-500 bg-red-400 text-red-900;
}

.delete-button:hover {
  @apply border-red-600 bg-red-500;
}
</style>
