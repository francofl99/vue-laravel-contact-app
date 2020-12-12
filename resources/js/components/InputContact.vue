<template>
    <div class="input-container">
        <form class="input-area">
            <label
                for="nombre"
                class="input-body-item-label">
                    Nombre:
            </label>
            <input
                type="text" id="nombre"
                class="input-body-item w-full"
                placeholder="Juan"
                v-model="contactName"
            />

            <label
                for="apellido"
                class="input-body-item-label">
                    Apellido:
            </label>
            <input
                type="text"
                id="apellido"
                class="input-body-item w-full"
                placeholder="Perez"
                v-model="contactLastName"
            />

            <label
                for="area"
                class="input-body-item-label">
                    Codigo de area:
            </label>
            <input
                type="number"
                id="area"
                class="input-body-item  w-20"
                placeholder="358"
                v-model="contactAreaNumber"
            />
            <label
                for="numero-telefono"
                class="input-body-item-label">
                    Numero:
            </label>
            <input
                type="number"
                id="numero-telefono"
                class="input-body-item w-32"
                placeholder="5 166 293"
                v-model="contactPhoneNumber"
            />
        </form>

        <div class="flex  w-full h-auto items-center">
              <custom-button :name="'color-dropdown-button'" :color="contactColor" v-on:colorPicked="assignColorPickedToContact" />
        </div>
        <custom-button class="save-button" :name="'save-button'" @click.native="insertContact"/>
    </div>
</template>

<script>
import CustomButton from './CustomButton'

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
    CustomButton
  },

  methods: {
    insertContact () {
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
  }
}
</script>

<style scoped>
.input-container {
  @apply input-size bg-gray-400 rounded-md mx-16 p-4 self-center flex flex-wrap;
}

.input-size {
    width: 30%;
    height: 85%;
}

.input-area {
  @apply flex-wrap flex w-full;
}

.input-body-item-label {
  @apply text-gray-800 w-full;
}

.input-body-item {
  @apply rounded-md h-8 pl-2 my-2;
}

.save-button {
  @apply place-self-start self-end;
}
</style>
