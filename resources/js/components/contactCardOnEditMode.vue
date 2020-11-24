<template>
<div class="card-design">

  <div :class="contactColor == 'gray' ? 'bg-' + contactColor + '-800' : 'bg-' + contactColor + '-500' " class=" rounded-t-md row-span-1 p-2 text-gray-800 items-center  flex">
    <input
      type="text"
      class="rounded-md h-8 pl-2 w-full"
      v-model="thisContactName"
    />
  </div>

  <div class="p-2 text-gray-800 items-center flex">
    <input
      type="text"
      class=" rounded-md  h-8 pl-2 w-full bg-gray-400"
      v-model="thisContactLastName"
    />
  </div>

  <div class="p-2 text-gray-800 items-start flex flex-wrap justify-between">
    <input
      type="number"
      class="rounded-md h-8 w-20 pl-2 bg-gray-400"
      v-model="thisContactAreaCode"
    />
    <input
      type="number"
      class="rounded-md h-8 pl-2 w-32 bg-gray-400"
      v-model="thisContactPhoneNumber"
    />

  </div>

  <div class="w-full flex items-center mb-1">
    <button
      class="save-button button border-teal-500 hover:border-teal-600 bg-teal-400 text-teal-900 hover:bg-teal-500 flex"
      @click="updateContact">
        <vue-hicons name="check_circle" class="mx-auto" :width-icon="5" is-filled/>Guardar
    </button>

    <AppDropdown class="relative" >
      <template slot="toggler">
        <div >
          <button
            class=" color-button border-b-4 border-gray-800 font-bold  hover:border-gray-900 bg-gray-700 rounded-md p-2 text-gray-200 border-transparent hover:bg-gray-800 transition duration-150 flex justify-between">
              Color <vue-hicons name="arrow_circle_down" :width-icon="5" is-filled class=" my-auto ml-1"/>
          </button>
        </div>
      </template>
      <AppDropdownContent class="flex absolute right-0">
        <div class="mt-2 w-40 drop-menu-edit-card bg-gray-700 flex rounded-md  overflow-auto"> 
          <div class="flex flex-wrap p-2 text-gray-200 cursor-pointer items-center ">

            <div :class="{selectarea: thisContactColor == 'gray'}" class="mb-1 hover:bg-gray-500 rounded-md w-full p-2 flex" @click=" assignColorPickedToContact('gray') ">
              <div class=" w-6 h-6 bg-gray-500 rounded-full border-gray-400 border-2 mr-3 " /> Sin color
            </div>
            
            <div :class="{selectarea: thisContactColor == 'teal'}" class="mb-1 hover:bg-gray-500 rounded-md w-full p-2 flex" @click="assignColorPickedToContact('teal')">
              <div class=" w-6 h-6 bg-teal-500 rounded-full border-teal-400 border-2 mr-3 " /> Verde
            </div>
            
            <div :class="{selectarea: thisContactColor == 'blue'}" class="mb-1 hover:bg-gray-500 rounded-md w-full p-2 flex" @click="assignColorPickedToContact('blue')">
              <div class=" w-6 h-6 bg-blue-500 rounded-full border-blue-400 border-2 mr-3 " /> Azul
            </div>
            
            <div :class="{selectarea: thisContactColor == 'red'}" class="hover:bg-gray-500 rounded-md w-full p-2 flex" @click="assignColorPickedToContact('red')">
              <div class=" w-6 h-6 bg-red-500 rounded-full border-red-400 border-2 mr-3 " /> Rojo
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
    contactId: Number,
    contactName: String,
    contactLastName: String,
    contactAreaCode: String,
    contactPhoneNumber: String,
    contactColor: String
  },

  data () {
    return {
      thisContactName: this.contactName,
      thisContactLastName: this.contactLastName,
      thisContactAreaCode: this.contactAreaCode,
      thisContactPhoneNumber: this.contactPhoneNumber,
      thisContactColor: this.contactColor
    }
  },

  methods: {
    updateContact () {
      axios.post('/updateContact', {
        id: this.contactId,
        nombre: this.thisContactName,
        apellido: this.thisContactLastName,
        codigo_area: this.thisContactAreaCode,
        numero: this.thisContactPhoneNumber,
        color: this.thisContactColor
      })
      .then((resolve) => {
        console.log(resolve.data)
      })
      .catch((error) => {
        console.log(error)
      })

      this.$root.$emit('data-base-modificated')
      this.$emit('contactUpdated')
    },

    assignColorPickedToContact(color) {
      this.thisContactColor = color;
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

  margin-left: 0.5rem;
  margin-right: 0.5rem;

  padding-right: 0.5rem;

  justify-content: space-between;
}

.color-button {

height: 85%;

}
.drop-menu-edit-card {
  height: 500%;
}
.selectarea {
 --bg-opacity: 1;
    background-color: #718096;
    background-color: rgba(113, 128, 150, var(--bg-opacity));

}
</style>
