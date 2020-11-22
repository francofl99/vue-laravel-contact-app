<template>
<div class="grid grid-rows-4 border-2 border-gray-800 rounded-md bg-gray-400 card ">

<div class="row-span-1 bg-gray-800 p-2 text-gray-800 items-center">
            <input
                type="text"
                class="rounded-md h-8 pl-2 w-full"
                placeholder="Nombre"
                v-model="thisContactName"
            />

        </div>
        <div class="p-2 text-gray-800 items-center flex">
            <input
                type="text"
                class=" rounded-md  h-8 pl-2 w-full"
                placeholder="Apellido"
                v-model="thisContactLastName"
            />

        </div>

        <div class="p-2 text-gray-800 items-start flex flex-wrap justify-between">
            <input
                type="number"
                class="rounded-md h-8 w-20 pl-2"
                placeholder="Area"
                v-model="thisContactAreaCode"
            />
            <input
                type="number"
                class="rounded-md h-8 pl-2 w-32"
                placeholder="Numero"
                v-model="thisContactPhoneNumber"
            />

        </div>

          <button
            class="save-button button border-teal-500 hover:border-teal-600 bg-teal-400 button text-teal-900 hover:bg-teal-500 flex"
            @click="updateContact">
              <vue-hicons name="check_circle" class="mx-auto" :width-icon="5" is-filled/>Guardar
          </button>

</div>

</template>

<script>
import VueHicons from 'vue-hicons'
import axios from 'axios'

export default {
  name: 'contactCardOnEditMode',

  components: {
    VueHicons
  },

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
      thisContactPhoneNumber: this.contactPhoneNumber
    }
  },

  methods: {
    updateContact () {
      axios.post('/updateContact', {
        id: this.contactId,
        nombre: this.thisContactName,
        apellido: this.thisContactLastName,
        codigo_area: this.thisContactAreaCode,
        numero: this.thisContactPhoneNumber
      })
        .then((resolve) => {
          console.log(resolve.data)
        })
        .catch((error) => {
          console.log(error)
        })

      this.$root.$emit('data-base-modificated')

      this.$emit('change-to-view-mode')
    }
  }

}
</script>

<style>
.card {
    height: 14rem;
}

.button {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 150ms;

     border-bottom-width: 4px;

    border-radius: 0.375rem;

}

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

</style>
