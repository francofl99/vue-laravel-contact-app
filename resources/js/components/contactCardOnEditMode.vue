<template>
<div class="contact-card-design">

  <div :class="contactColor == 'gray' ? 'bg-' + contactColor + '-800' : 'bg-' + contactColor + '-500'" class="card-header text-gray-800">
    <input
      type="text"
      class="rounded-md h-8 pl-2 w-full"
      v-model="contactName"
    />
  </div>

  <div class="p-2 text-gray-800 items-center flex">
    <input
      type="text"
      class=" rounded-md  h-8 pl-2 w-full bg-gray-400"
      v-model="contactLastName"
    />
  </div>

  <div class="p-2 text-gray-800 items-start flex flex-wrap justify-between">
    <input
      type="number"
      class="rounded-md h-8 w-20 pl-2 bg-gray-400"
      v-model="contactAreaCode"
    />
    <input
      type="number"
      class="rounded-md h-8 pl-2 w-32 bg-gray-400"
      v-model="contactPhoneNumber"
    />

  </div>

  <div class="w-full flex items-center mb-1 justify-between px-2">
    <button
      class="place-content-center place-items-center save-button button border-teal-500 hover:border-teal-600 bg-teal-400 text-teal-900 hover:bg-teal-500 flex"
      @click="updateContact">
        <vue-hicons name="check_circle" class="mr-2" :width-icon="5" is-filled/>Guardar
    </button>

    <AppDropdown class="relative color-button">
      <template slot="toggler">
        <div class="h-full">
              <button
              class="h-full border-b-4 border-gray-800 font-bold items-center hover:border-gray-900 bg-gray-700 rounded-md p-2 text-gray-200  hover:bg-gray-800 transition duration-150 flex justify-between"
              >
              Color <vue-hicons name="arrow_circle_down" :width-icon="5" is-filled class=" my-auto ml-1"/>
            </button>
            </div>
      </template>
      <AppDropdownContent class="absolute right-0">
        <div class="mt-2 w-32 drop-menu-edit-card  bg-white text-gray-800 rounded-md overflow-auto flex items-start shadow-lg " > 
          <div class="flex flex-wrap p-2 cursor-pointer items-center">

            <div :class="{selectarea: isContactColor('gray'), notselectarea: !isContactColor('gray')}" class=" mb-1 hover:bg-gray-300 rounded-md w-full p-2 flex" @click=" assignColorPickedToContact('gray') ">
              <div class=" w-6 h-6 bg-gray-800 rounded-full border-gray-700 border-2 mr-3 " /> Gris
            </div>
            
            <div :class="{selectarea: isContactColor('teal'), notselectarea: !isContactColor('teal')}" class="mb-1 hover:bg-gray-300 rounded-md w-full p-2 flex" @click="assignColorPickedToContact('teal')">
              <div class=" w-6 h-6 bg-teal-500 rounded-full border-teal-400 border-2 mr-3 " /> Verde
            </div>
            
            <div :class="{selectarea: isContactColor('blue'), notselectarea: !isContactColor('blue')}" class="mb-1 hover:bg-gray-300 rounded-md w-full p-2 flex" @click="assignColorPickedToContact('blue')">
              <div class=" w-6 h-6 bg-blue-500 rounded-full border-blue-400 border-2 mr-3 " /> Azul
            </div>
            
            <div :class="{selectarea: isContactColor('red'), notselectarea: !isContactColor('red')}" class="hover:bg-gray-300 rounded-md w-full p-2 flex" @click="assignColorPickedToContact('red')">
              <div class=" w-6 h-6 bg-red-500 rounded-full border-2 border-red-400 mr-3 " /> Rojo
            </div>

          </div>
        </div>
      </AppDropdownContent>
    </AppDropdown>
  </div>

</div>
</template>

<script>
import VueHicons from 'vue-hicons'
import axios from 'axios'
import AppDropdown from './AppDropdown'
import AppDropdownContent from './AppDropdownContent'

export default {
  name: 'contactCardOnEditMode',

  components: {
    VueHicons,
    AppDropdown,
    AppDropdownContent,
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

    isContactColor(color) {
      return this.cntactColor == color;
    }
  }

}
</script>

<style>
.save-button {
  height: 85%;
  width: 46%;

  place-items: start;

  align-items: center;

  font-weight: 700;

  padding-right: 0.5rem;

}

.color-button {

height: 85%;


}
.drop-menu-edit-card {
  height: 500%;
}
.selectarea {
 --bg-opacity: 1;
    background-color: #cbd5e0;
    background-color: rgba(203, 213, 224, var(--bg-opacity));

}
</style>
