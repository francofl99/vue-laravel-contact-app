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
      <custom-button 
        class="button" 
        :label="false" 
        :name=" 'edit-button' " 
        @click.native="notifyClick" />
      <custom-button 
        class="button" 
        :label="false"  
        :name=" 'remove-button' " 
        @click.native="removeContact" />
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'

export default {
  name: 'contactCardOnViewMode',

  props: {
    contact: Object
  },

  components: {
    CustomButton
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

<style scoped>
.button-section {
  @apply p-2 flex justify-items-start;
}

.button {
  @apply w-1/3 mr-2;
}
</style>
