<template>
<div class="card-design rounded-md bg-gray-100">
    <div :class="contactColor == 'gray' ? 'bg-' + contactColor + '-800' : 'bg-' + contactColor + '-500' " class=" rounded-t-md row-span-1 p-2 text-gray-200 items-center flex">Nombre: {{ contactName }}</div>
      <div class="p-2 text-gray-800 items-center flex">Apellido: {{ contactLastName }}</div>
      <div class="p-2 text-gray-800 items-start flex" >Numero: ({{ contactAreaCode }}) - {{ contactPhoneNumber }}</div>

        <div class="px-2 flex justify-items-start">
            <button
                @click="notifyClick"
                class="mr-2 button view-button border-blue-500 hover:border-blue-600 bg-blue-400 text-blue-900 hover:bg-blue-500"
            >
                <vue-hicons class="mx-auto" name="pencil_alt" is-filled :width-icon="5"/>
            </button>
            <button class="button view-button border-red-500 hover:border-red-600 bg-red-400 text-red-900 hover:bg-red-500" @click="removeContact">
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
    contactId: Number,
    contactName: String,
    contactLastName: String,
    contactAreaCode: String,
    contactPhoneNumber: String,
    contactColor: String
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
    },

    notifyClick () {
      this.$emit('editButtonClicked')
    }
  }
}
</script>

<style>
.view-button {
  height: 85%;
  width: 28%;

  padding: 0.5rem;
}
</style>
