<template>

    <div class="bg-gray-400 rounded-md input-design mx-16 p-4 self-center">

        <form class="flex-wrap flex">
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

        

        <AppDropdown>
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
        <div class="mt-2 w-64 drop-menu bg-gray-700 rounded-md absolute overflow-auto"> 
          <div class="flex flex-wrap p-2 text-gray-200 cursor-pointer">

            <div :class="{selectarea: contactColor == 'Sin color'}" class=" rounded-md w-full p-2 flex" @click="assignColorSelectedToContact('Sin color')">
              <div class=" w-6 h-6 bg-gray-500 rounded-full border-gray-600 mr-3 " /> Sin color
            </div>
            
            <div :class="{selectarea: contactColor == 'Amarillo'}" class=" rounded-md w-full p-2 flex" @click="assignColorSelectedToContact('Amarillo')">
              <div class=" w-6 h-6 bg-yellow-500 rounded-full border-yellow-600 mr-3 " /> Amarillo
            </div>
            
            <div :class="{selectarea: contactColor == 'Azul'}" class=" rounded-md w-full p-2 flex" @click="assignColorSelectedToContact('Azul')">
              <div class=" w-6 h-6 bg-blue-500 rounded-full border-blue-600 mr-3 " /> Azul
            </div>
            
            <div :class="{selectarea: contactColor == 'Rojo'}" class=" rounded-md w-full p-2 flex" @click="assignColorSelectedToContact('Rojo')">
              <div class=" w-6 h-6 bg-red-500 rounded-full border-red-600 mr-3 " /> Rojo
            </div>

          </div>
        </div>
      </AppDropdownContent>
    </AppDropdown>


    <button
            class="border-b-4 border-teal-500 font-bold mt-6 hover:border-teal-600 bg-teal-400 rounded-md p-2 text-teal-900 border-transparent hover:bg-teal-500 transition duration-150 flex justify-between"
            
        >
            <vue-hicons name="check_circle" is-filled :width-icon="5" class=" my-auto mr-1"/>
                Agendar
        </button>

    </div>

</template>

<script>
import axios from 'axios'
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
      contactColor: 'Sin color'
    }
  },

  components: {
    AppDropdown,
    AppDropdownContent,
    VueHicons
  },

  methods: {
    saveContact () {
      axios.post('/saveContact', {
        nombre: this.contactName,
        apellido: this.contactLastName,
        codigo_area: this.contactAreaNumber,
        numero: this.contactPhoneNumber,
        color: this.contactColor
      })
        .then((resolve) => {
          console.log(resolve.data)
        })
        .catch((error) => {
          console.log(error)
        })

      this.$root.$emit('data-base-modificated')
    },

    assignColorSelectedToContact (colorSelected) {
      this.contactColor = colorSelected;
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
.selectarea {
 --bg-opacity: 1;
    background-color: #718096;
    background-color: rgba(113, 128, 150, var(--bg-opacity));

}
</style>
