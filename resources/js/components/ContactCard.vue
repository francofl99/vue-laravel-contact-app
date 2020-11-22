<template>

<div class="w-full" >
 <div  v-if="cardOnViewMode" class="grid grid-rows-4 border-2 border-gray-800 rounded-md bg-gray-400 card ">

       <div class="row-span-1 bg-gray-800 p-2 text-gray-200 items-center flex">Nombre: {{ thisContactName }}</div>
      <div class="p-2 text-gray-800 items-center flex">Apellido: {{ thisContactLastName }}</div>
      <div class="p-2 text-gray-800 items-start flex" >Numero: ({{ thisContactAreaCode }}) - {{ thisContactPhoneNumber }}</div>

        <div class="px-2 flex justify-items-start">
            <button
                @click="cardOnViewMode = false"
                class="mr-2 button border-blue-500 hover:border-blue-600 bg-blue-400 text-blue-900 hover:bg-blue-500"
            >
                <vue-hicons class="mx-auto" name="pencil_alt" is-filled :width-icon="5"/>
            </button>
            <button class="button border-red-500 hover:border-red-600 bg-red-400 text-red-900 hover:bg-red-500" @click="removeContact">
                <vue-hicons class="mx-auto" :width-icon="5" name="trash" is-filled/>
            </button>
        </div>

  </div>

  <div  v-else class="grid grid-rows-4 border-2 border-gray-800 rounded-md bg-gray-400 card ">

        <div class="row-span-1 bg-gray-800 p-2 text-gray-200 items-center">
            <input
                type="text" id="nombre"
                class="rounded-md h-8 pl-2 w-full"
                placeholder="Nombre"
                v-bind="thisContactName"
            />

        </div>
        <div class="p-2 text-gray-800 items-center flex">
            <input
                type="text"
                id="apellido"
                class=" rounded-md  h-8 pl-2 w-full"
                placeholder="Apellido"
                v-bind="thisContactLastName"
            />

        </div>

        <div class="p-2 text-gray-800 items-start flex flex-wrap justify-between">
            <input
                type="number"
                id="area"
                class="rounded-md h-8 w-20 pl-2"
                placeholder="Area"
                v-bind="thisContactAreaCode"
            />
            <input
                type="number"
                id="numero-telefono"
                class="rounded-md h-8 pl-2 w-32"
                placeholder="Numero"
                v-bind="thisContactPhoneNumber"
            />

        </div>

          <button
            class="items-center place-items-start save-button border-b-4 border-teal-500 font-bold mx-2 pr-2  hover:border-teal-600 bg-teal-400 rounded-md  text-teal-900 border-transparent hover:bg-teal-500 transition duration-150 flex justify-between"
            @click="cardOnViewMode = true">
              <vue-hicons name="check_circle" class="mx-auto" :width-icon="5" is-filled/>Guardar
          </button>
  </div>
</div>

</template>

<script>
import VueHicons from 'vue-hicons'
import axios from 'axios'

export default {
  name: 'ContactCard',

  props: {
    contactId: Number,
    contactName: String,
    contactLastName: String,
    contactAreaCode: String,
    contactPhoneNumber: String
  },

  data () {
    return {
      thisContactName: this.contactName,
      thisContactLastName: this.contactLastName,
      thisContactAreaCode: this.contactAreaCode,
      thisContactPhoneNumber: this.contactPhoneNumber,

      cardOnViewMode: true
    }
  },

  components: {
    VueHicons
  },

  methods: {
    removeContact () {
      axios.post('/deleteContact', {
        id: this.contactId
      })
        .then((response) => {
          console.log('contact' + this.contactId + 'removed')
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
.card {
    height: 14rem;
}

.button {
    height: 85%;
    width: 28%;

    border-bottom-width: 4px;

    border-radius: 0.375rem;

    padding: 0.5rem;

    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 150ms;
}

.save-button {
  height: 85%;
  width: 46%;
}

</style>
