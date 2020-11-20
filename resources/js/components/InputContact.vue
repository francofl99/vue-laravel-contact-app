<template>

    <div class="bg-gray-400 rounded-md input mx-16 p-4 self-center">

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
                type="text"
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
                type="text"
                id="numero-telefono"
                class="mt-2 rounded-md h-8 pl-2 w-32"
                placeholder="5 166 293"
                v-model="contactPhoneNumber"
            />
        </form>

        <button
            class="border-b-4 border-teal-500 font-bold mt-12 hover:border-teal-600 bg-teal-400 rounded-md p-2 text-teal-900 border-transparent hover:bg-teal-500 transition duration-150 flex justify-between"
            @click="saveContact"
        >
            <vue-hicons name="check_circle" is-filled :width-icon="5" class=" my-auto mr-1"/>
                Agendar
        </button>
    </div>

</template>

<script>
import axios from 'axios'
import VueHicons from 'vue-hicons'

export default {
  name: 'InputContact',

  data () {
    return {
      contactName: '',
      contactLastName: '',
      contactAreaNumber: '',
      contactPhoneNumber: ''
    }
  },

  components: {
    VueHicons
  },

  methods: {
    saveContact () {
      axios.post('/saveContact', {
        nombre: this.contactName,
        apellido: this.contactLastName,
        codigo_area: this.contactAreaNumber,
        numero: this.contactPhoneNumber
      })
        .then((resolve) => {
          console.log(resolve.data)
        })
        .catch((error) => {
          console.log(error)
        })

      this.$root.$emit('data-base-modificated')
    }
  }

}
</script>

<style>
.input {
    width: 30%;
    height: 70%;
}
</style>
