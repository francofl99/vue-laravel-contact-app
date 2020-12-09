<template>

    <div class="bg-gray-400 rounded-md input-design mx-16 p-4 self-center flex flex-wrap">

        <form class="flex-wrap flex w-full">
            <label
                for="nombre"
                class="text-gray-800">
                    Nombre:
            </label>
            <input
                type="text" id="nombre"
                class="my-2 rounded-md h-8 pl-2 w-full"
                placeholder="Juan"
                v-model="contactName"
            />

            <label
                for="apellido"
                class="text-gray-800">
                    Apellido:
            </label>
            <input
                type="text"
                id="apellido"
                class="my-2 rounded-md h-8 pl-2 w-full"
                placeholder="Perez"
                v-model="contactLastName"
            />

            <label
                for="area"
                class="text-gray-800 w-full">
                    Codigo de area:
            </label>
            <input
                type="number"
                id="area"
                class=" my-2 rounded-md h-8 w-20 pl-2"
                placeholder="358"
                v-model="contactAreaNumber"
            />
            <label
                for="numero-telefono"
                class="text-gray-800 w-full">
                    Numero:
            </label>
            <input
                type="number"
                id="numero-telefono"
                class="mt-2 rounded-md h-8 pl-2 w-32"
                placeholder="5 166 293"
                v-model="contactPhoneNumber"
            />
        </form>

      <AppDropdown class="w-full">
      <template slot="toggler">
        <div class="w-full mt-4 relative">
              <button
              class="border-b-4 border-gray-800 font-bold  hover:border-gray-900 bg-gray-700 rounded-md p-2 text-gray-200 border-transparent hover:bg-gray-800 transition duration-150 flex justify-between"
              >
              Color <vue-hicons name="arrow_circle_down" :width-icon="5" is-filled class=" my-auto ml-1"/>
            </button>
            </div>
      </template>
      <AppDropdownContent>
        <div class="mt-2 w-64 drop-menu bg-white text-gray-800 rounded-md absolute overflow-auto flex items-start shadow-lg" > 
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

    <button class=" self-end h-12 border-b-4 border-teal-500 font-bold mt-6 hover:border-teal-600 bg-teal-400 rounded-md p-2 text-teal-900 border-transparent hover:bg-teal-500 transition duration-150 flex justify-between"
      @click="saveContact"  >
            <vue-hicons name="check_circle" is-filled :width-icon="5" class=" my-auto mr-1"/>
                Agendar
        </button>

    </div>

</template>

<script>
import VueHicons from 'vue-hicons'

import AppDropdown from './AppDropdown'
import AppDropdownContent from './AppDropdownContent'

export default {
  name: 'InputContact',

  data () {
    return {
      contactName: '',
      contactLastName: '',
      contactAreaNumber: '',
      contactPhoneNumber: '',
      contactColor: 'gray'
    }
  },

  components: {
    AppDropdown,
    AppDropdownContent,
    VueHicons
  },

  methods: {
    saveContact () {
      let contactToInsert = {
        nombre: this.contactName,
        apellido: this.contactLastName,
        codigo_area: this.contactAreaNumber,
        numero: this.contactPhoneNumber,
        color: this.contactColor
      }

      this.$store.dispatch('insertContact', contactToInsert)
    },

    assignColorPickedToContact (colorPicked) {
      this.contactColor = colorPicked;
    },

    isContactColor(color) {
      return this.contactColor == color;
    }
  }

}
</script>

<style>
.input-design {
    width: 30%;
    height: 80%;
}
.drop-menu {
  height: 20%;
}
.notselectarea {
  opacity: 0.75;
}

</style>
