<template>
  <view-container>
    <div class="bg-gray-500 w-full p-4 flex main-view justify-between">
      <!-- <input-contact/> -->

      <div class="bg-gray-400 rounded-md input ml-4 mt-4 p-4">
        <form class="flex-wrap flex">
          <label for="nombre" class="text-gray-800"> Nombre </label>
          <input
            type="text"
            id="nombre"
            class="my-2 rounded-md h-8 pl-2 w-full"
            placeholder="Juan"
            v-model="contactName"
          />

          <label for="apellido" class="text-gray-800"> Apellido </label>
          <input
            type="text"
            id="apellido"
            class="my-2 rounded-md h-8 pl-2 w-full"
            placeholder="Perez"
            v-model="contactLastName"
          />

          <label for="area" class="text-gray-800 w-full">
            Codigo de area
          </label>
          <input
            type="text"
            id="area"
            class="my-2 rounded-md h-8 w-20 pl-2"
            placeholder="358"
            v-model="contactAreaNumber"
          />
          <label for="numero-telefono" class="text-gray-800 w-full">
            Numero
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
          class="border-b-4 border-teal-500 font-bold mt-8 hover:border-teal-600 bg-teal-400 rounded-md p-2 text-teal-900 border-transparent hover:bg-teal-500 transition duration-150"
          @click="saveContact"
        >
          Agendar
        </button>
      </div>

      <card-container :key="cardContainerKey" />
    </div>
  </view-container>
</template>

<script>
    import ViewContainer from "./ViewContainer.vue";
    // import InputContact from '../js/components/InputContact'
    import CardContainer from "../js/components/CardContainer.vue";

    import axios from 'axios';

    export default {
        name: "MainView",

        components: {
            ViewContainer,
            // InputContact,
            CardContainer,
        },

        data() {
             return {
                contactName: '',
                contactLastName: '',
                contactAreaNumber: '',
                contactPhoneNumber: '',

                cardContainerKey: 0
            }   
        },

        methods: {
            saveContact() {
                axios.post('/saveContact', {
                    nombre: this.contactName,
                    apellido: this.contactLastName,
                    codigo_area: this.contactAreaNumber,
                    numero: this.contactPhoneNumber
                })
                .then((resolve) => {
                    console.log(resolve.data);
                })
                .catch((error) => {
                    console.log(error);
                });

                this.cardContainerKey += 1;
            }
        }
    };
</script>

<style>
.main-view {
  height: 88%;
}

.input {
    width: 30%;
    height: 73%;
}
</style>