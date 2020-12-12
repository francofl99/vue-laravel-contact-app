<template>
<div class="contact-card-design">

  <div :class="contactColor == 'gray' ? 'bg-' + contactColor + '-800' : 'bg-' + contactColor + '-500'" class="card-header text-gray-800">
    <input
      type="text"
      class="header-item-input"
      v-model="contactName"
    />
  </div>

  <div class="body-item items-center">
    <input
      type="text"
      class="body-item-input w-full"
      v-model="contactLastName"
    />
  </div>

  <div class="body-item items-start flex-wrap justify-between">
    <input
      type="number"
      class="body-item-input w-20"
      v-model="contactAreaCode"
    />
    <input
      type="number"
      class="body-item-input w-32"
      v-model="contactPhoneNumber"
    />
  </div>

  <div class="button-section">
    <div>  
      <save-button class="save-button" @click.native="updateContact"/>
    </div>
    <drop-down-color-button 
       :contactColor="contactColor"
        v-on:colorPicked="assignColorPickedToContact"
    />
  </div>

</div>
</template>

<script>
import axios from 'axios'

import DropDownColorButton from './DropDownColorButton'
import SaveButton from './SaveButton'

export default {
  name: 'contactCardOnEditMode',

  components: {
    DropDownColorButton,
    SaveButton
  },

  props: {
    contact: Object
  },

  data() {
    return {
      contactId: this.contact.id,
      contactName: this.contact.nombre,
      contactLastName: this.contact.apellido,
      contactAreaCode: this.contact.codigo_area,
      contactPhoneNumber: this.contact.numero,
      contactColor: this.contact.color,
    }
  },

  methods: {
    updateContact () {
      let contactToUpdate = {
        nuevoId: this.contactId,
        id: this.contactId,
        nombre: this.contactName,
        apellido: this.contactLastName,
        codigo_area: this.contactAreaCode,
        numero: this.contactPhoneNumber,
        color: this.contactColor
      }

      this.$store.dispatch('updateContact', contactToUpdate)

      this.$emit('contactUpdated')
    },

    assignColorPickedToContact(color) {
      this.contactColor = color;
    },
  }

}
</script>

<style scoped>
.header-item-input {
  @apply rounded-md h-8 pl-2 w-full;
}

.body-item  {
  @apply p-2 text-gray-800 flex;
}

.body-item-input {
  @apply  rounded-md  h-8 pl-2  bg-gray-400;
}

.button-section {
  @apply  w-full flex justify-between p-2;
}

.save-button {
  @apply w-full
}
</style>
