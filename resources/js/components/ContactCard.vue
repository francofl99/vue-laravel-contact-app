<template>
  <div class="border-2 border-gray-800 rounded-md bg-gray-400 card mx-4 grid grid-rows-4">
      <div class="row-span-1 bg-gray-800 p-2 text-gray-200 items-center flex">Nombre: {{ contactName }}</div>
      <div class="p-2 text-gray-800 items-center flex">Apellido: {{ contactLastName }}</div>
      <div class="p-2 text-gray-800" >Codigo de Area: {{ contactAreaCode }}</div>
      <div class="p-2 text-gray-800">Numero: {{ contactPhoneNumeber }}</div>
  </div>
</template>

<script>
export default {
    name: 'ContactCard',

    props: {
        contactName: String,
        contactLastName: String,
        contactAreaCode: String,
        contactPhoneNumeber: String
    }
}
</script>

<style>
.card {
    height: 90%;
    width: 90%;
}

</style>